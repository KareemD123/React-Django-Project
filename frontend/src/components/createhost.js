import React, { Component } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import axiosInstance from "../axiosApi";


export default function CreateHost() {
    const [page, setPage] = useState(1);
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState({
        address: {
            id:'',
            address_line_1: '',
            address_line_2: '',
            zip_code: '',
            city: '',
            country: '',
            state: '',
        },
        host: {
            host_name: '',
            total_space: '',
            host_address: '',
            host_phone_number: '',
            special_instructions: '',
            price_rating: '',
            has_own_equipment: '',
        }
    });

    function goNextPage() {
        if (page == 2) return;
        setPage(page => page + 1)
    }

    function handleClick() {
            setData(data => {

            })
        };

    async function submitAddress(addressData) {
        try {
            const response = await axiosInstance.post('users/address/create', {
                address_line_1: data.address.address_line_1,
                address_line_2: data.address.address_line_2,
                zip_code: data.address.zip_code,
                city: data.address.city,
                country: data.address.country,
                state: data.address.state,
            });
            console.log(response)
            setData(data.address['id'] = response.data.id)
        } catch (error) {
            console.log(error.stack);
            this.setState({
                errors:error.response.data
            });
        }
    }
    async function submitHost(hostData) {
        try {
            const response = await axiosInstance.post('users/host/create', {
                host_name: data.host.host_name,
                total_space: data.host.total_space,
                host_address: data.address.id,
                host_phone_number: data.host.host_phone_number,
                special_instructions: data.host.special_instructions,
                price_rating: data.host.price_rating,
                has_own_equipment: data.host.has_own_equipment,
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
   
    return (
        <div className="login">
            {/* {Progress bar goes here} */}
            <p>Login form here</p>

            {page !== 2 && <button onClick={goNextPage}>Go Next</button>}
            {page == 2 && <button type='submit'>Go Next</button>}


            {/* {Content goes here} */}
            {page == 1 && <OnboardingAddress/>}
            {page == 2 && <OnboardingHost/>}
        </div>
    );
}

function OnboardingAddress() {
    return (
        <div className="grandParentContainer">
            <div className="parentContainer">
                <form onSubmit={() => submitAddress()} className="createHostForm">
                    <span className="material-icons">Become a host</span>
                    <input name="address_line_1" 
                        placeholder='Address Line 1' 
                        type="text" 
                        value={data.address.address_line_1}/>
                    <input name="address_line_2" 
                        placeholder='Address Line 2' 
                        type="text" 
                        value={data.address.address_line_2}/>
                    <input name="city" 
                        placeholder='City' 
                        type="text" 
                        value={data.address.city}/>
                    <input name="country" 
                        placeholder='Country' 
                        type="text" 
                        value={data.address.country}/>        
                    <input name="state" 
                        placeholder='State' 
                        type="text" 
                        value={data.address.state}/>                                                                                                                                                                                                                         
                    <input name="zip_code" 
                        placeholder='Zipcode' 
                        type="number" 
                        value={data.address.zip_code}/>                          
                    <div>
                        <input onClick={goNextPage} type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

function OnboardingHost() {
    return (
        <div className="grandParentContainer">
            <div className="parentContainer">
                <form onSubmit={() => submitHost()} className="createHostForm">
                    <span className="material-icons">Become a host</span>
                <input name="host_name" 
                    placeholder='Host Name' 
                    type="text" 
                    value={data.host.host_name}/>
                <input name="total_space" 
                    placeholder='Total Space' 
                    type="number" 
                    value={data.host.total_space}/>
                <input name="phone_number" 
                    placeholder='Phone Number' 
                    type="tel" 
                    value={data.host.phone_number}/>                       
                <input name="special_instructions" 
                    placeholder='Special Instructions' 
                    type="text" 
                    value={data.host.special_instructions}/>   
                <input name="has_own_equipment" 
                    placeholder='Has Own Equipment' 
                    type="button" 
                    value={data.host.has_own_equipment}
                    onClick={() => setToggle(!toggle)}
                    />      
                <div>
                    <input onClick={() => submitAddress()} type="submit" value="Submit"/>
                </div>
                </form>
            </div>
        </div>
    )
}