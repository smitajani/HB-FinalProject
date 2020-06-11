// import React from "react";
// import ReactDOM from "react-DOM";
// import { Router, Route, IndexRoute, hashHistory } from "react-router";

"use strict";

 const Router = window.ReactRouterDOM.BrowserRouter;
 const Route =  window.ReactRouterDOM.Route;
 const Link =  window.ReactRouterDOM.Link;
 const Prompt =  window.ReactRouterDOM.Prompt;
 const Switch = window.ReactRouterDOM.Switch;
 const Redirect = window.ReactRouterDOM.Redirect;
 const IndexRoute = window.ReactRouter.BrowserRouter;
 const hashHistory = window.ReactRouter.BrowserRouter;
 const useLocation = window.ReactRouterDOM.useLocation;
 const useRouteMatch = window.ReactRouterDOM.useRouteMatch;

class App extends React.Component{

    constructor(props) {
        super(props);
        
        // //Initial state of component
        // this.state = {
        //     parentFname: "",
        //     parentLname: "",
        //     address1: "",
        //     address2: "",
        //     city: "",
        //     resState: "",
        //     email: "",
        //     password: ""
        // };

        
        // Required binding to make `this` work in the callback
 //       this.handleClick = this.handleClick.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.ValidateParent = this.ValidateParent.bind(this)
    }


    // //Handle Change event 
    // handleChange(event) {

    //     const target = event.target;
    //     const value = target.value;
    //     const name =  target.name;


    //     this.setState({
    //         [name]: value
    //     });

    // }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     console.log("App Parent: In submit");
    //     //Validate the values entered and send request to backend in success 
    //     this.ValidateParent();
    // }


    render() {
        return (
            <div id="container">
                <div className="Logo-Header" class="row">
                    <div class="col-2">
                        Logo here..
                        {/*img src="/static/img/Logo.png" width="200px" height="175px" /> */}
                    </div>

                    <div col="7">
                         <h3>Welcome to S'Cool Carpool!</h3>
                        {/*<h4>A safe and hassle-free neighborhood carpool for your kids </h4> */}
                    </div>
                </div>

                <div class="row">
                    <div className = "Home-SU" class="col-4">
                        <SignUp />
                    </div>

                    <div className = "Home-MA" class="col-5">
                        <ManageAccount />
                    </div>

                </div>
            </div>
        );   
    }
}




class SignUp extends React.Component{

    constructor(props) {
        super(props);
        
        //Initial state of component
        this.state = {
            parentFname: "",
            parentLname: "",
            address1: "",
            address2: "",
            city: "",
            resState: "",
            email: "",
            password: ""
        };

        
        // Required binding to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ValidateParent = this.ValidateParent.bind(this)
    }


    ValidateParent() {
        console.log("In validation!!!")
    
        if (this.state.parentFname.length < 2) {
                console.log("Please enter a valid first name!")
                return
        } else {
                console.log("Not validated!")
                return
            }
        }


    //Handle Change event 
    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name =  target.name;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("In submit");
        //Validate the values entered and send request to backend in success 
        this.ValidateParent();
    }

    render() {
        return(
            <div>
                <h4>Signup to start booking rides</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name: 
                        <input 
                            name="parentFname" 
                            type="text" 
                            value={this.state.parentFname}
                            onChange={this.handleChange} />
                    </label>
                    <br /><br />

                
                    <button>Sign Up</button>
                </form>
            </div>
        );
    }
}


class ManageAccount extends React.Component{


    constructor(props) {
        super(props);
        
        //Initial state of component
        this.state = {
            email: "",
            password: ""
        };

        
        // Required binding to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    //Handle Change event 
    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name =  target.name;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Manage Account: In submit");
        //Validate the values entered and send request to backend in success 
        this.ValidateParent();
    }



    render() {
        return (
            <div>
                <h4>Manage your account</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email: 
                        <input 
                            name="email" 
                            type="text" 
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </label>
                    <br /><br />

                    <label>
                        Password: 
                        <input 
                            name="password" 
                            type="text" 
                            value ={this.state.password}
                            onChange={this.handleChange} />
                    </label>
                    <br /><br />
                
                    <button>Login</button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(<Router History={hashHistory}>
                <Switch>
                        <Route exact path="/">
                            <App />
                        </Route>
                        <Route path="/signup">
                            <SignUp />
                        </Route>
                        <Route path="/login">
                            <ManageAccount />
                        </Route>
                </Switch>
            </Router>, document.getElementById('app'));

