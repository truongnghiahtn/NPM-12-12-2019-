import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
import swal from "sweetalert";
import { withRouter } from "react-router-dom";
import History from "./History/History";
import Account from "./Account/Account";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taiKhoan: "",
      hoTen: "",
      soDT: "",
      email: "",
      matKhau: ""
    };
  }
  renderUser = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return user;
    }
    return "";
  };

  handleOnChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };
  updateLocal = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    user.hoTen = this.state.hoTen;
    user.soDT = this.state.soDT;
    user.email = this.state.email;
    localStorage.setItem("user", JSON.stringify(user));
  };
  handleOnSubmit = e => {
    e.preventDefault();
    this.updateLocal();
    this.props.onUpdateProfile(this.state);
    setTimeout(() => {
      swal({
        title: "Success",
        text: "See you again!",
        icon: "success",
        buttons: false,
        timer: 1500
      });
    }, 150);
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      matKhau: nextProps.userProfile.matKhau
    });
  }

  componentDidMount() {
    if (this.renderUser() !== "") {
      let user = this.renderUser();
      this.props.getHistory(user);
      this.props.getListCourse();
      this.setState({
        taiKhoan: user.taiKhoan,
        hoTen: user.hoTen,
        soDT: user.soDT,
        email: user.email
      });
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div className="profile-page">
        <div className="container">
          <div className="row">
            <div className="col-3 ">
              <div className="profile-block">
                {this.renderUser() !== "" ? (
                  <div className="user-profile">
                    <div className="wrapper-user">
                      <div className="user-img">
                        <img src="../img/avatar.png" width={120} />
                      </div>
                      <p>
                        {this.props.user.hoTen
                          ? this.props.user.hoTen
                          : this.renderUser().hoTen}
                      </p>
                      <h5>Front End Developer</h5>
                    </div>
                  </div>
                ) : null}
                <div
                  className="nav flex-column nav-pills text-center"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link active"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="true"
                  >
                    Profile
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-account-tab"
                    data-toggle="pill"
                    href="#v-pills-account"
                    role="tab"
                    aria-controls="v-pills-account"
                    aria-selected="false"
                  >
                    Account
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-edit-tab"
                    data-toggle="pill"
                    href="#v-pills-edit"
                    role="tab"
                    aria-controls="v-pills-edit"
                    aria-selected="false"
                  >
                    Edit Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="d-flex justify-content-between">
                  <h3 className="mb-4">My Profile</h3>
                  <div className="icons">
                    <i
                      className="fa fa-facebook-official fb"
                      aria-hidden="true"
                    />
                    <i className="fa fa-twitter-square tw" aria-hidden="true" />
                    <i className="fa fa-youtube-play yt" aria-hidden="true" />
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <h3 className="text-center font-weight-bold">Courses</h3>
                  <History />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-account"
                  role="tabpanel"
                  aria-labelledby="v-pills-account-tab"
                >
                  <h3 className="text-center font-weight-bold">Account</h3>
                  <Account userProfile={this.props.userProfile} />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-edit"
                  role="tabpanel"
                  aria-labelledby="v-pills-edit-tab"
                >
                  <h3 className="text-center font-weight-bold">Profile</h3>
                  <form
                    onSubmit={event => {
                      this.handleOnSubmit(event);
                    }}
                  >
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        disabled
                        name="taiKhoan"
                        onChange={event => {
                          this.handleOnChange(event);
                        }}
                        value={this.state.taiKhoan}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="fullname">Full name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullname"
                        name="hoTen"
                        onChange={event => {
                          this.handleOnChange(event);
                        }}
                        value={this.state.hoTen}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="soDT"
                        onChange={event => {
                          this.handleOnChange(event);
                        }}
                        value={this.state.soDT}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={event => {
                          this.handleOnChange(event);
                        }}
                        value={this.state.email}
                      />
                    </div>
                    <button className="btn btn-success" type="submit">
                      UPDATE ACCOUNT
                    </button>
                  </form>
                </div>
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
    user: state.formReducer.user,
    profile: state.formReducer.profile,
    userProfile: state.formReducer.userProfile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateProfile: user => {
      dispatch(action.actOnUpdateProfile(user));
    },
    getHistory: user => {
      dispatch(action.actGetHistory(user));
    },
    getListCourse: () => {
      dispatch(action.actGetListCourseAPI());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile));
