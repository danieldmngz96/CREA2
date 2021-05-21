from flask import (
    Blueprint,
    render_template,
)
from flask_login import (
    login_required,
    current_user,
)
from . import db

main = Blueprint('main', __name__)


@main.route('/')
def index():
    return


@main.route('/profile')
@login_required
def profile():
    return #TODO: Return a json with user data 
