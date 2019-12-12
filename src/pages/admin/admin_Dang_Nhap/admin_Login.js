import React, { Component } from "react";
import * as action from "./../../../redux/action/index";
import { connect } from "react-redux";

class admin_Login extends Component {
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
    this.props.onSubmit(this.state.values, this.props.history);
  };
  renderlogin = () => {
    return (
      <div className="nghiadzn">
        <div className="Form">
          <div className="Form_Overlay" />
          <div className="wrapper">
            <div className="container1">
              <h1>Welcome</h1>
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
                {this.state.errors.taiKhoan !== "" ? (
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
                this.props.adminLogin === "" ? (
                  <div className="Form_err">
                    (*) The account or password is incorrect!
                  </div>
                ) : (
                  ""
                )}
                {this.props.adminLogin !== "" ? (
                  <div className="Form_err">
                    (*) The account or password is incorrect!
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
    );
  };
  render() {
    return <div>{this.renderlogin()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    adminLogin: state.formReducer.ADMIN_LOGIN
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (user, history) => {
      dispatch(action.actloginAdmin(user, history));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(admin_Login);
