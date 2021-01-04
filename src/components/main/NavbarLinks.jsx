import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../store/auth/actions";

const NavbarLinks = ({ logOut }) => {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link to="/create">
          <span className="nav-link">Create Product</span>
        </Link>
      </li>
      <li className="nav-item" onClick={logOut}>
        <Link to="/login">
          <span className="nav-link bg-primary text-white rounded">
            Log Out
          </span>
        </Link>
      </li>
    </ul>
  );
};
const mapDispatchToProps = {
  logOut: logOut,
};

const enhance = connect(null, mapDispatchToProps);

export default enhance(NavbarLinks);
