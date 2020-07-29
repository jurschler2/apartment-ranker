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

    example = "https://sfbay.craigslist.org/sfc/apa/d/san-francisco-id1762-marina-1br-1ba/7166235246.html"

    output = get_apartment(example)

    return output