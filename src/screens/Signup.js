import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../helpers/auth';

import '../public/scss/Login.scss';

import loginbackground from '../public/img/background-image-login.svg';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: '' });
    try {
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <>
        <div
          className='login-content'
          style={{ backgroundImage: 'url(' + loginbackground + ')' }}
        >
          <div className='login-content-container'>
            <div className='container'>
              <form
                className='mt-5 py-3 px-5'
                autoComplete='off'
                onSubmit={this.handleSubmit}
              >
                <h1>
                  Create account
                </h1>
                <p className='lead'>
                  Already have an account? <Link className='title' to='/login'>
                     Login
                  </Link>
                </p>
                <div className='form-group'>
                  <input
                    className='form-control'
                    placeholder='Email'
                    name='email'
                    type='email'
                    onChange={this.handleChange}
                    value={this.state.email}
                  ></input>
                </div>
                <div className='form-group'>
                  <input
                    className='form-control'
                    placeholder='Password'
                    name='password'
                    onChange={this.handleChange}
                    value={this.state.password}
                    type='password'
                  ></input>
                </div>
                <div className='form-group'>
                  {this.state.error ? (
                    <p className='text-danger'>{this.state.error}</p>
                  ) : null}
                  <button className='btn btn-primary px-5'>
                    Sign up
                  </button>
                </div>
                <p>
                <Link to='/login'>Forgot your password?</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
