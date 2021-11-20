import React, { Component } from "react";
import axiosInstance from "../axiosApi";

class CreateHost extends Component{
    constructor(props){
        super(props);
        this.state = {
            host_name: '',
            total_space: "",
            date_joined: "",
            is_active: "",
            date_activated: "",
            host_address: "",
            host_phone_number: "",
            special_instructions: "",
            price_rating: "",
            has_own_equipment: "",
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
                host_name: this.state.host_name,
                total_space: this.state.total_space,
                date_joined: this.state.date_joined,
                is_active: this.state.is_active,
                date_activated: this.state.date_activated,
                host_address: this.state.host_address,
                host_phone_number: this.state.host_phone_number,
                special_instructions: this.state.special_instructions,
                price_rating: this.state.price_rating,
                has_own_equipment: this.state.has_own_equipment,
            });
            console.log(response)
            this.props.history.push('/');
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
                            <input name="host_name" 
                                   placeholder='Host Name' 
                                   type="text" 
                                   value={this.state.host_name} 
                                   onChange={this.handleChange}/> { this.state.errors.host_name ? this.state.errors.host_name : null}
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

export default CreateHost;

