""" Routes to show apartments """
import os
from flask import Flask, request
from flask_cors import CORS
# from flask_debugtoolbar import DebugToolBarExtension
from helpers import get_apartment
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
# toolbar = DebugToolBarExtension(app)

LOCAL_DEV_DB = "postgres:///apartment_ranker"

app.config['SQLALCHEMY_DATABASE_URI'] = (
    os.environ.get('DATABASE_URL', LOCAL_DEV_DB))

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False

db = SQLAlchemy(app)
db.app = app
db.init_app(app)
from models import Apartment


@app.route('/apartment', methods=["GET"])
def show_apartment(url):
    """ Return JSON object of specific apartment """

    # example = "https://sfbay.craigslist.org/sfc/roo/d/san-francisco-huge-room-in-nopa-2/7168899087.html"

    output = get_apartment(url)

    return output


@app.route('/apartment', methods=["POST"])
def create_apartment():
    """ Return JSON object of specific apartment """

    new_apt_url = request.json['url']

    # output = get_apartment(new_apt_url)

    output = Apartment.add_apartment(url=new_apt_url)

    return output.serialize()


@app.route('/apartment/<int:apartment_id>', methods=["GET"])
def show_specific_apartment(apartment_id):
    """ Return JSON object of specific apartment """

    apt = Apartment.query.get_or_404(apartment_id)

    output = apt.serialize()

    return output


@app.route('/apartment/<int:apartment_id>', methods=["PATCH"])
def update_rankings(apartment_id):
    """ PATCH an existing apartment's rankings """

    apt = Apartment.query.get_or_404(apartment_id)

    updates = request.json

    for key in updates:
        setattr(apt, key, updates[key])

    db.session.commit()

    output = apt.serialize()

    return output

@app.route('/apartment/all', methods=["GET"])
def get_every_apartment():
    """ """

    output = Apartment.get_all_apartments()

    return output
