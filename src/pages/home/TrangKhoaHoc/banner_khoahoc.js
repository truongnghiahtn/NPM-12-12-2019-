/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { connect } from "react-redux";

class banner_khoahoc extends Component {
  render() {
    return (
      <div>
        <div
          className="Banner row "
          style={{ backgroundColor: this.props.tab.background }}
        >
          <div className="col-6 left">
            {this.props.status === true ? (
              <h1 className="animated bounce">{this.props.tab.title}</h1>
            ) : (
              <h1 className="animated bounce">{this.props.tab.title}</h1>
            )}
            <p>
              this course you will learn how make your website anad quick
              advanced syste for your suseradsf asfjsdla
            </p>
            <div className=" img ">
              <div>
                <img src="./img/Video.png"></img> <span>17 Course</span>
              </div>
              <div>
                <img src="./img/students.png"></img> <span>12+ Students</span>
              </div>
              <div>
                <img src="./img/Discussion.png"></img>{" "}
                <span>17 Discussion</span>{" "}
              </div>
            </div>
          </div>
          <div className="col-6 right">
            <img src="./img/course-catagory-hero-1.jpg"></img>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tab: state.khoaHocReducer.tab
  };
};
export default connect(mapStateToProps, null)(banner_khoahoc);
