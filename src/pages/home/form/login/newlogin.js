import React, { Component } from "react";
import * as action from "./../../../../redux/action/index";
import { connect } from "react-redux";
import Axios from "axios";
import swal from "sweetalert";

class newlogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: { taiKhoan: "", matKhau: "" },
      errors: { taiKhoan: "", matKhau: "", taiKhoan_1: "" },
      formValid: false,
      taiKhoanValid: false,
      matKhauValid: false
    };
  }
  ds = [{ taiKhoan: "ok", matKhau: "ok" }];
  handleOnchanle = event => {
    this.setState(
      {
        values: {
          ...this.state.values,
          [event.target.name]: event.target.value
        }
      },
      () => {}
    );
  };
  handleErrors = event => {
    let { name, value } = event.target;

    let message = value === "" ? " Do not be empty" : "";
    let { taiKhoanValid, matKhauValid } = this.state;
    switch (name) {
      case "taiKhoan":
        taiKhoanValid = message !== "" ? false : true;
        break;

      case "matKhau":
        matKhauValid = message !== "" ? false : true;
        break;
      default:
        break;
    }
    this.setState(
      {
        errors: { ...this.state.errors, [name]: message },
        taiKhoanValid,
        matKhauValid
      },
      () => {
        this.FormValidation();
      }
    );
  };
  FormValidation = () => {
    this.setState({
      formValid: this.state.taiKhoanValid && this.state.matKhauValid
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    Axios({
      method: "POST",
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: this.state.values
    })
      .then(result => {
        setTimeout(() => {
          swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            buttons: false,
            timer: 1500
          });
        }, 150);
        localStorage.setItem("user", JSON.stringify(result.data));
        this.props.updateUser(result.data);
        let user = JSON.parse(localStorage.getItem("user"));
        this.props.getHistoryCourse(user);
        this.hidden();
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({
          errors: {
            ...this.state.errors,
            taiKhoan_1: "The account or password is incorrect!"
          }
        });
      });
  };

  hidden = () => {
    setTimeout(() => {
      this.props.onlogin(false);
    }, 150);
    {
      this.reset();
    }
  };
  reset = () => {
    this.setState({
      errors: {
        ...this.state.errors,
        taiKhoan: "",
        matKhau: "",
        taiKhoan_1: ""
      }
    });
  };
  renderlogin = () => {
    let { login } = this.props;
    if (login) {
      return (
        <div className="nghiadzn">
          <div className="Form">
            <div className="Form_Overlay" onClick={this.hidden} />
            <div className="wrapper">
              <div className="container1">
                <h1>Welcome</h1>
                <span className="clone" onClick={this.hidden}>
                  <i class="fa fa-times"></i>
                </span>
                <form
                  className="form"
                  autoComplete="off"
                  onSubmit={this.handleSubmit}
                >
                  <input
                    type="text"
                    name="taiKhoan"
                    onChange={this.handleOnchanle}
                    onBlur={this.handleErrors}
                    onKeyUp={this.handleErrors}
                    placeholder="Username"
                  />
                  {this.state.errors.taiKhoan !== "" &&
                  this.state.errors.taiKhoan_1 === "" ? (
                    <div className="Form_err">
                      (*) {this.state.errors.taiKhoan}
                    </div>
                  ) : (
                    ""
                  )}
                  <input
                    type="password"
                    name="matKhau"
                    onChange={this.handleOnchanle}
                    onBlur={this.handleErrors}
                    onKeyUp={this.handleErrors}
                    placeholder="Password"
                  />
                  {this.state.errors.matKhau !== "" &&
                  this.state.errors.taiKhoan_1 === "" ? (
                    <div className="Form_err">
                      (*) {this.state.errors.matKhau}
                    </div>
                  ) : (
                    ""
                  )}
                  {this.state.errors.taiKhoan_1 !== "" ? (
                    <div className="Form_err">
                      (*) {this.state.errors.taiKhoan_1}
                    </div>
                  ) : (
                    ""
                  )}
                  <button
                    className=" btn-5"
                    type="submit"
                    disabled={!this.state.formValid}
                  >
                    Login
                  </button>
                </form>
              </div>
              <ul className="bg-bubbles">
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    return <div>{this.renderlogin()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    login: state.formReducer.login
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onlogin: login => {
      dispatch(action.onlogin(login));
    },
    updateUser: user => {
      dispatch(action.actOnUpdateUser(user));
    },
    getHistoryCourse: user => {
      dispatch(action.actGetHistory(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(newlogin);
