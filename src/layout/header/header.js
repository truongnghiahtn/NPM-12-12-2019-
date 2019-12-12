/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import ItemCart from "./../../components/ItemCart";
import { withRouter, NavLink } from "react-router-dom";
import * as action from "../../redux/action/index";
import $ from "jquery";
import swal from "sweetalert";
import Button from "../../components/Button/Button";

class Header extends Component {
  countCart = () => {
    return this.props.cart.length;
  };
  handleSignUp = () => {
    setTimeout(() => {
      this.props.onsignup(true);
    }, 100);
  };
  handleLogIn = () => {
    setTimeout(() => {
      this.props.onlogin(true);
    }, 100);
  };
  renderCart = () => {
    if (this.props.cart && this.props.cart.length > 0) {
      return this.props.cart.map((item, index) => {
        return <ItemCart khoaHoc={item} key={index} />;
      });
    }
  };
  sumFee = () => {
    return this.props.cart.reduce((tong, item) => {
      return (tong += item.fee);
    }, 0);
  };
  onScroll = () => {
    let height = 300;
    $(window).scroll(() => {
      let scroll = window.pageYOffset || document.documentElement.scrollTop;
      if (scroll >= height) {
        $(".header").addClass("animate");
      } else {
        $(".header").removeClass("animate");
      }
    });
  };
  renderUser = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return user;
    }
    return "";
  };
  onLogOut = () => {
    this.props.onLogOut({});
    this.props.resetCart([]);
    localStorage.removeItem("user");
    this.props.history.push("/");
    setTimeout(() => {
      swal({
        title: "You already log out",
        text: "See you again!",
        icon: "success",
        buttons: false,
        timer: 1500
      });
    }, 150);
  };
  componentDidMount() {
    this.onScroll();
    $(function() {
      $(".btn-6")
        .on("mouseenter", function(e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this)
            .find("span")
            .css({ top: relY, left: relX });
        })
        .on("mouseout", function(e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this)
            .find("span")
            .css({ top: relY, left: relX });
        });
      // $("[href=#]").click(function() {
      //   return false;
      // });
    });
  }

  render() {
    return (
      <div className="header">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light p-0">
            <NavLink className="navbar-brand" to="/">
              <img
                src="../img/elearninglolo.png"
                className="img-fluid logo "
                alt=""
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link link" activeClassName="selectedLink" to="/" exact>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link link" activeClassName="selectedLink" to="/khoa-hoc">
                    Courses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link link" activeClassName="selectedLink" to="/blog">
                    Blogs
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link link" activeClassName="selectedLink" to="/events">
                    Events
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link link" activeClassName="selectedLink" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item cart">
                  <span className="nav-link icon">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </span>
                  <span className="count">{this.countCart()}</span>
                  <div className="giohang p-2">
                    <div className="items">{this.renderCart()}</div>
                    <p className="sum">
                      Subtotal :
                      <span className="text-success">${this.sumFee()}.00</span>
                    </p>
                    <div className="buttons">
                      <NavLink
                        to="/gio-hang"
                        className="btn-view-cart"
                      >
                        <Button>View Cart</Button>
                      </NavLink>
                      <NavLink
                        to="/thanh-toan"
                        className="btn-checkout"
                      >
                        <Button>Checkout</Button>
                      </NavLink>
                    </div>
                  </div>
                </li>
                
                  {this.renderUser() === "" && !this.props.user.hoTen ? (
                  <li
                  className="nav-item sign_in "
                  onClick={this.handleSignUp}
                >
                  <Button> Sign in</Button>
                  </li>
                  ) : null}
                
                {this.renderUser() === "" && !this.props.user.hoTen ? (
                  <li
                    className="nav-item sign_up "
                    onClick={this.handleLogIn}
                  >
                    <Button>Sign up</Button>
                  </li>
                ) : null}

                <li className="nav-item login">
                  {this.renderUser() !== "" ? (
                    <div className="user">
                      <span className="user-icon">
                        {this.props.user.hoTen
                          ? this.props.user.hoTen.slice(0, 1).toUpperCase()
                          : this.renderUser()
                              .hoTen.slice(0, 1)
                              .toUpperCase()}
                      </span>
                    </div>
                  ) : null}
                  <div className="user-info">
                    {this.renderUser() !== "" ? (
                      <div className="user-email">
                        <div className="user mr-3">
                          <span className="user-icon">
                            {this.props.user.hoTen
                              ? this.props.user.hoTen.slice(0, 1).toUpperCase()
                              : this.renderUser()
                                  .hoTen.slice(0, 1)
                                  .toUpperCase()}
                          </span>
                        </div>
                        <div className="text">
                          <span style={{ cursor: "pointer" }}>
                            {this.props.user.hoTen
                              ? this.props.user.hoTen
                              : this.renderUser().hoTen}
                          </span>
                          <br />
                          <span className="text-muted">
                            {this.props.user.hoTen
                              ? this.props.user.email
                              : this.renderUser().email}
                          </span>
                        </div>
                      </div>
                    ) : null}
                    <div className="item">
                      <i className="fa fa-bell-o icon" aria-hidden="true"></i>
                      <span>Notifications</span>
                    </div>
                    <div className="item">
                      <i
                        className="fa fa-comment-o icon"
                        aria-hidden="true"
                      ></i>
                      <span>Messages</span>
                    </div>
                    <NavLink className="item  profile" to="/profile">
                      <i className="fa fa-user-o icon" aria-hidden="true"></i>
                      <span>Profile</span>
                    </NavLink>
                    <NavLink className="item his" to="/history">
                      <i className="fa fa-history icon" aria-hidden="true"></i>
                      <span>Purchare history</span>
                    </NavLink>
                    <div className="item">
                      <i
                        className="fa fa-credit-card icon"
                        aria-hidden="true"
                      ></i>
                      <span>Payment methods</span>
                    </div>
                    <div
                      className="item"
                      onClick={() => {
                        this.onLogOut();
                      }}
                    >
                      <i
                        className="fa fa-power-off icon"
                        aria-hidden="true"
                      ></i>
                      <span>Log out</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.khoaHocReducer.cart,
    user: state.formReducer.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onlogin: login => {
      dispatch(action.onlogin(login));
    },
    onsignup: signup => {
      dispatch(action.onsignup(signup));
    },
    onLogOut: user => {
      dispatch(action.actOnLogOut(user));
    },
    resetCart: cart => {
      dispatch(action.actResetCart(cart));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
