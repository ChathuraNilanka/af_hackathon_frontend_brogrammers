import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: 'jsmith@yopmail.com',
      password: '123456',
    }
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
    
    };
    axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      email: '',
      password: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10, width:250, marginLeft:450 }}>
            <h3 align="center">Login</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Email:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.email}
                      onChange={this.onChangeEmail}
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
                <div className="form-group" align="center">
                    <input type="submit" 
                      value="register" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}