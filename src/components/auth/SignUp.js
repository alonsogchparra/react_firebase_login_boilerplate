import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../../store/actions';

class SignUp extends Component {

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.onSignUp(this.state);
  }

  render () {

    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />

    return (
      <div className="container">
        <form onSubmit={this.submitHandler} className="grey darken-4">
          <h5 className="white-text text-darken-1">Sign Up</h5>
          <div className="input-field">
            <label className="white-text" htmlFor="email">Email</label>
            <input className="white-text" type="email" name="email" id="email" onChange={this.changeHandler} />
          </div>
          <div className="input-field">
            <label className="white-text" htmlFor="password">Password</label>
            <input className="white-text" type="password" name="password" id="password" onChange={this.changeHandler} />
          </div>
          <div className="input-field">
            <label className="white-text" htmlFor="firstname">First Name</label>
            <input className="white-text" type="text" name="firstName" id="firstName" onChange={this.changeHandler} />
          </div>
          <div className="input-field">
            <label className="white-text" htmlFor="lastname">Last Name</label>
            <input className="white-text" type="text" name="lastName" id="lastName" onChange={this.changeHandler} />
          </div>
          <div className="input-field">
            <button className="btn blue z-depth-0">Sign Up</button>
          </div>
          <div className="red-text center">
            { authError ? <p><strong>{ authError }</strong></p> : null }
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({

  auth: state.firebase.auth,
  authError: state.auth.authError

});

const mapDispatchToProps = dispatch => ({
  onSignUp: (newUser) => dispatch(actions.signUp(newUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)