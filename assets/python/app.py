# Dependencies 
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

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

    
if __name__ == "__main__":
    app.run(debug = True)