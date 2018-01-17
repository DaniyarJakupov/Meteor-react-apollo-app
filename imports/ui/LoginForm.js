import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await Meteor.loginWithPassword(email, password);
    } catch (error) {
      throw error;
    }
    // to check, logout first: Meteor.logout()
    // then enter in console: Meteor.userId()
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default LoginForm;
