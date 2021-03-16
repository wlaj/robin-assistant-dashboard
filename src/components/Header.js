import React from "react";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { auth } from "../Firebase";

import '../public/scss/Header.scss';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light">
        <Link className="navbar-brand" to="/">
          Robin Dashboard
        </Link>
         <div className="nav-item nav-link">
                Making lives easier
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          {auth().currentUser ? (
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/dashboard">
                Go to dashboard
              </Link>
              <button
                className="btn btn-primary"
                onClick={() => auth().signOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
            <div className="navbar-nav">
               <Link className="nav-item nav-link" to="/login">
                What is Robin
              </Link>
              <Link className="nav-item nav-link" to="/login">
                Benefits
              </Link>
              <Link className="nav-item nav-link" to="/login">
                How does it work?
              </Link>
              <Link className="nav-item nav-link" to="/login">
                FAQ
              </Link>
              <div Style="border-left:1px solid lightgrey;height:2em;margin-top:0.3em"></div>
              <Link className="nav-item nav-link" to="/login">
                Sign In
              </Link>
              <Link className="btn btn-primary" to="/signup">
                Sign Up
              </Link>
            </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
