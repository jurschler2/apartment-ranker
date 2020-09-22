""" Routes to show apartments """
from project import db
from flask import request, Blueprint
from project.models.models import Apartment, Rankings
from project.helpers.decorators import jwt_required

apartment_ranker_api = Blueprint("apartment_ranker_api", __name__)


@apartment_ranker_api.route('/api/apartments', methods=["POST"])
@jwt_required
def create_apartment():
    """ Return JSON object of specific apartment """

    new_apt_url = request.json['url']

    output = Apartment.add_apartment(url=new_apt_url)

    return output.serialize()


@apartment_ranker_api.route('/api/apartment/<int:apartment_id>', methods=["GET"])
def show_specific_apartment(apartment_id):
    """ Return JSON object of specific apartment """

    apt = Apartment.query.get_or_404(apartment_id)

    output = apt.serialize()

    return output


@apartment_ranker_api.route('/api/apartments/<int:ranking_id>', methods=["PATCH"])
@jwt_required
def update_rankings(ranking_id):
    """ PATCH an existing apartment's rankings """

    rankings = Rankings.query.get_or_404(ranking_id)

    updates = request.json['formData']

    for key in updates:
        setattr(rankings, key, updates[key])

    db.session.commit()

    apt = Apartment.query.get_or_404(rankings.r_apartment_url)

    output = apt.serialize()

    return output


@apartment_ranker_api.route('/api/apartments', methods=["GET"])
@jwt_required
def get_every_apartment():
    """ """

    output = Apartment.get_all_apartments()

    return output
