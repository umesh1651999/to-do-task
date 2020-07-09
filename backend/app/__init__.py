from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import Config


app = Flask(__name__)
app.debug = True

app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

CORS(app)
app.config['SECRET_KEY'] = "securedSecretKey"

from app import routes, models

