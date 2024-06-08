import os
import pandas as pd
import zipfile
import psycopg2
from psycopg2 import sql
import numpy as np
# from dotenv import load_dotenv

# Ładowanie zmiennych środowiskowych z pliku .env
# load_dotenv()

def read_gtfs_zip(zip_path):
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        gtfs_files = zip_ref.namelist()
        gtfs_data = {}
        for file in gtfs_files:
            if file.endswith('.txt'):
                with zip_ref.open(file) as f:
                    df = pd.read_csv(f)
                    gtfs_data[file] = df
    return gtfs_data

def create_table(cursor, table_name, df):
    columns = df.columns
    create_table_query = sql.SQL(
        f"CREATE TABLE IF NOT EXISTS {table_name} ("
        + ", ".join(f"{col} TEXT" for col in columns)
        + ");"
    )
    cursor.execute(create_table_query)

def insert_data(cursor, table_name, df):
    df = df.astype(object).where(pd.notnull(df), None)
    for _, row in df.iterrows():
        columns = df.columns
        values = [int(row[col]) if isinstance(row[col], (np.integer, np.int64)) else row[col] for col in columns]
        insert_query = sql.SQL(
            f"INSERT INTO {table_name} ("
            + ", ".join(columns)
            + ") VALUES ("
            + ", ".join(["%s"] * len(values))
            + ");"
        )
        cursor.execute(insert_query, values)

def load_gtfs_data(gtfs_zip_path, db_uri):
    gtfs_data = read_gtfs_zip(gtfs_zip_path)
    
    conn = psycopg2.connect(db_uri)
    cursor = conn.cursor()

    for file_name, df in gtfs_data.items():
        table_name = os.path.splitext(file_name)[0]
        create_table(cursor, table_name, df)
        insert_data(cursor, table_name, df)

    conn.commit()
    cursor.close()
    conn.close()

    print("Tabele zostały pomyślnie utworzone i wypełnione danymi z pliku GTFS.")

if __name__ == "__main__":
    gtfs_zip_path = "../resources/kau.zip"
    db_uri = (
        f'postgresql://root:'
        f'root@'
        f'localhost:'
        f'5432/'
        f'kosciuszkon'
    )

    load_gtfs_data(gtfs_zip_path, db_uri)
