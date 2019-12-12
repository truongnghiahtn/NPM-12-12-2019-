import React, { Component } from "react";
import ModalPassword from "./ModalPassWord/ModalPassword";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      userProfile: nextProps.userProfile
    });
  }
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="taiKhoan">Username</label>
            <input
              type="text"
              className="form-control"
              id="taiKhoan"
              disabled
              value={this.state.userProfile.taiKhoan}
            />
          </div>
          <div className="form-group">
            <label htmlFor="matKhau">Password</label>
            <input
              type="password"
              className="form-control"
              id="matKhau"
              disabled
              value={this.state.userProfile.matKhau}
            />
          </div>
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#modelPassword"
            onClick={e => {
              e.preventDefault();
            }}
          >
            Update password
          </button>
        </form>

        <ModalPassword user={this.state} />
      </div>
    );
  }
}
