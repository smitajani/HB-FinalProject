
"""CRUD operations."""

from model import db, Parent, Child, School, Availability, Booked_Ride, connect_to_db


if __name__ == '__main__':
    from server import app
    print("Calling connect to DB from crud.py")
    connect_to_db(app)


def get_detail(table, id):
    """ Return the record for specific table and id """
    print(f"1.. In CRUD now, {table}")
    return db.session.query(Parent).filter(Parent.id == id).first()



def get_all(table):
    """ Return a list of all records from table specified (Parent, School, Child, 
        Availability or Booked_Ride) """
    return db.session.query(table).all()


#Create parent method
def create_parent(parent_fname, parent_lname, email, phone, 
                    address1, address2, city, state, zipcode, 
                    last_login, created_on, password):
    """Create and return a new PARENT """


    parent = Parent(parent_fname = parent_fname, 
                        parent_lname = parent_lname, 
                        email = email, 
                        phone = phone,
                        address1 = address1,
                        address2 = address2,
                        state = state, 
                        city = city,
                        zipcode = zipcode,
                        last_login = last_login,
                        created_on = created_on,
                        password = password
                        )

    db.session.add(parent)
    db.session.commit()

    return parent


#Create school method
def create_school(school_name, office_email, office_phone, 
                    address1, address2, city, state, 
                    zipcode, school_district, school_website, 
                    mon_start_am, mon_end_pm,
                    tue_start_am, tue_end_pm, 
                    wed_start_am, wed_end_pm, 
                    thu_start_am, thu_end_pm, 
                    fri_start_am, fri_end_pm):

    """Create and return a new SCHOOL """

    school = School(school_name = school_name,
                    office_email = office_email,
                    office_phone = office_phone,
                    address1 = address1,
                    address2 = address2,
                    city = city,
                    state = state,
                    zipcode = zipcode,
                    school_district = school_district,
                    school_website = school_website,
                    mon_start_am = mon_start_am,
                    mon_end_pm = mon_end_pm,
                    tue_start_am = tue_start_am,
                    tue_end_pm = tue_end_pm,
                    wed_start_am = wed_start_am,
                    wed_end_pm = wed_end_pm,
                    thu_start_am = thu_start_am,
                    thu_end_pm = thu_end_pm,
                    fri_start_am = fri_start_am,
                    fri_end_pm = fri_end_pm
                    )

    db.session.add(school)
    db.session.commit()

    return school
