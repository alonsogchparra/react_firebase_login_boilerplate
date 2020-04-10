import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { isLoaded } from 'react-redux-firebase';
import * as actions from '../../store/actions';

class SignIn extends Component {

  state = {
    email: '',
    password: ''
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.onSignIn(this.state);
  }


  render () {
     const { auth, authError } = this.props;
     if (auth.uid) return <Redirect to="/" />

    return (
      <div className="container">
        { isLoaded(auth) ? (
          <form onSubmit={this.submitHandler} className="grey darken-4">
            <h5 className="white-text">Sign In</h5>
            <div className="input-field">
              <label className="white-text" htmlFor="email">Email</label>
              <input className="white-text" type="email" name="email" id="email" onChange={this.changeHandler} />
            </div>
            <div className="input-field">
              <label className="white-text" htmlFor="password">Password</label>
              <input className="white-text" type="password" name="password" id="password" onChange={this.changeHandler} />
            </div>
            <div className="input-field">
              <button className="btn blue lighten-1 z-depth-0">Login</button>
              <div className="red-text center">
                { authError ? <p><strong>{authError}</strong></p> : null }
              </div>
            </div>
          </form>
        ) : '' }
      </div>
    )
  }
}

const mapStateToProps = state => ({

  auth: state.firebase.auth,
  authError: state.auth.authError

});

const mapDispatchToProps = dispatch => ({
  onSignIn: (credentials) => dispatch(actions.signIn(credentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);