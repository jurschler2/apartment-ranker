""" Routes to show apartments """

from flask import Flask
# from flask_debugtoolbar import DebugToolBarExtension
from helpers import get_apartment

app = Flask(__name__)
# toolbar = DebugToolBarExtension(app)

@app.route('/apartment', methods=["GET"])
def show_apartment():
    """ Return JSON object of specific apartment """

    example = "https://sfbay.craigslist.org/sfc/apa/d/san-francisco-spacious-2br-with-office/7160388648.html"

    output = get_apartment(example)

    return output