from app import db
from sqlalchemy.exc import IntegrityError
from helpers import get_apartment


class Apartment(db.Model):
    """ Apartment table """

    __tablename__ = "apartment"

    # apartment_id = db.Column(db.Integer, primary_key=True)
    apartment_url = db.Column(db.String(145), primary_key=True, unique=True)
    apartment_address = db.Column(db.String(145), default=None)
    apartment_price = db.Column(db.String(8), default=None)
    rankings = db.relationship("Rankings",
                               backref=db.backref('apartment'), uselist=False)
    photos = db.relationship("Photo",
                             backref=db.backref('apartment'), uselist=True)

    def __repr__(self):
        """ representation of Apartment instance."""

        return f"<Apartment {self.apartment_url}>"

    @classmethod
    def add_apartment(cls, url):
        """
        Add a new apartment to the database.

        Accepts a URL and returns the apartment if successful,
        specific error message if not successful.
        """

        new = get_apartment(url)

        apt = Apartment(apartment_url=url,
                        apartment_address=new['address'],
                        apartment_price=new['price'],
                        )
        apt_photos = [Photo(photo_url=photo, apartment_url=url) for photo in new['pics']]

        try:
            rankings = Rankings()
            rankings.apartment_url = apt.apartment_url
            db.session.add(apt)
            db.session.add(rankings)
            db.session.add_all(apt_photos)
            db.session.commit()
        except IntegrityError:
            return {'errors': {'url': 'URL already exists.'}}

        apt = Apartment.query.filter_by(apartment_url=url).first()
        return apt

    @classmethod
    def get_all_apartments(cls):
        """ Return a serialized object of all apartments """

        apartments = Apartment.query.all()

        return {"apartments": [apt.serialize() for apt in apartments]}

    def serialize(self):
        """ Return a dictionary of the apartment. """

        rankings = Rankings.get_rankings(apartment_url=self.apartment_url)
        serialized_rankings = rankings.serialize_for_apartment()
        serialized_photos = [photo.serialize_for_apartment() for photo in self.photos]

        return {
            "apartment_url": self.apartment_url,
            "apartment_price": self.apartment_price,
            "apartment_address": self.apartment_address,
            "apartment_rankings": serialized_rankings,
            "apartment_photos": serialized_photos,
        }


class Rankings(db.Model):
    """ Rankings Table """

    __tablename__ = "rankings"

    ranking_id = db.Column(db.Integer, primary_key=True)
    ranking_price = db.Column(db.Integer, default=None)
    ranking_location = db.Column(db.Integer, default=None)
    ranking_space = db.Column(db.Integer, default=None)
    ranking_parking = db.Column(db.Integer, default=None)
    ranking_privacy = db.Column(db.Integer, default=None)
    ranking_laundry = db.Column(db.Integer, default=None)
    ranking_living_room = db.Column(db.Integer, default=None)
    ranking_house_type = db.Column(db.Integer, default=None)
    apartment_url = db.Column(db.String(145),
                              db.ForeignKey("apartment.apartment_url"))

    def __repr__(self):
        """ representation of Rankings instance."""

        return f"""<Ranking #{self.ranking_id}
                   for Apartment #{self.apartment_url}>"""

    @classmethod
    def get_rankings(cls, apartment_url):
        """ get the rankings for an apartment by its url """

        rankings = Rankings.query.filter_by(apartment_url=apartment_url).first()
        return rankings

    def serialize_for_apartment(self):
        """ serialize an apartment's rankings """

        return {
            "ranking_id": self.ranking_id,
            "ranking_price": self.ranking_price,
            "ranking_location": self.ranking_location,
            "ranking_space": self.ranking_space,
            "ranking_parking": self.ranking_id,
            "ranking_privacy": self.ranking_privacy,
            "ranking_laundry": self.ranking_laundry,
            "ranking_living_room": self.ranking_living_room,
            "ranking_house_type": self.ranking_house_type,
            "apartment_url": self.apartment_url,
        }


class Photo(db.Model):
    """ Photo Table """

    __tablename__ = "photo"

    photo_id = db.Column(db.Integer, primary_key=True)
    photo_url = db.Column(db.String(145), unique=False)
    apartment_url = db.Column(db.String(145),
                              db.ForeignKey("apartment.apartment_url"))

    def __repr__(self):
        """ representation of Photo instance."""

        return f"<Photo {self.photo_id} for apt {self.apartment_url}>"

    def serialize_for_apartment(self):
        """ serialize a photo """

        return self.photo_url
