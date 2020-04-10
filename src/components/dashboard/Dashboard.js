import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render () {

    const { profile, auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />

    return (
      <div className="container">
        <div className="center-align">
          <h1>Hello {profile.firstName} {profile.lastName} you are Signed In.</h1>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.firebase.profile,
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(Dashboard)