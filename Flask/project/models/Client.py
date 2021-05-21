from flask_login import UserMixin
from . import db


class Client(UserMixin, db.Model):
    pk_idClient = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    telephone = db.Column(db.String(11), unique=True)
    password = db.Column(db.String(100), nullable=False)
    name = db.Column(db.String(45), nullable=False)
    user = db.Column(db.String(45), unique=True, nullable=False)
    active = db.Column(db.Boolean, nullable=False)

    fk_idPlan = db.relationship(
        'pk_idPlan',
        lazy='select',
        backref=db.backref('Client', lazy='joined')
    )
