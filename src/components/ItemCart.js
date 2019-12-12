import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../redux/action/index";
import { withRouter } from "react-router-dom";

class ItemCart extends Component {
  chiTietKhoaHoc = () => {
    localStorage.setItem("course", JSON.stringify(this.props.khoaHoc));
    this.props.history.push(
      `/chi-tiet-khoa-hoc/${this.props.khoaHoc.maKhoaHoc}`
    );
  };
  render() {
    let { khoaHoc } = this.props;
    return (
      <div
        className="item my-1"
        onClick={() => {
          this.chiTietKhoaHoc();
        }}
      >
        <div className="media">
          <img className="img" src={khoaHoc.hinhAnh} alt="" />
          <div className="media-body">
            <span className="name-course">{khoaHoc.tenKhoaHoc}</span>
            <br />
            <span className="text-success">${khoaHoc.fee}.00</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCourse: khoaHoc => {
      dispatch(action.actDeleteCourse(khoaHoc));
    }
  };
};

export default connect(null, mapDispatchToProps)(withRouter(ItemCart));
