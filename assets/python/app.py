##########################################
# Dependencies
##########################################
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


##########################################
# Database Setup
##########################################
engine = create_engine('sqlite:///happy_ranks.sqlite')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Rankings = Base.classes.rankings

##########################################
# Flask Setup
##########################################
app = Flask(__name__)

##########################################
# Flask Routes
##########################################
@app.route("/")
def home():

    return render_template("index.html")

@app.route("/api/v1.0/multiple")
def multiple():
    """ Return 2019 Happiness Rankings data as json """
    session = Session(engine)

    results = session.query(Rankings(*entities).all()

    session.close()

    return jsonify(results)    

if __name__ == "__main__":
    app.run(debug = True)