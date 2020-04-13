##########################################
# Dependencies
##########################################
import sqlalchemy
from sqlalchemy import create_engine, func
from sqlalchemy import Column, Integer, String, Float
from flask import Flask, jsonify, render_template
# Extensions
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.ext.declarative import declarative_base
# ORMs
from sqlalchemy.orm import Session




##########################################
# Database Setup
##########################################
# automap base
Base = automap_base()

# Class to serve as anchor point for the table
class Rankings(Base):
    __tablename__ = 'RANKINGS'
    overall_rank = Column(Integer, primary_key=True)
    country = Column(String)
    score = Column(Float)
    gdp_per_capita = Column(Float)
    social_support = Column(Float)
    healthy_life_expectancy = Column(Float)
    freedom_to_choose = Column(Float)
    generosity = Column(Float)
    perception_of_corruption = Column(Float)
    latitude = Column(Float)
    longitude = Column(Float)

# reflect the tables
engine = create_engine('sqlite:///happyRanksDB.sqlite')
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
        data_dict['country'] = country
        data_dict['score'] = score
        data_dict['overall_rank'] = overall_rank
        data.append(data_dict)

    return jsonify(data)   

# Chloropleth map route
#######################
@app.route("/choropleth")
def choropleth():
    return render_template("choroplethmap.html")


if __name__ == "__main__":
    app.run(debug = True)