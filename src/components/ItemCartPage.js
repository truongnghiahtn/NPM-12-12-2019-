/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/scope */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from "react";
import * as action from "./../redux/action/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class ItemCartPage extends Component {
  chiTietKhoaHoc = () => {
    localStorage.setItem("course", JSON.stringify(this.props.khoaHoc));
    this.props.history.push(
      `/chi-tiet-khoa-hoc/${this.props.khoaHoc.maKhoaHoc}`
    );
  };
  render() {
    let { khoaHoc, deleteCourse } = this.props;
    return (
      <Fragment>
        <tr>
          <td scope="row" className="border-0">
            <div className="p-2 d-flex">
              <img
                src={khoaHoc.hinhAnh}
                alt
                width={70}
                className="img-fluid rounded shadow-sm"
                onClick={() => {
                  this.chiTietKhoaHoc();
                }}
                alt=""
              />
              <div className="ml-3 d-inline-block align-middle info">
                <h5 className="mb-0">
                  <div
                    className="text-dark d-inline-block align-middle"
                    onClick={() => this.chiTietKhoaHoc()}
                  >
                    {khoaHoc.tenKhoaHoc}
                  </div>
                </h5>
                <span className="text-muted font-weight-normal d-block">
                  Category: {khoaHoc.moTa}
                </span>
              </div>
            </div>
          </td>
          <td className="border-0 align-middle">
            <strong>${khoaHoc.fee}.00</strong>
          </td>
          <td className="border-0 align-middle">
            <a className="text-dark">
              <i
                className="fa fa-trash"
                onClick={() => {
                  deleteCourse(khoaHoc);
                }}
              />
            </a>
          </td>
        </tr>
      </Fragment>
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
export default connect(null, mapDispatchToProps)(withRouter(ItemCartPage));
