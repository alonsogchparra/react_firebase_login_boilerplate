import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignedInLink from './SignedInLink';
import SignOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'
import { isLoaded } from 'react-redux-firebase';
import * as actions from '../../store/actions';

class Navbar extends Component {
  render () {

    const { auth, profile, onSignOut } = this.props;
    const links = auth.uid && profile ? <SignedInLink profile={profile} /> : <SignOutLinks />;
    const checkIsLoaded = isLoaded(auth) ? links : '';
    const sideNavLinks = auth.uid ? (
      <li className="sidenav-close"><a className="logout" onClick={onSignOut}>Log Out</a></li>
    ) : (
      <div>
        <li className="sidenav-close">
          <NavLink to="/signin">Sign In</NavLink>
        </li>
        <li className="sidenav-close">
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </div>
    );

    const sideNavCheckIsLoaded = isLoaded(auth) ? sideNavLinks : '';

    return (
      <div>
        <nav className="nav-wrapper grey darken-3">
          <div className="container">
            <Link to="/" className="brand-logo">Boilerplate Auth</Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <div className="right hide-on-med-and-down">
              { checkIsLoaded }
            </div>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          { sideNavCheckIsLoaded }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({

  auth: state.firebase.auth,
  profile: state.firebase.profile

});

const mapDispatchToProps = dispatch => ({
  onSignOut: () => dispatch(actions.signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)