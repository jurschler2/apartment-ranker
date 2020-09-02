from app import db
from models import Apartment


db.drop_all()
db.create_all()

apartment1 = Apartment(apartment_url='craigslist.org/example')
apartment2 = Apartment(apartment_url='ft.com')

apartment1.apartment_address = 'Masonic Near Fell'

db.session.add_all([apartment1, apartment2])
db.session.commit()
