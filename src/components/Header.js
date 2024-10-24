import React from "react";
import PropTypes from "prop-types";

import "../styles/Header.css";

const Header = ({ isAdmin, toggleRole }) => {
  return (
    <header className="app-header">
      <h1>Inventory Stats</h1>
      <div className="role-switch">
        <span>admin</span>
        <label className="switch">
          <input type="checkbox" checked={isAdmin} onChange={toggleRole} />
          <span className="slider round"></span>
        </label>
        <span>user</span>
      </div>
    </header>
  );
}

Header.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  toggleRole: PropTypes.func.isRequired,
};

export default Header;
