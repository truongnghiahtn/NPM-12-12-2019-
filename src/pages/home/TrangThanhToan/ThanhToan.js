/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { connect } from "react-redux";
import ItemCart from "./../../../components/ItemCart";
import * as action from "./../../../redux/action/index";
import swal from "sweetalert";
import StudentsView from "../TrangChu/StudentsView/StudentsView";

class ThanhToan extends Component {
  componentDidMount(){
    this.props.getListCourse();
  }
  renderListCourse = () => {
    if (this.props.cart && this.props.cart.length > 0) {
      return this.props.cart.map((item, index) => {
        return <ItemCart khoaHoc={item} key={index} />;
      });
    }
  };
  payment = event => {
    event.preventDefault();
    this.props.onPayCart(this.props.cart);
  };
  sumFee = () => {
    return this.props.cart.reduce((tong, item) => {
      return (tong += item.fee);
    }, 0);
  };
  render() {
    return (
      <div className="checkout-page">
        <div className="checkout-content">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="your-items">
                  <h3>Your Items ({this.props.cart.length})</h3>
                  <div className="list-course">{this.renderListCourse()}</div>
                </div>
              </div>
              <div className="col-8">
                <div className="total-pay">
                  <h3>Total : ${this.sumFee()}.00</h3>
                  <div className="total">
                    <div className="payment">
                      <div className="pay-methods">
                        <span className="title">Payment Methods: </span>
                        <span className="pay-cart">
                          <img src="../img/mastercard.png" />
                        </span>
                        <span className="pay-cart">
                          <img src="../img/visa.png" />
                        </span>
                        <span className="pay-cart">
                          <img src="../img/paypal.png" />
                        </span>
                        <span className="pay-cart">
                          <img src="../img/bitcoin.png" />
                        </span>
                      </div>

                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name on Card"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Card Number"
                          />
                        </div>
                        <div className="row">
                          <div className="col">
                            <select>
                              <option defaultValue>MM </option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <div className="col">
                            <select>
                              <option defaultValue>YY </option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Security Code"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <select>
                              <option defaultValue>Viet Nam</option>
                              <option>Trung Quoc</option>
                              <option>Thai Lan</option>
                              <option>English</option>
                              <option>Ameria</option>
                              <option>India</option>
                            </select>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Zip/Postal Code"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <button
                                onClick={event => {
                                  this.payment(event);
                                }}
                                className="btn btn-danger"
                              >
                                Complete Payment
                              </button>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <i className="fa fa-lock" aria-hidden="true" />
                              <span>Security Payment</span>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.props.listCourse.length > 0 ? <StudentsView /> : ""}
        <div style={{ height: "50px" }}></div>
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
    onPayCart: cart => {
      dispatch(action.actOnPayCart(cart));
    },
    getListCourse: () => {
      dispatch(action.actGetListCourseAPI());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThanhToan);
