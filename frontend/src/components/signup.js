import React, { Component } from "react";
import axiosInstance from "../axiosApi";

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            password: "",
            email:"",
            errors:{}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/user/create/', {
                email: this.state.email,
                password: this.state.password
            });
            return response;
        } catch (error) {
            console.log(error.stack);
            this.setState({
                errors:error.response.data
            });
        }
    }

    render() {
        return (
            <div className="login">
                <div className="grandParentContainer">
                    <div className="parentContainer">
                        <form onSubmit={this.handleSubmit} className="loginForm">
                            <span className="material-icons">velify</span>
                            <input name="email" placeholder='email' type="email" value={this.state.email} onChange={this.handleChange}/> { this.state.errors.email ? this.state.errors.email : null}
                            <input name="password" placeholder='password' type="password" value={this.state.password} onChange={this.handleChange}/> { this.state.errors.password ? this.state.errors.password : null}
                            <input name="password" placeholder='please enter password again' type="password" value={this.state.password} onChange={this.handleChange}/> { this.state.errors.password ? this.state.errors.password : null}
                            <div>
                                <input type="submit" value="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;

