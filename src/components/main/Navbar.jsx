import React from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import { connect } from "react-redux";
import NavbarLinks from "./NavbarLinks";

const Navbar = ({ email }) => {
  return (
    <Nav style={{ boxShadow: "0px -10px 20px", marginBottom: "30px" }}>
      <div className="container-fluid">
        <Link to="/">
          <div className="navbar-brand">
            <span className="logo logo-left text-uppercase fw-bold">Cleve</span>
            <span className="logo logo-right text-uppercase fw-bold">road</span>
          </div>
        </Link>
        <span className="navbar-text">{email}</span>
        <NavbarLinks />
      </div>
    </Nav>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.user.currentUser.email,
  };
};

const enhance = connect(mapStateToProps);

export default enhance(Navbar);
