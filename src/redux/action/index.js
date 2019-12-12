import * as Actiontype from "./../constants/actionType";
import swal from "sweetalert";
import { CallAPI } from "./../../ultis/CallApi";

export const actGetListCourseAPI = () => {
  return dispatch => {
    CallAPI("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01", "GET", null, null)
      .then(res => {
        let listCourse = [];
        if (res.data) {
          listCourse = res.data.map(item => {
            return { ...item, fee: Math.floor(Math.random() * 100) + 1 };
          });
        }
        if (res.data && localStorage.getItem("deleteCourses")) {
          let deleteCourses = JSON.parse(localStorage.getItem("deleteCourses"));
          deleteCourses.map(delCourse => {
            let index = listCourse.findIndex(
              item => item.maKhoaHoc === delCourse.maKhoaHoc
            );
            if (index !== -1) {
              listCourse.splice(index, 1);
            }
          });
        }
        dispatch({
          type: Actiontype.GET_LIST_COURSE,
          listCourse,
          listCourseAdmin: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actAddToCart = khoaHoc => {
  return dispatch => {
    dispatch({
      type: Actiontype.ADD_TO_CART,
      khoaHoc
    });
  };
};

export const actDeleteCourse = khoaHoc => {
  return dispatch => {
    dispatch({
      type: Actiontype.DELETE_COURSE,
      khoaHoc
    });
  };
};

export const actGetDetailCourseAPI = (id, fee) => {
  return dispatch => {
    CallAPI(
      `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
      "GET",
      null,
      null
    )
      .then(res =>
        dispatch({
          type: Actiontype.GET_DETAIL_COURSE,
          course: { ...res.data, fee }
        })
      )
      .catch(err => console.log(err.response.data));
  };
};

export const actOnFilter = filterListCourse => {
  return dispatch => {
    dispatch({
      type: Actiontype.FILTER_COURSE,
      filterListCourse
    });
  };
};

export const onlogin = login => {
  return {
    type: Actiontype.LOGIN,
    login
  };
};
export const onsignup = signup => {
  return {
    type: Actiontype.SIGNUP,
    signup
  };
};
export const ontuduy = data => {
  return {
    type: Actiontype.TAB_LIST_COUSRSE,
    data
  };
};
export const onCourseCard = data => {
  return {
    type: Actiontype.COURSE_CARD,
    data
  };
};
export const onCourseSoft = data => {
  return {
    type: Actiontype.COURSE_SOFT,
    data
  };
};
export const actOnUpdateUser = user => {
  return dispatch => {
    dispatch({
      type: Actiontype.UPDATE_USER,
      user
    });
  };
};
export const actOnLogOut = user => {
  return dispatch => {
    dispatch({
      type: Actiontype.ON_LOGOUT,
      user
    });
  };
};
export const actResetCart = cart => {
  return dispatch => {
    dispatch({
      type: Actiontype.RESET_CART,
      cart
    });
  };
};

export const actOnPayCart = cart => {
  return dispatch => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      let newCart = [...cart];
      let data, headers;
      newCart.map(item => {
        data = {
          maKhoaHoc: item.maKhoaHoc,
          taiKhoan: user.taiKhoan
        };
        headers = {
          Authorization: `Bearer ${user.accessToken}`
        };
        CallAPI("QuanLyKhoaHoc/DangKyKhoaHoc", "POST", data, headers)
          .then(res => {
            dispatch({
              type: Actiontype.ON_PAYCART
            });
            setTimeout(() => {
              swal({
                title: "You already pay cart",
                text: "See you again!",
                icon: "success",
                buttons: false,
                timer: 1500
              });
            }, 150);
          })
          .catch(error => {
            console.log(error.response.data);
          });
      });
    } else {
      setTimeout(() => {
        swal({
          title: "You already pay cart",
          text: "See you again!",
          icon: "error",
          buttons: false,
          timer: 1500
        });
      }, 150);
    }
  };
};
export const actOnUpdateProfile = user => {
  let userLocal = JSON.parse(localStorage.getItem("user"));
  return dispatch => {
    let data = {
      ...user,
      maLoaiNguoiDung: "HV",
      maNhom: "GP01"
    };
    let headers = {
      Authorization: `Bearer ${userLocal.accessToken}`
    };
    CallAPI("QuanLyNguoiDung/CapNhatThongTinNguoiDung", "PUT", data, headers)
      .then(res => {
        dispatch({
          type: Actiontype.UPDATE_PROFILE,
          profile: res.data
        });
        window.location.reload();
        swal({
          title: "Success",
          text: "Already updated",
          icon: "success",
          buttons: false,
          timer: 1500
        });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};
export const actGetUserInfo = user => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  return dispatch => {
    let data = {
      taiKhoan: user.taiKhoan
    };
    let headers = {
      Authorization: `Bearer ${userLocal.accessToken}`
    };
    CallAPI("QuanLyNguoiDung/ThongTinTaiKhoan", "POST", data, headers)
      .then(res => {
        dispatch({
          type: Actiontype.GET_USER_INFO,
          userInfo: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetHistory = user => {
  let userLocal = JSON.parse(localStorage.getItem("user"));
  return dispatch => {
    let data = {
      taiKhoan: user.taiKhoan
    };
    let headers = {
      Authorization: `Bearer ${userLocal.accessToken}`
    };
    CallAPI("QuanLyNguoiDung/ThongTinTaiKhoan", "POST", data, headers)
      .then(res => {
        dispatch({
          type: Actiontype.GET_HISTORY_COURSE,
          historyListCourse: res.data.chiTietKhoaHocGhiDanh,
          userProfile: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetListUser = () => {
  return dispatch => {
    CallAPI(
      "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
      "GET",
      null,
      null
    )
      .then(res => {
        dispatch({
          type: Actiontype.GET_LIST_USER,
          listUser: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actDeleteUser = (user, userAdmin) => {
  return dispatch => {
    let headers = {
      Authorization: `Bearer ${userAdmin.accessToken}`
    };
    CallAPI(
      `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user.taiKhoan}`,
      "DELETE",
      null,
      headers
    )
      .then(res => {
        dispatch({
          type: Actiontype.DELETE_USER,
          user
        });
        swal({
          title: "Success",
          text: "Enroll Successfull",
          icon: "success",
          buttons: false,
          timer: 1500
        });
      })
      .catch(err => {
        swal({
          title: "Error",
          text: "Registered users cannot be deleted!",
          icon: "error",
          buttons: false,
          timer: 1500
        });
      });
  };
};

export const actloginAdmin = (user, history) => {
  return dispatch => {
    CallAPI("QuanLyNguoiDung/DangNhap", "POST", user, null)
      .then(result => {
        if (result.data.maLoaiNguoiDung === "GV") {
          localStorage.setItem("userAdmin", JSON.stringify(result.data));
          history.push("admin/dashboard");
        } else {
          alert("ban dell dc dang nhap");
        }
        dispatch({
          type: Actiontype.ADMIN_LOGIN,
          ADMIN_LOGIN: ""
        });
      })
      .catch(err => {
        
        dispatch({
          type: Actiontype.ADMIN_LOGIN,
          ADMIN_LOGIN: err.response.data
        });
      });
  };
};

const authToken = JSON.parse(localStorage.getItem("userAdmin"));

export const actAddCourseAPI = course => {
  return dispatch => {
    if (authToken) {
      let headers = {
        Authorization: `Bearer ${authToken.accessToken}`
      };
      CallAPI("QuanLyKhoaHoc/ThemKhoaHoc", "POST", course, headers)
        .then(res => {
          setTimeout(() => {
            swal({
              title: "Good job!",
              text: "Was successfully added",
              icon: "success",
              buttons: false,
              timer: 1500
            });
          }, 150);
          dispatch({
            type: Actiontype.ADD_COURSE,
            course: {
              ...res.data,
              nguoiTao: {
                hoTen: JSON.parse(localStorage.getItem("userAdmin")).hoTen
              }
            }
          });
        })
        .catch(err => {
          setTimeout(() => {
            swal({
              title: "Error",
              text: `${err.response.data}!`,
              icon: "error",
              buttons: false,
              timer: 1500
            });
          }, 150);
        });
    }
  };
};

export const actDeleteCourseAPI = id => {
  return dispatch => {
    if (authToken) {
      let headers = {
        Authorization: `Bearer ${authToken.accessToken}`
      };
      CallAPI(
        `QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`,
        "DELETE",
        null,
        headers
      )
        .then(res => {
          setTimeout(() => {
            swal({
              title: "Good job!",
              text: `${res.data}!`,
              icon: "success",
              buttons: false,
              timer: 1500
            });
          }, 150);
          dispatch({
            type: Actiontype.DELETE_COURSE_API,
            id: id
          });
        })
        .catch(err =>
          setTimeout(() => {
            swal({
              title: "Error",
              text: `${err.response.data}!`,
              icon: "error",
              buttons: false,
              timer: 1500
            });
          }, 150)
        );
    }
  };
};

export const actGetEditCourse = course => {
  return {
    type: Actiontype.EDIT_COURSE,
    editCourse: course
  };
};

export const actEditCourseAPI = course => {
  return dispatch => {
    if (authToken) {
      let headers = {
        Authorization: `Bearer ${authToken.accessToken}`
      };
      CallAPI("QuanLyKhoaHoc/CapNhatKhoaHoc", "PUT", course, headers)
        .then(res => {
          setTimeout(() => {
            swal({
              title: "Good job!",
              text: "Was successfully added",
              icon: "success",
              buttons: false,
              timer: 1500
            });
          }, 150);
          dispatch({
            type: Actiontype.EDIT_COURSE_API,
            course: {
              ...res.data,
              nguoiTao: {
                hoTen: JSON.parse(localStorage.getItem("userAdmin")).hoTen
              }
            }
          });
        })
        .catch(err => {
          setTimeout(() => {
            swal({
              title: "Error",
              text: `${err.response.data}!`,
              icon: "error",
              buttons: false,
              timer: 1500
            });
          }, 150);
        });
    }
  };
};

export const actGetCataLogCourse = () => {
  return dispatch => {
    CallAPI("QuanLyKhoaHoc/LayDanhMucKhoaHoc", "GET", null, null)
      .then(res => {
        dispatch({
          type: Actiontype.GET_CATALOG_COURSE,
          catalogCourse: res.data
        });
      })
      .catch(err => console.log(err.response.data));
  };
};

export const actGetComponent = component => {
  return dispatch => {
    dispatch({
      type: Actiontype.GET_COMPONENT,
      component: component
    });
  };
};
