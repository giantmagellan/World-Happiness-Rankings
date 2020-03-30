# Dependencies
from flask import Flask, render_template
import flask.ext.sqlalchemy
import flask.ext.restless

# Creating instance of flask app
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URL'] = 'sqlite:///happy_ranks.sqlite'

db = flask.ext.sqlalchemy.SQLAlchemy(app)


@app.route("/")
def index():

    return render_template("index.html", )

if __name__ == "__main__":
    app.run(debug = True)