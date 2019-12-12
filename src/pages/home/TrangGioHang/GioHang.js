import React, { Component } from "react";
import { connect } from "react-redux";
import ItemCartPage from "../../../components/ItemCartPage";
import * as action from "../../../redux/action/index";
import { NavLink } from "react-router-dom";
import SearchDefault from "../TrangChu/SearchDefault/SearchDefault";

class GioHang extends Component {
  componentDidMount(){
    this.props.getListCourse();
  }
  renderCart = () => {
    if (this.props.cart && this.props.cart.length > 0) {
      console.log(this.props.cart)
      return this.props.cart.map((item, index) => {
        return <ItemCartPage khoaHoc={item} key={index} />;
      });
    }
  };
  sumFee = () => {
    return this.props.cart.reduce((tong, item) => {
      return (tong += item.fee);
    }, 0);
  };
  render() {
    return (
      <div className="cart-page">
        <div className="container ">
          <div className="row justify-content-around">
            <div className="col-7 p-3 bg-white rounded shadow-sm">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 bg-light">
                        <div className="p-2 pr-3 text-uppercase product">
                          Product
                        </div>
                      </th>
                      <th scope="col" className="border-0 bg-light price">
                        <div className="py-2 text-uppercase">Price</div>
                      </th>
                      <th scope="col" className="border-0 bg-light remove">
                        <div className="py-2 text-uppercase">Remove</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCart()}</tbody>
                </table>
              </div>
            </div>
            <div className="col-4 p-3 bg-white rounded shadow-sm">
              <div className="bg-light px-4 py-3 text-uppercase font-weight-bold">
                Order summary
              </div>
              <div className="p-4">
                <ul className="list-unstyled mb-4">
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Order Subtotal </strong>
                    <strong>${this.sumFee()}.00</strong>
                  </li>

                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Tax</strong>
                    <strong>$0.00</strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Total</strong>
                    <h5 className="font-weight-bold">${this.sumFee()}.00</h5>
                  </li>
                </ul>
                <NavLink
                  to="/"
                  className="btn btn-dark rounded-pill py-2 btn-block"
                >
                  Continue shopping
                </NavLink>
                <NavLink
                  to="/thanh-toan"
                  className="btn btn-dark rounded-pill py-2 btn-block"
                >
                  Procceed to checkout
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {this.props.listCourse.length > 0 ? <SearchDefault /> : ""}
        <div style={{height: "50px"}}></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.khoaHocReducer.cart,
    listCourse: state.khoaHocReducer.listCourse
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getListCourse: () => {
      dispatch(action.actGetListCourseAPI());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHang);
