import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="headercontainer">
      <div className="menu">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div className="logodesign1"></div>
          <div className="logodesign2"></div>
          <div className="logodesign3"></div>
          <div className="logo">Brand Name</div>
        </NavLink>
        <div>
          <ul className="list">
            <NavLink to="/ourservices" className="sublist">
              <li>Our Services</li>
            </NavLink>
            <NavLink to="/bridal" className="sublist">
              <li>Bridal</li>
            </NavLink>
            <NavLink to="/aboutus" className="sublist">
              <li>About Us</li>
            </NavLink>
            <NavLink to="/blog" className="sublist">
              <li>Blog</li>
            </NavLink>
            <NavLink to="/Offers" className="sublistoffer">
              <li>
                <span style={{ color: "#892CDC" }}>..</span> Offers!
                <span style={{ color: "#892CDC" }}>..</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
