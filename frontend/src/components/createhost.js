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
            address_line_1: "",
            address_line_2: "",
            city: "",
            country: "",
            state: "",
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
            const response = await axiosInstance.post('users/address/create', {
                address_line_1: this.state.address_line_1,
                address_line_2: this.state.address_line_2,
                city: this.state.city, 
                country: this.state.country,
                state: this.state.state,
            });
            console.log(response)
            host_address = response.data.key 
        } catch(error) {
            console.log(error.stack);
            this.setState({
                errors:error.response.data
            });
        }
        try {
            const response = await axiosInstance.post('users/host/create', {
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
                        <form onSubmit={this.handleSubmit} className="createHostForm">
                            <span className="material-icons">Become a host</span>
                            <input name="host_name" 
                                   placeholder='Host Name' 
                                   type="text" 
                                   value={this.state.host_name} 
                                   onChange={this.handleChange}/>
                            <input name="total_space" 
                                   placeholder='Total Space' 
                                   type="number" 
                                   value={this.state.total_space} 
                                   onChange={this.handleChange}/>
                            <input name="address_line_1" 
                                   placeholder='Address Line 1' 
                                   type="text" 
                                   value={this.state.address_line_1} 
                                   onChange={this.handleChange}/>
                            <input name="address_line_2" 
                                   placeholder='Address Line 2' 
                                   type="text" 
                                   value={this.state.address_line_2} 
                                   onChange={this.handleChange}/>
                            <input name="city" 
                                   placeholder='City' 
                                   type="text" 
                                   value={this.state.city} 
                                   onChange={this.handleChange}/>
                            <input name="country" 
                                   placeholder='Country' 
                                   type="text" 
                                   value={this.state.country} 
                                   onChange={this.handleChange}/>        
                            <input name="state" 
                                   placeholder='State' 
                                   type="text" 
                                   value={this.state.state} 
                                   onChange={this.handleChange}/>                                                                                                                                                                                                                         
                            <input name="zip_code" 
                                   placeholder='Zipcode' 
                                   type="number" 
                                   value={this.state.zip_code} 
                                   onChange={this.handleChange}/>
                            <input name="special_instructions" 
                                   placeholder='Special Instructions' 
                                   type="text" 
                                   value={this.state.special_instructions} 
                                   onChange={this.handleChange}/>                                                                  
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