/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class TrangBlog extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  render() {
    return (
      <div className="Page_Blog">
        <div className="banner">
          <h1>BLOG</h1>
          <ul>
            <li>HOME</li>
            <li>BLOG</li>
          </ul>
        </div>
        <div className="contentBlog row ">
          <div className="col-8 content-left">
            <div className="item">
              <h4>Learn the language of love, morbi venenatis lacinia</h4>
              <img className="img-fluid" src="./img/10.jpg"></img>
              <div className="detail">
                <p>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                  <span>17 Nov.2017 </span> <i className="fa fa-user"></i> Posted by{" "}
                  <span>aislin </span> <i className="fa fa-flag"></i>{" "}
                  <span>Event</span>
                </p>
                <p>
                  Education is the process of facilitating learning. Knowledge,
                  skills, values, beliefs, and habits of a group of people are
                  transferred to other people, through storytelling, discussion,
                  teaching, training, or research. …
                </p>
                <button className="btn btn-success "> READ MORE</button>
              </div>
            </div>
            <div className="item">
              <h4>First Ankara Big Data Meetup</h4>
              <img className="img-fluid" src="./img/104 .jpg"></img>
              <div className="detail">
                <p>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                  <span>17 Nov.2017 </span> <i className="fa fa-user"></i> Posted by{" "}
                  <span>aislin </span> <i className="fa fa-flag"></i>{" "}
                  <span>Event</span>
                </p>
                <p>
                  Education is the process of facilitating learning. Knowledge,
                  skills, values, beliefs, and habits of a group of people are
                  transferred to other people, through storytelling, discussion,
                  teaching, training, or research. …
                </p>
                <button className="btn btn-success "> READ MORE</button>
              </div>
            </div>
            <div className="item">
              <h4>Where do you want to be?</h4>
              <img className="img-fluid" src="./img/blog03 .jpg"></img>
              <div className="detail">
                <p>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                  <span>17 Nov.2017 </span> <i className="fa fa-user"></i> Posted by{" "}
                  <span>aislin </span> <i className="fa fa-flag"></i>{" "}
                  <span>Event</span>
                </p>
                <p>
                  Education is the process of facilitating learning. Knowledge,
                  skills, values, beliefs, and habits of a group of people are
                  transferred to other people, through storytelling, discussion,
                  teaching, training, or research. …
                </p>
                <button className="btn btn-success "> READ MORE</button>
              </div>
            </div>
            <div className="item">
              <h4>Trip to Knaresborough, Speaking club, Going to the pub</h4>
              <img className="img-fluid" src="./img/11.jpg"></img>
              <div className="detail">
                <p>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                  <span>17 Nov.2017 </span> <i className="fa fa-user"></i> Posted by{" "}
                  <span>aislin </span> <i className="fa fa-flag"></i>{" "}
                  <span>Event</span>
                </p>
                <p>
                  Education is the process of facilitating learning. Knowledge,
                  skills, values, beliefs, and habits of a group of people are
                  transferred to other people, through storytelling, discussion,
                  teaching, training, or research. …
                </p>
                <button className="btn btn-success "> READ MORE</button>
              </div>
            </div>
            <div className="item">
              <h4>What course will your life take? Morbi venenatis lacinia</h4>
              <img className="img-fluid" src="./img/09.jpg"></img>
              <div className="detail">
                <p>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                  <span>17 Nov.2017 </span> <i className="fa fa-user"></i> Posted by{" "}
                  <span>aislin </span> <i className="fa fa-flag"></i>{" "}
                  <span>Event</span>
                </p>
                <p>
                  Education is the process of facilitating learning. Knowledge,
                  skills, values, beliefs, and habits of a group of people are
                  transferred to other people, through storytelling, discussion,
                  teaching, training, or research. …
                </p>
                <button className="btn btn-success "> READ MORE</button>
              </div>
            </div>
            <div className="item">
              <h4>The gig economy is real if you know where to look</h4>
              <img className="img-fluid" src="./img/05.jpg"></img>
              <div className="detail">
                <p>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                  <span>17 Nov.2017 </span> <i className="fa fa-user"></i> Posted by{" "}
                  <span>aislin </span> <i className="fa fa-flag"></i>{" "}
                  <span>Event</span>
                </p>
                <p>
                  Education is the process of facilitating learning. Knowledge,
                  skills, values, beliefs, and habits of a group of people are
                  transferred to other people, through storytelling, discussion,
                  teaching, training, or research. …
                </p>
                <button className="btn btn-success "> READ MORE</button>
              </div>
            </div>
          </div>
          <div className="col-3 content-right">
            <h2>Working Hours</h2>
            <ul className="List-work">
              <li>
                <span>Monday</span> <span>9am-6pm</span>
              </li>
              <li>
                <span>Tuesday</span> <span>9am-6pm</span>
              </li>
              <li>
                <span>Wednesday</span> <span>9am-6pm</span>
              </li>
              <li>
                <span>Thursday</span> <span>9am-6pm</span>
              </li>
              <li>
                <span>Friday</span> <span>9am-6pm</span>
              </li>
              <li>
                <span>Saturday</span>{" "}
                <button className="btn btn-info">Closed</button>
              </li>
              <li>
                <span>Sunday</span>{" "}
                <button className="btn btn-info">Closed</button>
              </li>
            </ul>
            <div className="Latest_Posts">
              <h2>Latest Posts</h2>
              <div className="item_latest">
                <img
                  src="./img/10-150x150.jpg"
                ></img>
                <div className="Detail">
                  <p>Learn the language of love, morbi venenatis lacinia</p>
                  <p>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>21 Nov.2017{" "}
                    <i className="fa fa-comment"></i> 4
                  </p>
                </div>
              </div>
              <div className="item_latest">
                <img
                  src="./img/03-150x150.jpg"
                ></img>
                <div className="Detail">
                  <p>Learn English connect with the world</p>
                  <p>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>17 Nov.2017{" "}
                    <i className="fa fa-comment"></i> 14
                  </p>
                </div>
              </div>
            </div>
            <div className="Teachers">
              <h2>Teachers</h2>
              <div className="item-teacher">
                <img src="./img/02-1.png"></img>
                <h3>Charlie Brown</h3>
                <span>Web Designer</span>
                <p>My name is Ruth. I grew up and studied in…</p>
              </div>
              <div className="item-teacher">
                <img src="./img/05.png"></img>
                <h3>Jackson James</h3>
                <span>Web Designer</span>
                <p>
                  Praesent varius orci at erat lobortis lacinia. Morbi lectus
                  metus,…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
