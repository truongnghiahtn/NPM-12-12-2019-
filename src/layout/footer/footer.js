/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row mb-3">
              <div className="col-3">
                <ul>
                  <p>COMPANY</p>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">LP Profile</a>
                  </li>
                  <li>
                    <a href="#">Become a Teacher</a>
                  </li>
                  <li>
                    <a href="#">All Instructor</a>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <ul>
                  <p>LINK</p>
                  <li>
                    <a href="#">Courses</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">Galerry</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <ul>
                  <p>SUPPORT</p>

                  <li>
                    <a href="#">LP Cart</a>
                  </li>
                  <li>
                    <a href="#">LP Checkout</a>
                  </li>
                  <li>
                    <a href="#">Activity</a>
                  </li>
                  <li>
                    <a href="#">Members</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <ul>
                  <p>INFOMATION</p>
                  <li>
                    <span></span>
                    <span>npm@gmail.com</span>
                  </li>
                  <li>
                    <span></span>
                    <span>0868 702 223</span>
                  </li>
                  <li>
                    <span></span>
                    <span>0868 702 223</span>
                  </li>
                  <li>
                    <span></span>
                    <span>200 Joseob, Canada</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-6">
                <p>ELearning LMS React 2019. Powered By NPM </p>
              </div>
              <div className="col-6">
                <ul className="d-flex power">
                  <li>
                    <a href="">Privacy</a>
                  </li>
                  <li>
                    <a href="">Terms</a>
                  </li>
                  <li>
                    <a href="">Sitemap</a>
                  </li>
                  <li>
                    <a href="">Purchase</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="newsletter">
          <div className="content">
            <h3>Subscribe To Our Newsletter</h3>
            <p className="my-3">
              Phasellus nec dolor.Sed ornare semper ipsum. Sed pede orci
              volutpat sed congue vels gravida non lacus.
            </p>
            <div className="subscribe">
              <div className="submit">
                <input placeholder="Enter Email Address" />
                <button className="btn btn-info">Sign Up</button>
              </div>
              <div className="icons">
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="">
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
