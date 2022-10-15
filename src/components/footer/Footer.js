import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="container">
        <div className="subcontainer">
          <div className="listcontainer">
            <div className="row">
              <div className="footer-links">
                <h4 className="about">About</h4>
                <ul className="removestyle">
                  <NavLink to="/aboutus" style={{ textDecoration: "none" }}>
                    <li className="space">About us</li>
                  </NavLink>
                  <NavLink to="aboutus" style={{ textDecoration: "none" }}>
                    <li className="space">Contact us</li>
                  </NavLink>
                  <NavLink to="aboutus" style={{ textDecoration: "none" }}>
                    <li className="space">For suppliers</li>
                  </NavLink>
                  <NavLink
                    to="workinprogress" style={{ textDecoration: "none"}}>
                    <li className="space">Privacy Policy</li>
                  </NavLink>
                </ul>
              </div>

              <div className="footer-links">
                <h4 className="Help">Help</h4>
                <ul className="removestyle">
                  <NavLink
                    to="/workinprogress"
                    style={{ textDecoration: "none" }}
                  >
                    <li className="space">Contact</li>
                  </NavLink>
                  <NavLink
                    to="/workinprogress"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <li className="space">Online Help</li>
                  </NavLink>
                  <NavLink
                    to="/workinprogress"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <li className="space">Our Commitment</li>
                  </NavLink>
                  <NavLink
                    to="/workinprogress"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <li className="space">Give feedback</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
          <div className="munni">
            <h3>Follow Us</h3>
            <div className="spacebetween">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./footerimages1/facebook.png")}
                  alt="loading"
                ></img>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./footerimages1/instagram.png")}
                  alt="loading"
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./footerimages1/Vector.png")}
                  alt="loading"
                ></img>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./footerimages1/youtube.png")}
                  alt="loading"
                ></img>
              </a>
            </div>
          </div>
        </div>

        <hr></hr>
        <div>
          <div className="menu">
            <div>
              <p className="center">&copy; 2022 Brand Name</p>
            </div>
            <div className="spacebetween">
              <a
                href="https://www.americanexpress.com/en-in/services/pay-your-bill/billdesk/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./Footerbottomimg/Amex.png")}
                  alt="loading"
                ></img>
              </a>
              <a
                href="https://www.apple.com/apple-pay/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./Footerbottomimg/ApplePay.png")}
                  alt="loading"
                ></img>
              </a>
              <a
                href="https://www.mastercard.us/en-us/personal/ways-to-pay/click-to-pay.html"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./Footerbottomimg/Mastercard.png")}
                  alt="loading"
                ></img>
              </a>
              <a
                href="https://www.paypal.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./Footerbottomimg/PayPal.png")}
                  alt="loading"
                ></img>
              </a>
              <a
                href="https://www.visa.co.in/pay-with-visa"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./Footerbottomimg/Visa.png")}
                  alt="loading"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
