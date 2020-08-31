from app import db
from models import Apartment


db.drop_all()
db.create_all()

apartment = Apartment.add_apartment(url='craigslist.org/example')
apartment.apartment_address = 'Masonic Near Fell'

db.session.add(apartment)
db.session.commit()
