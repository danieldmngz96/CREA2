from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_login import LoginManager

import sqlalchemy

app = Flask(__name__)
#TODO: We must delete the below variables
app.config["SECRET_KEY"] = "This-is-a-secret-key" 
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = f"mysql+mysqlconnector://testuser:Demo@User5@localhost:3306/CREA2"


db = SQLAlchemy()
ma = Marshmallow(app)


def create_app():

    db.init_app(app)

    login_manager = LoginManager()
    login_manager.login_view = "auth.login"
    login_manager.init_app(app)

    from Flask.project.models.Client import Client

    @login_manager.user_loader
    def load_user(user_id):
        return Client.query.get(int(user_id))

    from .auth import auth as aut_blueprint

    app.register_blueprint((aut_blueprint))

    from .main import main as main_blueprint

    app.register_blueprint((main_blueprint))

    return app
