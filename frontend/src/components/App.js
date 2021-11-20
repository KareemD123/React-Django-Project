import React, { Component} from "react";
import { Switch, Route, Link } from "react-router-dom"; 
import Login from "./login";
import Signup from "./signup";
import CreateHost from "./createhost";
import ListofUsers from "./listofusers";
import axiosInstance from "../axiosApi";
import { BrowserRouter as Router} from "react-router-dom";


class App extends Component {
        constructor() {
            super();
            this.handleLogout = this.handleLogout.bind(this);
        }

        async handleLogout() {
        try {
            const response = await axiosInstance.post('/blacklist/', {
                "refresh_token": localStorage.getItem("refresh_token")
            });
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            return response;
        }
        catch (e) {
            console.log(e);
        }
    };


    render() {
        return (
            <div className='container'>
                <div className='navbar'>
                    <Link className={"nav-link"} to={"/"}>Home</Link>
                    <Link className={"nav-link"} to={"/login/"}>Login</Link>
                    <Link className={"nav-link"} to={"/signup/"}>Signup</Link>
                    <Link className={"nav-link"} to={"/users/"}>List of Users</Link>
                    <Link className={"nav-link"} to={"/create/host"}>Create a Host</Link>
                    <button className={"button-align"} onClick={this.handleLogout}>Logout</button>
                </div>
                <div className='main_header'>
                    <Switch>
                        <Route exact path={"/login/"} component={Login}/>
                        <Route exact path={"/signup/"} component={Signup}/>
                        <Route exact path={"/users/"} component={ListofUsers}/>
                        <Route exact path={"/create/host"} component={CreateHost}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
