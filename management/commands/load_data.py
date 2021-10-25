import csv 
from django.core.management import BaseCommand 
from users.models import User 

class Command(BaseCommand):
    help = 'Loads users into the database'

    def add_arguments(self, parser):
        parser.add_argument('--path', type-str)

    def handle(self, *args, **kwargs):
        path = kwargs['path']
        with open(path, 'rt') as f:
            reader = csv.reader(f, dialect='excel')
            for row in reader:
                User.objects.create(
                    attr1=row[0],
                    attr2=row[1],
                )