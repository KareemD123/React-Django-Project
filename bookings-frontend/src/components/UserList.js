import React, { Component } from "react";
import { Table } from "reactstrap";
import NewUserModal from "./NewUserModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

class UserList extends Component {
  render() {
    const user = this.props.user;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Is Artist</th>
            <th>Is Host</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!user || user.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Oops, no one here yet</b>
              </td>
            </tr>
          ) : (
            user.map(user => (
              <tr key={user.pk}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.is_artist}</td>
                <td>{user.is_host}</td>
                <td align="center">
                  <NewUserModal
                    create={false}
                    user={user}
                    resetState={this.props.resetState}
                  />
                  <ConfirmRemovalModal
                    pk={user.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default UserList;