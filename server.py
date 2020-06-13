from flask import (Flask, render_template, request, flash, jsonify, 
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

# @app.route('/', defaults={'path':''})
# @app.route('/<path:path>')
@app.route("/home")
def show_app(path):
    print("The path is: ", {path})
    """Redirect to homepage"""
    return redirect("/")


@app.route('/api/parent/<id>')
def get_parent(id):
    print("I'm here")
    parent_info = crud.get_detail_by_id("Parent", id)
    print("2 In server.py", parent_info.id, parent_info.parent_fname)
    return jsonify({"id" : parent_info.id, 
                    "parentFname" : parent_info.parent_fname,
                    "parentLname": parent_info.parent_lname,
                    "email" : parent_info.email,
                    "phone" : parent_info.phone,
                    "address1" : parent_info.address1,
                    "address2" : parent_info.address2,
                    "city" : parent_info.city,
                    "resState" : parent_info.state,
                    "zipcode" : parent_info.zipcode})



print("Calling connect to DB from server.py")
connect_to_db(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
