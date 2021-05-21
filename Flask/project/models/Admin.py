from flask_login import UserMixin
from . import db


class Admin(UserMixin, db.Model):
    pk_idClient = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    name = db.Column(db.String(45))
    active = db.Column(db.Boolean)

    fk_idConcession = db.relationship(
        'pk_idConcession',
        lazy='select',
        backref=db.backref('Admin', lazy='joined')
    )
