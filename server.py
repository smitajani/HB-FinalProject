"""Server for movie ratings app."""

from flask import (Flask, render_template, request, flash, 
                    session, redirect) 

from model import db, connect_to_db
import crud
from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = "sjhbproject"
app.jinja_env.undefined = StrictUndefined

@app.route('/')
def homepage():
    """View homepage"""
    return render_template("homepage.html")

@app.route('/parent')
def get_parent():
    # Setting to 1 to test getting data back
    parent_info = crud.get_detail("Parent", 1)
    print("2..", parent_info)
    return render_template('parent.html', id=1)


print("Calling connect to DB from server.py")
connect_to_db(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
