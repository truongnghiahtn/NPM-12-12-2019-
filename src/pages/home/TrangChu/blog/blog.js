import React, { Component } from "react";

export default class blog extends Component {
  render() {
    return (
      <div className="Trangchu_Blog">
        <div className="Title"> <h1>Blog</h1></div>
        <div className="content_Blog">
          <div className="row">
            <div className="col-4 item">
              <img className="img-fluid" src="./img/10.jpg"></img>
              <div className="detail_content">
                <h2>Learn the language of love, morbi venenatis lacinia</h2>
                <p>
                  Education is the process of facilitating learning. Knowledge,
                  skills, values, beliefs, and habits of a…
                </p>
              </div>
              <div className="time_content">
                <p>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>21
                  Nov.2017 <i className="fa fa-comment"></i> (4) by{" "}
                  <span>aislin</span>
                </p>
              </div>
            </div>
            <div className="col-4 item">
              <img className="img-fluid" src="./img/104 .jpg"></img>
              <div className="detail_content">
                <h2>First Ankara Big Data Meetup</h2>
                <p>
                  Education is the process of facilitating learning. Knowledge,
                  skills, values, beliefs, and habits of a…
                </p>
              </div>
              <div className="time_content">
                <p>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>21
                  Nov.2017 <i className="fa fa-comment"></i> (0) by{" "}
                  <span>aislin</span>
                </p>
              </div>
            </div>
            <div className="col-4 item item1">
                <div className="event_Blog">
                    <div className="title_Event_Blog"> <p>Nov 10</p> </div>
                    <div className="content_Event_Blog">
                        <h3>The Surprising Reason College Expensive</h3>
                        <p>Cras condimentum a elit eget sagittis. Ut dignissim sapien feugiat…</p>
                    </div>
                </div>
                <div className="event_Blog">
                    <div className="title_Event_Blog"><p>Nov 16</p> </div>
                    <div className="content_Event_Blog">
                        <h3>Those Other College Expenses Thinking About</h3>
                        <p>Cras condimentum a elit eget sagittis. Ut dignissim sapien feugiat…</p>
                    </div>
                </div>
                <div className="event_Blog">
                    <div className="title_Event_Blog"><p>Dec 12</p> </div>
                    <div className="content_Event_Blog">
                        <h3>New Chicago photography school</h3>
                        <p>Quisque tortor nisi, tristique sit amet commodo vel, commodo at…</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
