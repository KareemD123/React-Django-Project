import React, { Component } from "react";
import axiosInstance from "../axiosApi";

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            password: "",
            email:"",
            first_name:"",
            last_name:"",
            is_artist: false,
            is_host: false,
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        try {
            const response = await axiosInstance.post('/user/create/', {
                email: this.state.email,
                password: this.state.password,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                is_artist: this.state.is_artist,
                is_host: this.state.is_host
            });
            console.log(response)
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
                            <input name="email" 
                                   placeholder='Email' 
                                   type="email" 
                                   value={this.state.email} 
                                   onChange={this.handleChange}/> { this.state.errors.email ? this.state.errors.email : null}
                            <input 
                                    name="first_name" 
                                    placeholder='First Name' 
                                    type="text" 
                                    value={this.state.first_name} 
                                    onChange={this.handleChange}/> { this.state.errors.first_name ? this.state.errors.first_name : null}
                            <input 
                                    name="last_name" 
                                    placeholder='Last Name' 
                                    type="text" 
                                    value={this.state.last_name} 
                                    onChange={this.handleChange}/> { this.state.errors.last_name ? this.state.errors.last_name : null}
                            <div className="radioContainer">
                                <p>I'd like to find a venue to play</p>
                                <input 
                                    type="radio" 
                                    name="is_artist"
                                    onChange={this.handleChange}
                                    value={this.state.is_artist}
                                    checked ={value == true} 
                                    />
                                <p>I have a venue to rent</p>
                                <input 
                                    type="radio" 
                                    name="is_host"
                                    onChange={this.handleChange}
                                    value={this.state.is_host}
                                    checked ={value == true} 
                                    />
                            </div>
                            <input name="password" placeholder='Password' type="password" value={this.state.password} onChange={this.handleChange}/> { this.state.errors.password ? this.state.errors.password : null}
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

