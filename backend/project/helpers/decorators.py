from flask import g, request
from project.models.models import User


def put_jwt_into_g():
    """ Function for grabbing the token out of the header,
    for when you don't need to error if the user isn't logged in """
    token = request.headers.get("Authorization")
    try:
        decoded = decode(token, SECRET_KEY, algorithms=["HS256"])
        g.user = User.query.filter_by(email=decoded["email"]).first()
    except (InvalidSignatureError, DecodeError):
        g.user = None