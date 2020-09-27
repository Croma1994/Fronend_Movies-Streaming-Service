import React, { Component } from "react";
import { Link } from "react-router-dom";
import AlertResponseText from "./alert/AlertResponseText";
import { signup } from "../../actions/authAction";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class Signup extends Component {

  state = {
    responseMessage: null,
    redirect: false,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    signup: PropTypes.func.isRequired,
  };

  submit(event) {

    if (event) event.preventDefault();
    
    this.props.signup({
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password1.value,
      confirmedPassword: event.target.password2.value,
    });

  }

  render() {
    return (
      <React.Fragment>
        <AlertResponseText responseMessage={this.state.responseMessage} />

        <form onSubmit={this.submit.bind(this)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoComplete="username"
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password1">Password</label>
            <input
              name="password1"
              autoComplete="new-password"
              type="password"
              className="form-control"
              id="password1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              autoComplete="new-password"
              name="password2"
              className="form-control"
              id="password2"
              placeholder="Rewrite Password"
            />
          </div>
          <button type="submit" className="btn btn-secondary btn-block">
            
            Signup
          </button>
          <Link to="/login" className="btn btn-outline-secondary btn-block">
            Already Have An Account?
          </Link>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { signup })(Signup);
