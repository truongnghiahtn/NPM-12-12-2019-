import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../redux/action/index";

class KhoaHoc extends Component {
  render() {
    let { khoaHoc, addToCart } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={khoaHoc.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{khoaHoc.tenKhoaHoc}</h4>
            <p className="card-text">{khoaHoc.moTa}</p>
            <p className="card-text">{khoaHoc.fee}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                addToCart(khoaHoc);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToprops = dispatch => {
  return {
    addToCart: khoaHoc => {
      dispatch(action.actAddToCart(khoaHoc));
    }
  };
};
export default connect(null, mapDispatchToprops)(KhoaHoc);
