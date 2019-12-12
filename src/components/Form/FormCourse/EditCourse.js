import React from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
import Button from "@material-ui/core/Button";

const EditCourse = props => {
  const [state, setState] = React.useState({
    maKhoaHoc: "",
    tenKhoaHoc: "",
    moTa: "",
    hinhAnh: "",
    maDanhMucKhoaHoc: ""
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
    props.editCourse({
      ...state,
      luotXem: "1000",
      ngayTao: dd + "/" + mm + "/" + yyyy,
      taiKhoanNguoiTao: JSON.parse(localStorage.getItem("userAdmin")).taiKhoan,
      maNhom: "GP02"
    });
  };

  let { course, catalogCourse } = props;

  React.useEffect(() => {
    if (props.course !== "") {
      let maKhoaHoc = course.maKhoaHoc;
      let tenKhoaHoc = course.tenKhoaHoc;
      let moTa = course.moTa;
      let hinhAnh = course.hinhAnh;
      let maDanhMucKhoaHoc = course.danhMucKhoaHoc
        ? course.danhMucKhoaHoc.maDanhMucKhoahoc
        : course.maDanhMucKhoaHoc;

      setState({
        maKhoaHoc,
        tenKhoaHoc,
        moTa,
        hinhAnh,
        maDanhMucKhoaHoc
      });
    } else {
      setState({
        maKhoaHoc: "",
        tenKhoaHoc: "",
        moTa: "",
        hinhAnh: "",
        maDanhMucKhoaHoc: ""
      });
    }
  }, [props.course]);

  const changeID = id => {
    return catalogCourse.filter(item => id === item.maDanhMuc);
  };

  let id = changeID(state.maDanhMucKhoaHoc)[0];

  const renderCatalogHTML = () => {
    if (catalogCourse) {
      if (course.danhMucKhoaHoc || course.maDanhMucKhoaHoc) {
        let maDanhMuc = course.danhMucKhoaHoc
          ? course.danhMucKhoaHoc.maDanhMucKhoahoc
          : course.maDanhMucKhoaHoc;

        catalogCourse = catalogCourse.filter(item => {
          return item.maDanhMuc !== maDanhMuc;
        });
      }
      return catalogCourse.map((item, index) => {
        return (
          <option value={item.maDanhMuc} key={index}>
            {item.tenDanhMuc}
          </option>
        );
      });
    }
  };

  return (
    <div
      className="modal fade"
      id="EditCourse"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Course</h5>
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
            <form onSubmit={handleOnSubmit}>
              <div className="form-group">
                <label>Course's Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={state.tenKhoaHoc || ""}
                  name="tenKhoaHoc"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={state.moTa || ""}
                  name="moTa"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <label>Image</label>
                <input
                  type="text"
                  className="form-control"
                  value={state.hinhAnh || ""}
                  name="hinhAnh"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <label>Course's Catolog</label>
                <select
                  className="form-control"
                  name="maDanhMucKhoaHoc"
                  value={state.maDanhMucKhoaHoc}
                  onChange={handleOnChange}
                >
                  <option>
                    {course.danhMucKhoaHoc
                      ? course.danhMucKhoaHoc.tenDanhMucKhoaHoc
                      : id
                      ? id.tenDanhMuc
                      : ""}
                  </option>
                  {renderCatalogHTML()}
                </select>
              </div>

              <Button type="submit" variant="contained" color="primary">
                Edit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    course: state.khoaHocReducer.editCourse,
    catalogCourse: state.khoaHocReducer.catalogCourse
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCourse: course => dispatch(action.actEditCourseAPI(course))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCourse);
