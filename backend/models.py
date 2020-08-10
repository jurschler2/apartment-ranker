from app import db


class Apartment(db.Model):
    """ Apartment table """

    __tablename__ = "apartment"

    apartment_id = db.Column(db.Integer, primary_key=True)
    apartment_url = db.Column(db.String(45), unique=True, default=None)
    apartment_address = db.Column(db.String(45), default=None)
    apartment_price = db.Column(db.Integer, default=None)
    apartment_ranking_price = db.Column(db.Integer, default=None)
    apartment_ranking_location = db.Column(db.Integer, default=None)
    apartment_ranking_space = db.Column(db.Integer, default=None)
    apartment_ranking_parking = db.Column(db.Integer, default=None)
    apartment_ranking_privacy = db.Column(db.Integer, default=None)
    apartment_ranking_laundry = db.Column(db.Integer, default=None)
    apartment_ranking_living_room = db.Column(db.Integer, default=None)
    apartment_ranking_house_type = db.Column(db.Integer, default=None)

    def __repr__(self):
        """ representation of Apartment instance."""

        return f"<Apartment #{self.apartment_id}: {self.apartment_url}>"

    def serialize(self):
        """ Return a dictionary of the apartment. """

        return {
            "apartment_id": self.apartment_id,
            "apartment_url": self.apartment_url,
            "apartment_price": self.apartment_price,
            "apartment_address": self.apartment_address,
            "apartment_rankings": {
                "apartment_ranking_price": self.apartment_ranking_price,
                "apartment_ranking_space": self.apartment_ranking_space,
                "apartment_ranking_location": self.apartment_ranking_location,
                "apartment_ranking_parking": self.apartment_ranking_parking,
                "apartment_ranking_privacy": self.apartment_ranking_privacy,
                "apartment_ranking_laundry": self.apartment_ranking_laundry,
                "apartment_ranking_living_room": self.apartment_ranking_living_room,
                "apartment_ranking_house_type": self.apartment_ranking_house_type,
            },
        }