import React, { Component } from "react";
import * as action from "./../../../../redux/action/index";
import { connect } from "react-redux";
import Axios from "axios";
import swal from "sweetalert";

class newsign_up extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maNhom: "GP01",
        email: ""
      },
      errors: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDT: "",
        taiKhoan_1: "",
        email_2: ""
      },
      formValid: false,
      taiKhoanValid: false,
      matKhauValid: false,
      hoTenValid: false,
      emailValid: false,
      soDTValid: false
    };
  }
  handleOnChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;

    this.setState({
      values: { ...this.state.values, [name]: value }
    });
  };
  handleErrors = event => {
    let { name, value } = event.target;

    let message = value === "" ? name + " Do not be empty" : "";
    let {
      taiKhoanValid,
      matKhauValid,
      hoTenValid,
      emailValid,
      soDTValid
    } = this.state;
    switch (name) {
      case "taiKhoan":
        taiKhoanValid = message !== "" ? false : true;

        if (value !== "" && !value.match(/^[A-Z-a-z0-9_-]{1,25}$/i)) {
          taiKhoanValid = false;
          message = "account cannot exceed 25 characters !";
        }
        if (value !== "" && !value.match(/^[A-Z-a-z0-9_-]{1,40}$/i)) {
          taiKhoanValid = false;
          message = "The account has special characters!";
        }

        break;

      case "matKhau":
        matKhauValid = message !== "" ? false : true;
        if (value !== "" && (value.length <= 8 || value.length >= 16)) {
          matKhauValid = false;
          message = " Password is greater than 8 and smaller than 16";
        }

        break;
      case "hoTen":
        hoTenValid = message !== "" ? false : true;
        if (value !== "" && !value.match(/^[a-z-A-Z -]{1,25}$/i)) {
          hoTenValid = false;
          message = "Username cannot exceed 25 characters !";
        }
        if (value !== "" && !value.match(/^[a-z-A-Z -]{2,40}$/i)) {
          hoTenValid = false;
          message = "Username has special characters !";
        }

        break;
      case "email":
        emailValid = message !== "" ? false : true;
        if (
          value !== "" &&
          !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        ) {
          emailValid = false;
          message = "Your email is not valid !";
        }
        break;
      case "soDT":
        soDTValid = message !== "" ? false : true;
        if (value !== "" && !value.match(/^[0-9]{10,11}$/i)) {
          soDTValid = false;
          message = " Your phone number is not valid";
        }

        break;
      default:
        break;
    }
    this.setState(
      {
        errors: { ...this.state.errors, [name]: message },
        taiKhoanValid,
        matKhauValid,
        hoTenValid,
        emailValid,
        soDTValid
      },
      () => {
        this.FormValidation();
      }
    );
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      errors: { ...this.state.errors, taiKhoan_1: "", email_2: "" }
    });

    console.log(this.state.values);

    Axios({
      method: "POST",
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: this.state.values
    })
      .then(result => {
        console.log(result, "ok");
        setTimeout(() => {
          swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            buttons: false,
            timer: 1500
          });
        }, 150);

        this.hidden();
        this.setState({
          values: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maNhom: "GP01",
            email: ""
          }
        });
      })
      .catch(err => {
        console.log(err.response.data);

        let message = err.response.data;

        if (message === "Tài khoản đã tồn tại!") {
          this.setState({
            errors: { ...this.state.errors, taiKhoan_1: message }
          });
        } else if (message === "Email đã tồn tại!") {
          this.setState({
            errors: { ...this.state.errors, email_2: message }
          });
        }
      });
  };
  FormValidation = () => {
    this.setState({
      formValid:
        this.state.taiKhoanValid &&
        this.state.matKhauValid &&
        this.state.hoTenValid &&
        this.state.emailValid &&
        this.state.soDTValid
    });
  };
  Cancle = () => {
    let { values } = this.state;
    if (
      values.taiKhoan != "" ||
      values.matKhau != "" ||
      values.hoTen != "" ||
      values.email != "" ||
      values.soDT != ""
    ) {
      swal({
        title: "Are you sure?",
        text: "Once logged out, you will not be able to recover the data!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          {
            this.hidden();
          }
        }
      });
    } else {
      {
        this.hidden();
      }
    }
  };
  hidden = () => {
    setTimeout(() => {
      this.props.onsignup(false);
    }, 150);
    this.setState({
      errors: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDT: "",
        taiKhoan_1: "",
        email_2: ""
      },
      values: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maNhom: "GP01",
        email: ""
      }
    });
  };

  rendersignup = () => {
    let { signup } = this.props;
    if (signup) {
      return (
        <div className="nghiadzn">
          <div className="Form">
            <div className="Form_Overlay" onClick={this.Cancle} />
            <div className="wrapper signUp">
              <div className="container1">
                <h1>Welcome</h1>
                <span className="clone" onClick={this.Cancle}>
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
                    onChange={this.handleOnChange}
                    onBlur={this.handleErrors}
                    onKeyUp={this.handleErrors}
                    value={this.state.values.taiKhoan}
                    placeholder="
            account"
                  />
                  {this.state.errors.taiKhoan !== "" &&
                  this.state.errors.taiKhoan_1 === "" ? (
                    <div className="Form_err">
                      (*) {this.state.errors.taiKhoan}
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
                  <input
                    type="text"
                    name="hoTen"
                    onChange={this.handleOnChange}
                    onBlur={this.handleErrors}
                    onKeyUp={this.handleErrors}
                    value={this.state.values.hoTen}
                    placeholder="Full name"
                  />
                  {this.state.errors.hoTen !== "" ? (
                    <div className="Form_err">
                      (*) {this.state.errors.hoTen}
                    </div>
                  ) : (
                    ""
                  )}
                  <input
                    type="password"
                    name="matKhau"
                    onChange={this.handleOnChange}
                    onBlur={this.handleErrors}
                    onKeyUp={this.handleErrors}
                    value={this.state.values.matKhau}
                    placeholder="Password"
                  />
                  {this.state.errors.matKhau !== "" ? (
                    <div className="Form_err">
                      (*) {this.state.errors.matKhau}
                    </div>
                  ) : (
                    ""
                  )}
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleOnChange}
                    onBlur={this.handleErrors}
                    onKeyUp={this.handleErrors}
                    value={this.state.values.email}
                    placeholder="Email"
                  />
                  {this.state.errors.email !== "" &&
                  this.state.errors.email_2 === "" ? (
                    <div className="Form_err">
                      (*) {this.state.errors.email}
                    </div>
                  ) : (
                    ""
                  )}
                  {this.state.errors.email_2 !== "" ? (
                    <div className="Form_err">
                      (*) {this.state.errors.email_2}
                    </div>
                  ) : (
                    ""
                  )}

                  <input
                    type="text"
                    name="soDT"
                    onChange={this.handleOnChange}
                    onBlur={this.handleErrors}
                    onKeyUp={this.handleErrors}
                    value={this.state.values.soDT}
                    placeholder="Phone Number"
                  />
                  {this.state.errors.soDT !== "" ? (
                    <div className="Form_err">(*) {this.state.errors.soDT}</div>
                  ) : (
                    ""
                  )}
                  <div>
                    <button
                      className=" btn-5"
                      type="submit"
                      disabled={!this.state.formValid}
                    >
                      Sign Up
                    </button>
                  </div>
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
    return <div>{this.rendersignup()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    signup: state.formReducer.signup
  };
};
const mapDispatchToProps = Dispatch => {
  return {
    onsignup: signup => {
      Dispatch(action.onsignup(signup));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(newsign_up);
