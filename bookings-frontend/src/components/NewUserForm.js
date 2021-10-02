//Folllowing tutorial here: https://blog.logrocket.com/creating-an-app-with-react-and-django/

import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewUserForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    email: "",
    phone: "",
    first_name: "",
    last_name: "",
    is_artist: "",
    is_host: "",
  };

  componentDidMount() {
    if (this.props.user) {
      const { pk, name, email, phone, first_name, last_name, is_artist, is_host} = this.props.user;
      this.setState({ pk, name, email, phone, first_name, last_name, is_artist, is_host });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createUser = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editUser = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.user ? this.editUser : this.createUser}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone:</Label>
          <Input
            type="text"
            name="phone"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="first_name">First Name:</Label>
          <Input
            type="text"
            name="first_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.first_name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="last_name">Last Name:</Label>
          <Input
            type="text"
            name="last_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.last_name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="is_artist">Are you signing up as an artist:</Label>
          <Input
            type="radio"
            name="is_artist"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.is_artist)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="is_host">Are you signing up as a host:</Label>
          <Input
            type="radio"
            name="is_host"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.is_host)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewUserForm;