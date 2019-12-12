import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import * as action from "../../../redux/action/index";

class list_card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: "unregistered"
    };
  }
  componentDidMount() {
    AOS.init({
      duration: 1000
    });

    if (this.props.cart) {
      let index = this.props.cart.findIndex(
        item => item.maKhoaHoc === this.props.course.maKhoaHoc
      );
      console.log(index);

      if (index !== -1) {
        this.setState({ add: "register" });
      }
    }

    if (this.props.historyListCourse) {
      let indexNew = this.props.historyListCourse.findIndex(
        item => item.maKhoaHoc === this.props.course.maKhoaHoc
      );

      console.log(indexNew);

      if (indexNew !== -1) {
        this.setState({ add: "registered" });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cart !== this.props.cart) {
      let index = nextProps.cart.findIndex(
        item => item.maKhoaHoc === this.props.course.maKhoaHoc
      );

      if (index !== -1) {
        this.setState({ add: "register" });
      }
    }
  }

  chiTietKhoaHoc = () => {
    localStorage.setItem("course", JSON.stringify(this.props.course));
    this.props.history.push(
      `/chi-tiet-khoa-hoc/${this.props.course.maKhoaHoc}`
    );
  };

  render() {
    return (
      <div
        data-aos={this.props.stt % 2 === 0 ? "fade-up-right" : "fade-up-left"}
      >
        <div className="Card_list">
          <div className="row Item">
            <div className="col-4 Item1">
              <img
                src={this.props.course.hinhAnh}
                onClick={() => {
                  this.chiTietKhoaHoc();
                }}
              />
              <div className="Item-img-icon">
                <i class="fa fa-heart" aria-hidden="true"></i>
                <i class="fa fa-check-square-o" aria-hidden="true"></i>
              </div>
            </div>
            <div className="col-8 detail_Card">
              <div className="Card_head">
                <div className="title">
                  <h1>{this.props.course.tenKhoaHoc} </h1>
                  <p> &lt; {this.props.course.moTa}&gt;</p>
                </div>
                <div className="date">
                  <p>Last up date: {this.props.course.ngayTao}</p>
                  <p>view: {this.props.course.luotXem}</p>
                </div>
              </div>
              <div className="Card_body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus pulvinar faucibus neque, nec rhoncus nuncne ultrices
                  sit amet. Curabitur ac sagittis neque, vel egestas est. Aenean
                  Phasellus pulvinar faucibus neque, nec Phasellus pulvinar
                  faucibus neque, nec rhoncus .......
                </p>
              </div>
              <div className="Card_footer">
                {this.state.add === "registered" ? (
                  <Button
                    className="cart-btn -disabled"
                    variant="outlined"
                    disabled
                  >
                    This course has been registered
                  </Button>
                ) : this.state.add === "register" ? (
                  <Button
                    className="cart-btn -go"
                    onClick={() => this.props.history.push("/gio-hang")}
                  >
                    Go to cart
                  </Button>
                ) : (
                  <Button
                    className="cart-btn -add"
                    onClick={() => {
                      this.props.addToCart(this.props.course);
                    }}
                  >
                    Add to cart
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.khoaHocReducer.cart,
    historyListCourse: state.formReducer.historyListCourse
  };
};

const mapDispatchToprops = dispatch => {
  return {
    addToCart: khoaHoc => {
      dispatch(action.actAddToCart(khoaHoc));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(withRouter(list_card));
