##########################################
# Dependencies
##########################################
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template


##########################################
# Database Setup
##########################################
engine = create_engine('sqlite:///happyRanks.sqlite')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
# HappinessRankings = Base.classes.HappinessRankings
tables = engine.table_names()
print(tables)
##########################################
# Flask Setup
##########################################
app = Flask(__name__)

##########################################
# Flask Routes
##########################################
@app.route("/")
def home():

    # return render_template("index.html", rankings_data=HappinessRankings)
    return render_template("index.html")
@app.route("/circular")
def circular():
    return render_template("circular_bar.html")

def circular_bar():
    """ Return 2019 Happiness Rankings data as json """
    session = Session(engine)

    # Query all countries, scores, and GDP
    results = session.query(RANKINGS['country'], RANKINGS.['score'], RANKINGS['gdp_per_capita']).all()

    session.close()

    all_rankings = []
    for country, score, gdp in results:
        rankings_dict = {}
        rankings_dict['country'] = country
        rankings_dict['score'] = score
        rankings_dict['gdp_per_capita'] = gdp_per_capita
        all_rankings.append(rankings_dict)

    return jsonify(all_rankings)   

@app.route("/world/map")
def world():
    session = Session(engine)

    results = session.query(RANKINGS['country'], RANKINGS.['score'], RANKINGS['overall_rank']).all()
    
    session.close()

    data = []
    for country, score, rank in results:
        data_dict = {}
        rankings_dict = {}
        rankings_dict['country'] = country
        rankings_dict['score'] = score
        rankings_dict['overall_rank'] = overall_rank
        data.append(data_dict)

    return jsonify(data)   

@app.route("/choropleth")
def choropleth():
    return render_template("choroplethmap.html")


if __name__ == "__main__":
    app.run(debug = True)