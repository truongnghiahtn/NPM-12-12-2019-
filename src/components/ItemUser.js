import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import * as action from "./../redux/action/index";
import { connect } from "react-redux";

class ItemUser extends Component {
  onUpdateUser = user => {
    this.props.updateUser(user);
  };
  render() {
    let { user, onDeleteUser } = this.props;
    let userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
    return (
      <tr>
        <td ><p className="item-user-taikhoan">{user.taiKhoan}</p></td>
        <td>{user.hoTen}</td>
        <td>{user.soDt}</td>
        <td> <p className="item-user-taikhoan"> {user.email}</p></td>
        <td >
 
          <Button
          variant="contained"
          color="primary"
          data-toggle="modal"
          data-target="#modelUser"
          onClick={() => {
            this.onUpdateUser(user);
          }}
        >
          <EditIcon />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            onDeleteUser(user, userAdmin);
          }}
        >
          <DeleteIcon />
        </Button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteUser: (user, userAdmin) => {
      dispatch(action.actDeleteUser(user, userAdmin));
    }
  };
};

export default connect(null, mapDispatchToProps)(ItemUser);
