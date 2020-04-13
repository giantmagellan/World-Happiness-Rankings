##########################################
# Dependencies
##########################################
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template


##########################################
# Database Setup
##########################################
engine = create_engine('sqlite:///happyRanksDB.sqlite')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
# Rankings = Base.classes.Rankings

session = Session(engine)

##########################################
# Flask Setup
##########################################
app = Flask(__name__)

##########################################
# Flask Routes
##########################################
# Home route
############
@app.route("/")
def home():

    # return render_template("index.html", rankings_data=HappinessRankings)
    return render_template("index.html")

# Circular Bar Plot route
#########################
@app.route("/circular")
def circular_bar():
    """ Return 2019 Happiness Rankings data as json """
    session = Session(engine)

    # Query all countries, scores, and GDP
    results = session.query(Rankings.country, Rankings.score, Rankings.gdp_per_capita).all()

    session.close()

    all_rankings = []
    for country, score, gdp_per_capita in results:
        rankings_dict = {}
        rankings_dict['country'] = country
        rankings_dict['score'] = score
        rankings_dict['gdp_per_capita'] = gdp_per_capita
        all_rankings.append(rankings_dict)

    return jsonify(all_rankings)   

# Leaflet viz route
###################
@app.route("/world/map")
def world():
    session = Session(engine)

    results = session.query(Rankings.country, Rankings.score, Rankings.overall_rank).all()
    
    session.close()

    data = []
    for country, score, overall_rank in results:
        data_dict = {}
        rankings_dict = {}
        rankings_dict['country'] = country
        rankings_dict['score'] = score
        rankings_dict['overall_rank'] = overall_rank
        data.append(data_dict)

    return jsonify(data)   

# Chloropleth map route
#######################
@app.route("/choropleth")
def choropleth():
    return render_template("choroplethmap.html")


if __name__ == "__main__":
    app.run(debug = True)