from project import db, SECRET_KEY
from sqlalchemy.exc import IntegrityError
from project.helpers.web_capture import get_apartment
from jwt import encode


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
        apt_photos = [Photo(photo_url=photo,
                            p_apartment_url=url) for photo in new['pics']]

        try:
            rankings = Rankings(r_apartment_url=apt.apartment_url)
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

        output = [apt.serialize() for apt in apartments]

        return {"apartments": output}

    def serialize(self):
        """ Return a dictionary of the apartment. """

        serialized_rankings = self.rankings.serialize_for_apartment()
        serialized_photos = [photo.serialize_for_apartment() for
                             photo in self.photos]

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
    ranking_price_weight = db.Column(db.Numeric(7, 4), default=14.2857)
    ranking_location = db.Column(db.Integer, default=None)
    ranking_location_weight = db.Column(db.Numeric(7, 4), default=14.2857)
    ranking_space = db.Column(db.Integer, default=None)
    ranking_space_weight = db.Column(db.Numeric(7, 4), default=14.2857)
    ranking_parking = db.Column(db.Integer, default=None)
    ranking_parking_weight = db.Column(db.Numeric(7, 4), default=14.2857)
    ranking_privacy = db.Column(db.Integer, default=None)
    ranking_privacy_weight = db.Column(db.Numeric(7, 4), default=14.2857)
    ranking_laundry = db.Column(db.Integer, default=None)
    ranking_laundry_weight = db.Column(db.Numeric(7, 4), default=14.2857)
    ranking_common_space = db.Column(db.Integer, default=None)
    ranking_common_space_weight = db.Column(db.Numeric(7, 4), default=14.2857)
    ranking_aggregate = db.Column(db.Numeric(5, 2), default=0.00)
    r_apartment_url = db.Column(db.String(145),
                                db.ForeignKey("apartment.apartment_url"))

    def __repr__(self):
        """ representation of Rankings instance."""

        return f"""<Ranking #{self.ranking_id}
                   for Apartment #{self.r_apartment_url}>"""

    @classmethod
    def get_rankings(cls, r_apartment_url):
        """ get the rankings for an apartment by its url """

        rankings = Rankings.query.filter_by(r_apartment_url=r_apartment_url).first()
        return rankings

    def serialize_for_apartment(self):
        """ serialize an apartment's rankings """

        return {
            "ranking_id": self.ranking_id,
            "ranking_price": self.ranking_price,
            "ranking_price_weight": float(self.ranking_price_weight),
            "ranking_location": self.ranking_location,
            "ranking_location_weight": float(self.ranking_location_weight),
            "ranking_space": self.ranking_space,
            "ranking_space_weight": float(self.ranking_space_weight),
            "ranking_parking": self.ranking_parking,
            "ranking_parking_weight": float(self.ranking_parking_weight),
            "ranking_privacy": self.ranking_privacy,
            "ranking_privacy_weight": float(self.ranking_privacy_weight),
            "ranking_laundry": self.ranking_laundry,
            "ranking_laundry_weight": float(self.ranking_laundry_weight),
            "ranking_common_space": self.ranking_common_space,
            "ranking_common_space_weight": float(self.ranking_common_space_weight),
            "ranking_aggregate": float(self.ranking_aggregate),
            "r_apartment_url": self.r_apartment_url,
        }


class Photo(db.Model):
    """ Photo Table """

    __tablename__ = "photo"

    photo_id = db.Column(db.Integer, primary_key=True)
    photo_url = db.Column(db.String(145), unique=False)
    p_apartment_url = db.Column(db.String(145),
                                db.ForeignKey("apartment.apartment_url"))

    def __repr__(self):
        """ representation of Photo instance."""

        return f"<Photo {self.photo_id} for apt {self.p_apartment_url}>"

    def serialize_for_apartment(self):
        """ serialize a photo """

        return self.photo_url


class User(db.Model):
    """ USer Table """

    __tablename__ = "user"

    user_id = db.Column(db.Integer, primary_key=True)
    user_ip_address = db.Column(db.String(20), unique=True)
    user_token = db.Column(db.String(145), unique=True, default=None)

    def __repr__(self):
        """ representation of the User instance."""

        return f"<User {self.user_id}>"

    @classmethod
    def generate_token(cls, ip_address):
        encoded_jwt = encode(
            {"user_ip_address": ip_address},
            SECRET_KEY,
            algorithm="HS256",
        )

        token = encoded_jwt.decode("utf8")

        return token

    @classmethod
    def create_user(cls, ip_address):

        token = User.generate_token(ip_address)
        user = User(user_ip_address=ip_address, user_token=token)

        try:
            db.session.add(user)
            db.session.commit()

        except IntegrityError:
            {"errors": {"ip_address":
                        "There was a problem registering this user."}}