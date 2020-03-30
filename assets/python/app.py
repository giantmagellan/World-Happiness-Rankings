# Dependencies 
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

# Creating instance of flask app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = \ 
    'sqlite:///c:/Users/Rudy/Desktop/DataViz/projects/happiness-project/assets/python/happy_ranks.sqlite'
db = SQLAlchemy(app)

class Happy(db.Model):
    __tablename__ = ''
@app.route("/")
def index():

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug = True)