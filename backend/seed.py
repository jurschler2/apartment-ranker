from app import db
from models import Apartment


db.drop_all()
db.create_all()

