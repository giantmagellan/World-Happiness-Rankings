# Dependencies 
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
import numpy as np 
import pandas as pd 

import plotly as py
from plotly import tools
from plotly import subplots
import plotly.graph_objs as go
from plotly.offline import download_plotlyjs, init_notebook_mode, plot, iplot
init_notebook_mode(connected=True)


import warnings
warnings.filterwarnings("ignore", category=FutureWarning)

##########################################
# Database Setup
##########################################
app.config['SQLALCHEMY_DATABASE_URI'] = \ 
    'sqlite:///c:/Users/Rudy/Desktop/DataViz/projects/happiness-project/assets/python/happy_ranks.sqlite'
db = SQLAlchemy(app)

# class Happy(db.Model):
#     __tablename__ = 'Rankings'
#     __table_args__ = {'extend_existing': True}
#     LOC_CODE = db.Column(db.Text, primary_key=True)

##########################################
# Flask setup
##########################################
app = Flask(__name__)

##########################################
# Flask Routes
##########################################
@app.route("/")
def home():

    return render_template("index.html")

@app.route("/multiple")
def multiple():

    return ()

@app.route("/choropleth")
def choropleth():

    return choropleth(
        df_happiness = pd.read_csv("/Users/monicachao/Desktop/DatascienceBootcamp/HappinessProject/happiness-project/assets/data/2019_world_happy_rankings.csv")
    )
    def plotly_choropleth_map(countries, values, title, colorbar_title, projection, colorscale) :
    
    data = dict(type = 'choropleth', 
           colorscale = colorscale,
           locations = countries,
           locationmode = 'country names',
           z = values, 
           text = countries,
           colorbar = {'title': colorbar_title})
    
    layout = dict(title = title, 
                  geo = dict(showframe = True, 
                       projection = {'type': projection}))
    
    choroplethmap = go.Figure(data = [data], layout=layout)
    choroplethmap.update_layout(title=go.layout.Title(text=title, xref="paper", x=0.5))    
    
    iplot(choroplethmap)

    df_country_score = df_happiness[['Country or region','Score']]
    df_country_score.reset_index(drop=True, inplace=True)
    df = df_country_score
    fig = plotly_choropleth_map(df['Country or region'], df['Score'], 
                      'Choropleth of Global Happiness in 2019', 'Happiness Score', 
                      'natural earth', 'Inferno')


                      
if __name__ == "__main__":
    app.run(debug = True)