import os 
import sys 
import django
import pandas as pd
from users.models import User 

django.setup()

sys.path.append('/Users/omardraz/Desktop/Programming/PycharmProjects/React Project Django/users')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_project.settings')

def run():
    print('Reading the csv...')
    user_df = pd.read_csv('data.csv')

    user_array = user_df.to_dict(orient='records')

    for entry in user_array:
        user = User(
            email = entry['email'],
            phone = entry['phone'],
            first_name = entry['first_name'],
            last_name = entry['last_name'],
            is_artist = entry['is_artist'],
            is_host = entry['is_host'],
        )
        user.save() 
    print('Saved all entries to the database')
    return 

if __name__ == '__main__':
    run()