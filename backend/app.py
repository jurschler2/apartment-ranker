""" Routes to show apartments """

from flask import Flask
from flask_cors import CORS, cross_origin
# from flask_debugtoolbar import DebugToolBarExtension
from helpers import get_apartment

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
# toolbar = DebugToolBarExtension(app)

@app.route('/apartment', methods=["GET"])
def show_apartment():
    """ Return JSON object of specific apartment """

    example = "https://sfbay.craigslist.org/sfc/roo/d/san-francisco-huge-room-in-nopa-2/7168899087.html"

    output = get_apartment(example)

    return output
