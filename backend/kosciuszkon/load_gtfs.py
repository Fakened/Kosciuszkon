import os
from gtfsdb import GTFS
from dotenv import load_dotenv

def load_gtfs_data():
    """
    Wczytuje dane GTFS z pliku ZIP i tworzy tabele w bazie danych PostgreSQL.

    :param gtfs_zip_path: Ścieżka do pliku GTFS ZIP
    :param db_uri: URI połączenia do bazy danych PostgreSQL
    """
    db_uri = os.getenv('DATABASE_URL')
    gtfs = GTFS(db_uri)

    # Wczytywanie pliku GTFS ZIP i tworzenie tabel w bazie danych
    gtfs.load_gtfs(gtfs_zip_path)

    print("Tabele zostały pomyślnie utworzone i wypełnione danymi z pliku GTFS.")

if __name__ == "__main__":
    # Ścieżka do pliku GTFS ZIP
    gtfs_zip_path = 'path_to_your_gtfs_file.zip'  # Zaktualizuj tę ścieżkę
    
    # URI połączenia do bazy danych PostgreSQL
    db_uri = 'postgresql://username:password@localhost:5432/your_database'  # Zaktualizuj te dane

    # Wczytywanie danych GTFS
    load_gtfs_data(gtfs_zip_path, db_uri)
