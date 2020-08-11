""" Routes to show apartments """
import os
from flask import Flask
from flask_cors import CORS, cross_origin
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

@app.route('/apartment', methods=["GET"])
def show_apartment():
    """ Return JSON object of specific apartment """

    example = "https://sfbay.craigslist.org/sfc/roo/d/san-francisco-huge-room-in-nopa-2/7168899087.html"

    output = get_apartment(example)

    return output
