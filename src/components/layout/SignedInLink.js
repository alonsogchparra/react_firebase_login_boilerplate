import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const signedInLink = ({ profile, onSignOut }) => {
  return (
    <ul className="right">
      <li><a onClick={onSignOut}>Log Out</a></li>
      <li><NavLink to="/" className="btn btn-floating blue lighten-1">{profile.initials}</NavLink></li>
    </ul>
  );
}

const mapDispatchToProps = dispatch => ({
  onSignOut: () => dispatch(actions.signOut())
});

export default connect(null, mapDispatchToProps)(signedInLink);
