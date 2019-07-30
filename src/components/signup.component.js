import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.onChangefirstName = this.onChangefirstName.bind(this);
    this.onChangelastName = this.onChangelastName.bind(this);
    this.onChangeuserName = this.onChangeuserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangedob = this.onChangedob.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: 'John',
      lastName: 'Smith',
      username: 'jsmith',
      email:'jsmith@yopmail.com',
      password:'123456',
      gender:'Male',
      dob:'1997.01.01'
    }
  }
  onChangefirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  onChangelastName(e) {
    this.setState({
      lastName: e.target.value
    })  
  }
  onChangeuserName(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }
  onChangedob(e) {
    this.setState({
      dob: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number
    };
    axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      firstName: 'John',
      lastName: 'Smith',
      username: 'jsmith',
      email:'jsmith@yopmail.com',
      password:'123456',
      gender:'Male',
      dob:'1997.01.01'
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10, marginLeft: 350, width:400 }}>
            <h3 align="center">Create Account</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>First Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.firstName}
                      onChange={this.onChangefirstName}
                      />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.onChangelastName}
                      />
                </div>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.username}
                      onChange={this.onChangeuserName}
                      />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" 
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <label>Gender: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.gender}
                      onChange={this.onChangeGender}
                      />
                </div>
                <div className="form-group">
                    <label>Date of Birth: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.dob}
                      onChange={this.onChangedob}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Register User" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}