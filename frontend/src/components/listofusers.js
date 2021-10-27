import React, { Component } from "react";
import axiosInstance from "../axiosApi";

class ListofUsers extends Component {
    constructor() {
        super();
        this.state = {
            email: "", 
            first_name: "",
            last_name: "",
            is_artist: "",
            is_host: "",
            is_active: "",
        };
    }

    componentDidMount() {
        axios.get('user/list/', {
          })
          .then(function (response) {
            console.log(response);
            data = Array.from(response.data);
          })
    }

    render(){
        return(
        <table className="tat"> 
            <tr><th>email</th><th>first_name</th></tr><tr><th>last_name</th><th>is_artist</th></tr><tr><th>is_artist</th><th>is_active</th></tr>
            {
                this.state.map((data) =>
                    <tr className="trow"> 
                    <td>{data.email}</td>
                    <td>{data.first_name}</td>
                    <td>{data.last_name}</td>
                    <td>{data.is_artist}</td>
                    <td>{data.is_host}</td>
                    <td>{data.is_active}</td>
                </tr>)
            }
        </table>
            )
        }
};

export default ListofUsers;