import React, { Component } from "react";
import axiosInstance from "../axiosApi";
import { useTable } from 'react-table';
import { Col, Row, Form } from "react-bootstrap";

class ListofUsers extends Component {
    constructor() {
        super();
        this.state = {
            users: ""
        };
    }

    componentDidMount() {
        axiosInstance.get('user/list/', {
          })
          .then(function (response) {
            console.log(response.data)
            this.setState({
                users: response.data 
            })
            console.log(this.state.users)
          }).catch(error => {
              console.log(error)
          })
    }

    render(){
        return (
            <div>
                <h1>{this.state.users}</h1>
            </div>
        );
        }
};

export default ListofUsers;



