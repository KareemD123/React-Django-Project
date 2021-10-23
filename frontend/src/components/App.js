import React, { Component} from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Hello from './hello';
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
            <div className="site">
                <Navigation>
                    <Link className={"nav-link"} to={"/"}>Home</Link>
                    <Link className={"nav-link"} to={"/login/"}>Login</Link>
                    <Link className={"nav-link"} to={"/signup/"}>Signup</Link>
                    <Link className={"nav-link"} to={"/hello/"}>Hello</Link>
                    <button onClick={this.handleLogout}>Logout</button>
                </Navigation>
                    <main>
                        <h1>Ahhh after 10,000 years I'm free. Time to conquer the Earth!</h1>
                        <Switch>
                            <Route path='/' exact component={() => <Home/>}/>
                            <Route path='/about' exact component={() => <About/>}/>
                            <Route path='/contact' exact component={() => <Contact/>}/>
                            <Route exact path={"/login/"} component={Login}/>
                            <Route exact path={"/signup/"} component={Signup}/>
                            <Route exact path={"/hello/"} component={Hello}/>
                            <Route path={"/"} render={() => <div>Home again</div>}/>
                        </Switch>
                    </main>
                <Footer/>
                <Router/>
            </div>
        );
    }
}

export default App;