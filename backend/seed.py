from app import db
from models import Apartment


db.drop_all()
db.create_all()

apartment = Apartment(apartment_url='craigslist.org/example',
                      apartment_address='Masonic near Fell')

db.session.add(apartment)
db.session.commit()