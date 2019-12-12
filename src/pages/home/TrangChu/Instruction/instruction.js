import React, { Component } from "react";
import Inscard from "./ins_card";
import instructor from "./../../../../data/insTructors";

export default class instruction extends Component {
  renderhtml = () => {
    return instructor.map((item, index) => {
      return <Inscard key={index} Detail={item} />;
    });
  };
  render() {
    return (
      <div>
        <div className="body">
          <h1>Top Rating Instructors</h1>
          <div className=" instructors ">
            <div className="row parent-card">
              <div className="row test">{this.renderhtml()}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="count_courses">
            <div className="count_icon">
              <div className="icon">
                <i className="fa fa-television" aria-hidden="true" />
                <p>1787</p>
                <p>Online Courses</p>
              </div>
              <div className="icon">
                <i className="fa fa-user-o" aria-hidden="true" />
                <p>690</p>
                <p>Trusted Tutors</p>
              </div>
              <div className="icon">
                <i className="fa fa-graduation-cap" aria-hidden="true" />
                <p>855046</p>
                <p>Online Student</p>
              </div>
              <div className="icon">
                <i className="fa fa-sun-o" aria-hidden="true" />
                <p>5403</p>
                <p>Success Stories</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
