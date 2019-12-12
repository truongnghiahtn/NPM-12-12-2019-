import React, { Component } from "react";

export default class UseCourse extends Component {
  render() {
    return (
      <div className="use-course fix_Use-Course">
        {/* <div className="container"> */}
          <h1 className="font-weight-bold">WHY USE YOUR COURSES?</h1>
          <p className="my-3">
            We have collected all of the necessary tools for effective study.
            Here you can find high quality free and paid programs. Every student
            has the opportunity to become a teacher.
          </p>

          <div className="row">
            <div className="col-4">
              <div
                className="item"
                style={{ backgroundImage: "url('../img/banner1.png')" }}
              >
                <div className="content text-right">
                  <h3>CERTTIFICAE LEAD</h3>
                  <h5>TO GET JOB</h5>
                  <button className="btn btn-info get-job">GET JOB</button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div
                className="item item1"
                style={{ backgroundImage: "url('../img/banner2.png')" }}
              >
                <div className="content text-right">
                  <h3>SAVE MONEY BY</h3>
                  <h5>SIGNING UP</h5>
                  <button className="btn btn-info sign-up">SIGN UP</button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div
                className="item item2"
                style={{ backgroundImage: "url('../img/banner3.png')" }}
              >
                <div className="content text-right">
                  <h3>TRAINING FOR</h3>
                  <h5>SCHOOLS, GOVEMENT...</h5>
                  <button className="btn btn-info view-all">VIEW ALL</button>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    );
  }
}
