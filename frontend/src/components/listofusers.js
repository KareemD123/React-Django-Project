import React, { Component } from "react";
import axiosInstance from "../axiosApi";
import { useTable } from 'react-table';
import { Col, Row, Form } from "react-bootstrap";

class ListofUsers extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        axiosInstance.get('user/list/', {
          })
          .then(response => {
            console.log(response.data)
            this.setState({
                users: response.data
            })
          }).catch(error => {
              console.log(error)
          })
    }

    render(){
        return (
            <div className="app-container">
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Is Active</th>
                            <th>Is Host</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user) =>(
                            <tr>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.is_active}</td>
                                <td>{user.is_host}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
        }
};

export default ListofUsers;
