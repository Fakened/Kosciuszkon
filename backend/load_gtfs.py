import os
import zipfile
import pandas as pd
from datetime import datetime
from django.core.wsgi import get_wsgi_application
from urllib.parse import urlparse
import numpy as np

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
application = get_wsgi_application()

from kosciuszkon.serializers import (AgencySerializer, CalendarDatesSerializer, FeedInfoSerializer, RoutesSerializer,
                                     ShapesSerializer, TransfersSerializer, TripsSerializer, StopsSerializer, 
                                     CalendarSerializer)  # Import other serializers as needed

def read_gtfs_zip(zip_path):
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        gtfs_files = zip_ref.namelist()
        gtfs_data = {}
        for file in gtfs_files:
            if file.endswith('.txt'):
                with zip_ref.open(file) as f:
                    df = pd.read_csv(f)
                    table_name = os.path.splitext(file)[0]
                    gtfs_data[table_name] = df
    return gtfs_data

def convert_dates(df, date_columns):
    for column in date_columns:
        if column in df.columns:
            df[column] = pd.to_datetime(df[column], format='%Y%m%d', errors='coerce').dt.strftime('%Y-%m-%d')
    return df

def convert_url(df, url_columns):
    for column in url_columns:
        if column in df.columns:
            df[column] = df[column].apply(lambda x: x if pd.isna(x) or urlparse(str(x)).scheme in ['http', 'https'] else None)
    return df

def clean_data(df):
    if 'location_type' in df.columns:
        df['location_type'] = df['location_type'].replace({np.nan: 0}).astype(int)
    if 'parent_station' in df.columns:
        df['parent_station'] = df['parent_station'].apply(lambda x: int(x) if pd.notnull(x) else None)
    if 'wheelchair_accessible' in df.columns:
        df['wheelchair_accessible'] = df['wheelchair_accessible'].replace({np.nan: 0}).astype(int)
    return df

def save_routes(gtfs_data):
    if 'routes' in gtfs_data:
        print('routes')
        df = convert_url(gtfs_data['routes'], ['route_url'])
        df['route_id'] = df['route_id'].astype(int)
        df['agency_id'] = df['agency_id'].replace({np.nan: None})
        print(df['route_id'])
        for _, row in df.iterrows():
            serializer = RoutesSerializer(data=row.to_dict())
            if serializer.is_valid():
                serializer.save()
            else:
                print(f"Error in RoutesSerializer: {serializer.errors}")

def save_trips(gtfs_data):
    if 'trips' in gtfs_data:
        print('trips')
        df = gtfs_data['trips']
        df['direction_id'] = df['direction_id'].replace({np.nan: 0})
        df['wheelchair_accessible'] = df['wheelchair_accessible'].replace({np.nan: 0})
        for _, row in df.iterrows():
            data_row = row.to_dict()
        
            data_row['direction_id'] = int(data_row['direction_id'])
            data_row['wheelchair_accessible'] = int(data_row['wheelchair_accessible'])

            serializer = TripsSerializer(data=data_row)
            if serializer.is_valid():
                serializer.save()
            else:
                print(f"Error in TripsSerializer: {serializer.errors}")


def save_gtfs_data(gtfs_data):
    # Save other GTFS data (excluding routes and trips)
    for table_name, df in gtfs_data.items():
        if table_name == 'stops':
            print('stops')
            df = convert_url(df, ['stop_url'])
            df = clean_data(df)
            for _, row in df.iterrows():
                serializer = StopsSerializer(data=row.to_dict())
                if serializer.is_valid():
                    serializer.save()
                else:
                    print(f"Error in StopsSerializer: {serializer.errors}")
        elif table_name == 'calendar':
            print('calendar')
            df = convert_dates(df, ['start_date', 'end_date'])
            for _, row in df.iterrows():
                serializer = CalendarSerializer(data=row.to_dict())
                if serializer.is_valid():
                    serializer.save()
                else:
                    print(f"Error in CalendarSerializer: {serializer.errors}")
        elif table_name == 'agency':
            print('agency')
            for _, row in df.iterrows():
                serializer = AgencySerializer(data=row.to_dict())
                if serializer.is_valid():
                    serializer.save()
                else:
                    print(f"Error in AgencySerializer: {serializer.errors}")

        elif table_name == 'calendar_dates':
            print('calendar_dates')
            df = convert_dates(df, ['date'])
            for _, row in df.iterrows():
                serializer = CalendarDatesSerializer(data=row.to_dict())
                if serializer.is_valid():
                    serializer.save()
                else:
                    print(f"Error in CalendarDatesSerializer: {serializer.errors}")

        elif table_name == 'feed_info':
            print('feed_info')
            df = convert_dates(df, ['feed_start_date', 'feed_end_date'])
            for _, row in df.iterrows():
                serializer = FeedInfoSerializer(data=row.to_dict())
                if serializer.is_valid():
                    serializer.save()
                else:
                    print(f"Error in FeedInfoSerializer: {serializer.errors}")
        elif table_name == 'shapes':
            print('shapes')
            for _, row in df.iterrows():
                serializer = ShapesSerializer(data=row.to_dict())
                if serializer.is_valid():
                    serializer.save()
                else:
                    print(f"Error in ShapesSerializer: {serializer.errors}")
        elif table_name == 'transfers':
            print('transfers')
            for _, row in df.iterrows():
                serializer = TransfersSerializer(data=row.to_dict())
                if serializer.is_valid():
                    serializer.save()
                else:
                    print(f"Error in TransfersSerializer: {serializer.errors}")

if __name__ == "__main__":
    gtfs_zip_path = "resources/kau.zip"  # Change path to GTFS file
    gtfs_data = read_gtfs_zip(gtfs_zip_path)
    
    # First, save routes
    save_routes(gtfs_data)
    
    # Then, save trips
    save_trips(gtfs_data)
    
    # Finally, save other GTFS data
    save_gtfs_data(gtfs_data)
    
    print('Successfully loaded GTFS data')
