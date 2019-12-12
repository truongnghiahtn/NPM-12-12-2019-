import React, { Component, Fragment, useEffect, useState } from "react";
import * as action from "./../../../redux/action/index";
import { connect } from "react-redux";
import ItemUser from "./../../../components/ItemUser";
import UpdateUser from "./updateUser";
import WithModal from "./withModal/withModal";
import AddUser from "./addUser";
//core
import Button from "@material-ui/core/Button";
//icon
import AddIcon from "@material-ui/icons/Add";
//component
import SearchCourse from "../../../components/SearchCourse/SearchCourse";

const Modal = WithModal(UpdateUser);

const UserManagement = props => {
  const [state, setState] = useState({
    status: false,
    user: {
      taiKhoan: "",
      hoTen: "",
      soDt: "",
      email: "",
      matKhau: ""
    },
    filterUser:[]
  });

  useEffect(() => {
    props.getListUser();
  });
  const onUpdateUser = user => {
    props.getUserInfo(user);
    setState({
      status: false,
      user: { ...user, matKhau: props.userInfo.matKhau }
    });
  };
  const onAddUser = () => {
    setState({
      status: true,
      user: {
        taiKhoan: "",
        hoTen: "",
        soDt: "",
        email: "",
        matKhau: ""
      }
    });
  };
  const renderTable = () => {
    let { listUser } = props;
    if (listUser && listUser.length > 0) {
      return listUser.map((item, index) => {
        if(index <20){
          return (
            <ItemUser
              updateUser={user => {
                onUpdateUser(user);
              }}
              user={item}
              key={index}
            />
          );
        }
      });
    }
  };
  const handleFilter = keyword => { 
    console.log(keyword)
    let filterUser = [...props.listUser];
    filterUser = filterUser.filter(
      (user)=>{
        return user.hoTen.toLowerCase().indexOf(keyword.toLowerCase()) > -1
      }
    );
    console.log(filterUser)
  };

  return (
    <div className="container">
      <div className="user-manage ">
        <h3>Users Management</h3>
        <div className="col-md-12 d-flex justify-content-between">
          <div>
            <Button
              variant="contained"
              color="primary"
              data-toggle="modal"
              data-target="#modelUser"
              onClick={onAddUser}     
            >
              <AddIcon /> Add user
            </Button>
          </div>
          <SearchCourse onFilter={handleFilter} />
        </div>
        <div className="user-list">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Full name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
        </div>
      </div>
      <Modal status={state.status} user={state.user} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    listUser: state.formReducer.listUser,
    userInfo: state.formReducer.userInfo
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getListUser: () => {
      dispatch(action.actGetListUser());
    },
    getUserInfo: user => {
      dispatch(action.actGetUserInfo(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
