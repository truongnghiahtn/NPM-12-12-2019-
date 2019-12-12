import React, { Component, Fragment } from "react";
import * as action from "./../../../../../redux/action/index";
import { connect } from "react-redux";

class ModalPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhauHienTai: "",
      matKhauCu: "",
      matKhauMoi: "",
      matKhauXacNhan: "",
      statusMKHT: false,
      statusMKMOI: false,
      onSubmit: false,
      statusForm: false,
      hoTen: "",
      soDT: "",
      email: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      taiKhoan: nextProps.user.userProfile.taiKhoan,
      matKhauHienTai: nextProps.user.userProfile.matKhau,
      hoTen: nextProps.user.userProfile.hoTen,
      soDT: nextProps.user.userProfile.soDT,
      email: nextProps.user.userProfile.email
    });
  }
  handleOnSubmit = () => {
    let {
      taiKhoan,
      matKhauHienTai,
      matKhauCu,
      matKhauMoi,
      matKhauXacNhan,
      statusMKHT,
      statusMKMOI,
      onSubmit,
      statusForm
    } = this.state;
    this.setState({
      onSubmit: true
    });

    if (matKhauCu !== "" && matKhauHienTai === matKhauCu) {
      this.setState({
        statusMKHT: true
      });
    } else {
      this.setState({
        statusMKHT: false
      });
    }
    if (
      matKhauMoi !== "" &&
      matKhauXacNhan !== "" &&
      matKhauMoi === matKhauXacNhan
    ) {
      this.setState({
        statusMKMOI: true
      });
    } else {
      this.setState({
        statusMKMOI: false
      });
    }
    if (statusMKHT && statusMKMOI) {
      this.setState(
        {
          statusForm: true
        },
        () => {
          this.props.editAccount({
            taiKhoan: this.state.taiKhoan,
            hoTen: this.state.hoTen,
            soDt: this.state.soDT,
            email: this.state.email,
            matKhau: this.state.matKhauXacNhan
          });
        }
      );
    }
  };

  handleOnChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
      onSubmit: false
    });
  };

  render() {
    let {
      taiKhoan,
      matKhauHienTai,
      matKhauCu,
      matKhauMoi,
      matKhauXacNhan,
      statusMKHT,
      statusMKMOI,
      onSubmit,
      statusForm
    } = this.state;
    return (
      <div>
        <div
          className="modal fade"
          id="modelPassword"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Password</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="taiKhoan">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="taiKhoan"
                      name="taiKhoan"
                      disabled
                      value={this.state.taiKhoan}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="matKhau">Enter previous password</label>
                    <input
                      type="text"
                      className="form-control"
                      id="matKhau"
                      name="matKhauCu"
                      onChange={e => {
                        this.handleOnChange(e);
                      }}
                    />
                    {!statusMKHT && onSubmit ? (
                      <Fragment>
                        {matKhauCu ? (
                          <p>Mật khẩu không chính xác</p>
                        ) : (
                          <p>Bạn cần nhập mật khẩu</p>
                        )}
                      </Fragment>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="matKhau">Enter new password</label>
                    <input
                      type="text"
                      className="form-control"
                      id="matKhau"
                      name="matKhauMoi"
                      onChange={e => {
                        this.handleOnChange(e);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="matKhau">Confirm password</label>
                    <input
                      type="text"
                      className="form-control"
                      id="matKhau"
                      name="matKhauXacNhan"
                      onChange={e => {
                        this.handleOnChange(e);
                      }}
                    />
                    {!statusMKMOI && onSubmit ? (
                      <Fragment>
                        {matKhauMoi !== "" && matKhauXacNhan !== "" ? (
                          <p>Mật khẩu không trùng khớp</p>
                        ) : (
                          <p>Bạn cần nhập mật khẩu</p>
                        )}
                      </Fragment>
                    ) : null}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss={statusForm ? "modal" : false}
                  onClick={() => {
                    this.handleOnSubmit();
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editAccount: user => {
      dispatch(action.actOnUpdateProfile(user));
    }
  };
};

export default connect(null, mapDispatchToProps)(ModalPassword);
