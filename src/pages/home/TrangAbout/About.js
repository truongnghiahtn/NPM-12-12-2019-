import React, { Component } from "react";
import AboutUS from "./../TrangChu/aboutUs/aBoutUs";

export default class About extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  render() {
    return (
      <div className="about">
        <div
          className="get-knowledge"
          style={{ backgroundImage: "url('../img/aboutbg.jpg')" }}
        >
          <div className="content">
            <h1>GET KNOWLEDGE</h1>
            <p className="mb-4">
              Here you can review some statistics about our Education Center
            </p>
            <div className="can-learn">
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <div className="item item1">
                      <img src="../img/guitar.png" />
                      <p>Social Media Management</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="item item2">
                      <i className="fa fa-laptop"></i>
                      <p>Progamming Course</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="item item3">
                      <i className="fa fa-camera"></i>
                      <p>Filmmaking</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="item item4">
                      <i className="fa fa-bullhorn"></i>
                      <p>Cinema Production</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="who-are-we">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-5">
                <h4>WHO ARE WE?</h4>
                <p className="my-3">
                  "Here's one brand that didn't need much time before realizing
                  its core value proposition. At the end of the day, chocolate
                  is chocolate. How can one piece of chocolate truly stand out
                  from another? By bringing in the convenience factor, of
                  course."
                </p>
                <button className="btn btn-info contact">CONTACT US NOW</button>
              </div>
              <div className="col-5">
                <img src="../img/aboutus.jpg" />
              </div>
            </div>
          </div>
        </div>
        <AboutUS />
      </div>
    );
  }
}
