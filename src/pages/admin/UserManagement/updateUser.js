import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";

class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      hoTen: "",
      soDt: "",
      email: "",
      matKhau: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.matKhau !== "") {
      this.setState({
        taiKhoan: nextProps.user.taiKhoan,
        hoTen: nextProps.user.hoTen,
        soDt: nextProps.user.soDt,
        email: nextProps.user.email,
        matKhau: nextProps.userInfo.matKhau
      });
    } else if (nextProps.user.matKhau === "") {
      this.setState({
        taiKhoan: nextProps.user.taiKhoan,
        hoTen: nextProps.user.hoTen,
        soDt: nextProps.user.soDt,
        email: nextProps.user.email,
        matKhau: nextProps.user.matKhau
      });
    }
  }
  handleOnChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleOnSubmit = user => {
    this.props.onUpdateUser(user);
  };
  render() {
    let { status, user } = this.props;
    return (
      <Fragment>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={this.state.taiKhoan}
              name="taiKhoan"
              onChange={e => {
                this.handleOnChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="matKhau">Password</label>
            <input
              type="text"
              className="form-control"
              id="matKhau"
              value={this.state.matKhau}
              name="matKhau"
              onChange={e => {
                this.handleOnChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              value={this.state.hoTen}
              name="hoTen"
              onChange={e => {
                this.handleOnChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="soDt">Phone</label>
            <input
              type="text"
              className="form-control"
              id="soDt"
              value={this.state.soDt}
              name="soDt"
              onChange={e => {
                this.handleOnChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={this.state.email}
              name="email"
              onChange={e => {
                this.handleOnChange(e);
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            {status ? (
              <button
                type="submit"
                className="btn btn-success"
                data-dismiss="modal"
              >
                Add
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={() => {
                  this.handleOnSubmit(this.state);
                }}
              >
                Update
              </button>
            )}
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.formReducer.userInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateUser: user => {
      dispatch(action.actOnUpdateProfile(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
