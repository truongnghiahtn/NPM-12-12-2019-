/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class aBoutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "content1"
    };
  }
  handletab = data => {
    let Data = "";
    switch (data) {
      case "content1":
        Data = "content1";
        break;
      case "content2":
        Data = "content2";
        break;
      case "content3":
        Data = "content3";
        break;
      default:
        break;
    }
    console.log(Data);
    this.setState({
      content: Data
    });
  };
  render() {
    return (
      <div>
        <div className="About_us">
          <h1>ABout Us</h1>
          <div className="About-content row">
            <div className="col-4 content-left">
              <img className="img-fluid" src="./img/09.png" alt=""></img>
              <ul className="list-about">
                <li>
                  <a href="#">Home </a>
                </li>
                <li>
                  <a href="#">About </a>
                </li>
                <li>
                  <a href="#">Video</a>
                </li>
              </ul>
              <p>
                As part of lessons, students enrolled in this course visit a
                number of fascinating locations, from stunning museums and
                businesses and charming all over the city.
              </p>
            </div>
            <div className="col-4 content-mid">
              <div>
                <h3>
                  {" "}
                  <i className="fa fa-check"></i> Education School Technology
                </h3>
                <ul className="list">
                  <li> Watch from your computer</li>
                  <li> Switch back and forth as you choose</li>
                </ul>
              </div>
              <div>
                <h3>
                  {" "}
                  <i className="fa fa-check"></i> Digital Education Market
                  Briefing
                </h3>
                <ul className="list">
                  <li> Watch from your computer</li>
                  <li> Switch back and forth as you choose</li>
                </ul>
              </div>
              <div>
                <h3>
                  {" "}
                  <i className="fa fa-check"></i> Conscious Discipline Institute
                </h3>
                <ul className="list">
                  <li> Watch from your computer</li>
                  <li> Switch back and forth as you choose</li>
                </ul>
              </div>
            </div>
            <div className="col-4 content-right">
              <div className="content">
                <div className="content-1 item ">
                  <h2
                    onClick={() => {
                      this.handletab("content1");
                    }}
                  >
                    Learn AJAX from a pro
                  </h2>
                  {this.state.content === "content1" ? (
                    <span className="animated bounce faster minus">-</span>
                  ) : (
                    <span className="animated bounce faster">+</span>
                  )}
        
                  <p className= {this.state.content==="content1" ?("show content-nomarl"):("hiden content-nomarl")}>
                    From emptying a litter box, to walking and feeding, we’re
                    here to make sure your pet is cared for as well.
                  </p>
                </div>
                <div className="content-2 item">
                  <h2
                    onClick={() => {
                      this.handletab("content2");
                    }}
                  >
                    Learn CSS from a pro
                  </h2>
                  {this.state.content === "content2" ? (
                    <span className="animated bounce faster minus">-</span>
                  ) : (
                    <span className="animated bounce faster">+</span>
                  )}
 
                  <p className= {this.state.content==="content2" ?("show content-nomarl"):("hiden content-nomarl")}>
                    From emptying a litter box, to walking and feeding, we’re
                    here to make sure your pet is cared for as well.
                  </p>
                </div>
                <div className="content-3  item ">
                  <h2
                    onClick={() => {
                      this.handletab("content3");
                    }}
                  >
                    Learn 3D modeling from a pro
                  </h2>
                  {this.state.content === "content3" ? (
                    <span className="animated bounce faster minus">-</span>
                  ) : (
                    <span className="animated bounce faster">+</span>
                  )}
       
                  <p className= {this.state.content==="content3" ?("show content-nomarl"):("hiden content-nomarl")}>
                    From emptying a litter box, to walking and feeding, we’re
                    here to make sure your pet is cared for as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
