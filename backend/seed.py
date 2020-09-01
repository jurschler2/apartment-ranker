from app import db
from models import Apartment


db.drop_all()
db.create_all()

apartment1 = Apartment.add_apartment(url='craigslist.org/example')
apartment2 = Apartment.add_apartment(url='ft.com')

apartment1.apartment_address = 'Masonic Near Fell'

db.session.add_all([apartment1, apartment2])
db.session.commit()
