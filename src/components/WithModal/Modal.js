import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import * as action from "../../redux/action/index";
const Modal = props => {
  const [state, setState] = React.useState({
    maKhoaHoc: "",
    tenKhoaHoc: "",
    moTa: "",
    hinhAnh: "",
    maDanhMucKhoaHoc: "",
    taiKhoanNguoiTao: ""
  });

  const handleOnChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  var today = new Date();
  var dd = today.getDate();

  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  const handleOnSubmit = event => {
    event.preventDefault();
    props.addCourse({
      ...state,
      luotXem: "1000",
      ngayTao: dd + "/" + mm + "/" + yyyy,
      taiKhoanNguoiTao: JSON.parse(localStorage.getItem("userAdmin")).taiKhoan,
      maNhom: "GP02"
    });
  };

  return (
    <div className="modal fade" id="modelId">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Course</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleOnSubmit}>
              <div className="form-group">
                <label>Course's Id</label>
                <input
                  className="form-control"
                  name="maKhoaHoc"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <label>Course's Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="tenKhoaHoc"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="moTa"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <label>Image</label>
                <input
                  type="text"
                  className="form-control"
                  name="hinhAnh"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <label>Course's Catolog</label>
                <input
                  type="text"
                  className="form-control"
                  name="maDanhMucKhoaHoc"
                  onChange={handleOnChange}
                />
              </div>

              <Button type="submit" variant="contained" color="primary">
                Add
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addCourse: course => dispatch(action.actAddCourseAPI(course))
  };
};

export default connect(null, mapDispatchToProps)(Modal);
