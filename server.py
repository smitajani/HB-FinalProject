"""Server for movie ratings app."""

from flask import (Flask, render_template, request, flash, 
                    session, redirect) 

from model import connect_to_db
import crud
from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = "sjhbproject"
app.jinja_env.undefined = StrictUndefined

@app.route('/')
def homepage():
    """View homepage"""
    return render_template("homepage.html")

print("Calling connect to DB from server.py")
connect_to_db(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
