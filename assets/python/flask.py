# Dependencies
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

import flask.ext.sqlalchemy
import flask.ext.restless

# Creating instance of flask app
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////happy_ranks.sqlite'

db = flask.ext.sqlalchemy.SQLAlchemy(app)


@app.route("/")
def index():

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug = True)