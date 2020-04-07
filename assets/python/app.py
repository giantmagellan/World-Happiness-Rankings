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
Rankings = Base.classes.Rankings

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

@app.route("/api/circular")
def multiple():
    """ Return 2019 Happiness Rankings data as json """
    session = Session(engine)

    # Query all countries, scores, and GDP
    results = session.query(Rankings.Country, Rankings.Score, Rankings['GDP per capita']).all()

    session.close()

    all_rankings = []
    for country, score, gdp in results:
        rankings_dict = {}
        rankings_dict['Country'] = country
        rankings_dict['Score'] = score
        rankings_dict['GDP per capita'] = gdp
        all_rankings.append(rankings_dict)

    return jsonify(all_rankings)   

@app.route("/world/map")
def world():
    session = Session(engine)

    results = session.query(Rankings.Country, Rankings.Score, Rankings['Overall rank']).all()
    
    session.close()

    data = []
    for country, score, rank in results:
        data_dict = {}
        data_dict['Country'] = country
        data_dict['Score'] = score
        data_dict['Overall rank'] = rank
        data.append(data_dict)

    return jsonify(data)   

@app.route("/choropleth")
def choropleth():
    return render_template("choroplethmap.html")


if __name__ == "__main__":
    app.run(debug = True)