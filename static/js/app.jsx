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

        this.state = {
            errorMessage: ""
          }
    }
    

    render() {
        return (
            <div id="container">
                <div id="logoheader" class="row">
                    <div class="col-2">
                        <img src="/static/img/Logo.png" width="200px" height="175px" />
                    </div>

                    <div col="7">
                         <h3>Welcome to S'Cool Carpool!</h3>
                        <h4>A safe and hassle-free neighborhood carpool for your kids </h4>
                    </div>
                </div>

                <div className="showerror" class="row">
                    <div class="col-4">
                        {/*Display errors during SignUp */}
                        <p>{this.props.errorMessage}</p>
                        <p>Show login error(s) here (in red)..</p>
                    </div>

                    <div col="5">
                    {   /*Display errors during Login */}
                        <p>Show login error(s) here (in red)..</p>
                    </div>
                </div>

                <div id="accountinfo" class="row">
                    <div class="col-4">
                        <SignUp />
                    </div>

                    <div class="col-5">
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
            errorMessage: "",
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
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.ValidateParent = this.ValidateParent.bind(this)
    }



    componentDidMount() {

    
        fetch('/parent')
            .then(response => {
            return response.json();
            })
            .then(data => {
            alert(`Data fetched is ${data}`);
            });
    }
    
    // Testing with JQuery .get..
    //     $.get('/parent', (response) => {
    //         console.print("Going to fetch data");
    //         this.setState(response, 
    //             isLoaded = True);
    //     });
    // }


    ValidateParent() {
        //Initial basic test. 
        //After the message display works, expand on field validations
        if (this.state.parentFname.length < 2) {
                this.state.errorMessage = "Please enter a valid first name!"
                //render the error message in the Error-Message tag
            }
        return(this.state.errorMessage)
        }

    //Handle Change event 
    handleChange(event) {

        const target = event.target
        const value = target.value
        const name =  target.name

        this.setState({
            [name]: value
        });

    }
    

    handleSubmit(event) {
        event.preventDefault();
        
        //Validate the values entered and send request to backend in success 
        this.ValidateParent();
        const ErrMsg = this.state.errorMessage
        if (ErrMsg !== "") {
            alert(ErrMsg);

        }
        // if fetch returns nothing, insert a new record for the user  
        // const signupInfo = {
        //     parentFname = this.state.parentFname
        //     parentLname = this.state.parentLname
        //     address1 = this.state.address1
        //     address2 = this.state.address2
        //     city = this.state.city
        //     resState = this.state.resState
        //     email = this.state.email
        //     password = this.state.password
        // }

        // fetch('/Parent/', {
        //     method: 'post',
        //     body: JSON.stringify(signupInfo)
        // })
        // .then(resp ==> resp.json())
        // .then(data) => {

        // }


        // }
        
    }

    render() {
        return(
            <div>
                <h5>Signup to start booking rides</h5>
                <form onSubmit={this.handleSubmit}>
                                    
                    <label>
                        First Name: 
                        <input 
                            name="parentFname" 
                            type="text" 
                            value={this.state.parentFname}
                            onChange={this.handleChange} />
                    </label>
                    <br />

                    <label>
                        Last Name: 
                            <input 
                            name="parentLname" 
                            type="text" 
                            value={this.state.parentLname}
                            onChange={this.handleChange} />
                    </label>
                    <br />

                    <label>
                        Address-1: 
                        <input 
                            name="address1" 
                            type="text" 
                            value = {this.state.address1}
                            onChange={this.handleChange} />
                    </label>
                    <br />

                    <label>
                        Address-2: 
                        <input 
                            name="address2" 
                            type="text" 
                            value = {this.state.address2}
                            onChange={this.handleChange} />
                    </label>
                    <br />

                    <label>
                        City: 
                        <input 
                            name="city" 
                            type="text" 
                            value = {this.state.city}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    
                    <label>
                        State: 
                        <input 
                            name="resState" 
                            type="text" 
                            value = {this.state.resState}
                            onChange={this.handleChange} />
                    </label>
                    <br />

                    <label>
                        Email: 
                        <input 
                            name="email" 
                            type="text" 
                            value = {this.state.email}
                            onChange={this.handleChange} />
                    </label>
                    <br />

                    <label>
                        Password: 
                        <input 
                            name="password" 
                            type="text" 
                            value = {this.state.password}
                            onChange={this.handleChange} />
                    </label>
                    <br />
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
            errorMessage: "",
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
                <h5>Manage your account</h5>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email: 
                        <input 
                            name="email" 
                            type="text" 
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </label>
                    <br />

                    <label>
                        Password: 
                        <input 
                            name="password" 
                            type="text" 
                            value ={this.state.password}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

class Parent extends React.Component{
// Show parent fields and accept child(ren) info in rows

    render() {
        return (<Signup />);
    }

}

ReactDOM.render(<Router History={hashHistory}>
        <Switch>
                <Route exact path="/" component={App} />
                
                <Route path="/signup/:id" component={Parent} />
                
                <Route path="/login/:id" component={ManageAccount} />

                <Route path="/parent/:id" component={SignUp} />

        </Switch>
    </Router>, document.getElementById('app'));

