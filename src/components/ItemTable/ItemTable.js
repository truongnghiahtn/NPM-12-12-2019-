import React from "react";
import { connect } from "react-redux";
//core
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
//icon
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import * as action from "../../redux/action/index";

const ItemTable = props => {
  let { course } = props;

  const [checked, setChecked] = React.useState(true);

  React.useEffect(() => {
    if (localStorage.getItem("deleteCourses")) {
      let coursesUpdate = JSON.parse(localStorage.getItem("deleteCourses"));
      let boolean = coursesUpdate.some(
        item => item.maKhoaHoc === course.maKhoaHoc
      );
      setChecked(!boolean);
    }
  }, []);

  const toggleChecked = props => {
    setChecked(prev => !prev);
    console.log(props.target.checked);
    if (!props.target.checked) {
      if (localStorage.getItem("deleteCourses")) {
        let coursesUpdate = [];
        coursesUpdate = JSON.parse(localStorage.getItem("deleteCourses"));
        coursesUpdate.push(course);

        localStorage.setItem("deleteCourses", JSON.stringify(coursesUpdate));
        console.log(course);
      } else {
        let coursesUpdate = [];
        coursesUpdate.push(course);
        localStorage.setItem("deleteCourses", JSON.stringify(coursesUpdate));
      }
    } else {
      if (localStorage.getItem("deleteCourses")) {
        let coursesUpdate = [];
        coursesUpdate = JSON.parse(localStorage.getItem("deleteCourses"));
        let index = coursesUpdate.findIndex(
          item => item.maKhoaHoc === course.maKhoaHoc
        );
        coursesUpdate.splice(index, 1);

        localStorage.setItem("deleteCourses", JSON.stringify(coursesUpdate));
      }
    }
  };

  return (
    <tr>
      <td>
        <img src={course.hinhAnh} alt="" width="40px" height="40px" />
        <div>{course.tenKhoaHoc}</div>
      </td>
      <td className="admin-coursesItem">{course.nguoiTao.hoTen}</td>
      <td className="admin-coursesItem">{course.ngayTao}</td>
      <td className="admin-coursesItem">
        <FormControlLabel
          control={<Switch checked={checked} onChange={toggleChecked} />}
        />
      </td >
      <td className="admin-coursesItem">
        <Button
          variant="contained"
          color="primary"
          data-toggle="modal"
          data-target="#EditCourse"
          onClick={() => {
            props.editCourse(course);
          }}
        >
          <EditIcon />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            props.deleteCourse(course.maKhoaHoc);
          }}
        >
          <DeleteIcon />
        </Button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCourse: id => dispatch(action.actDeleteCourseAPI(id)),
    editCourse: course => dispatch(action.actGetEditCourse(course))
  };
};

export default connect(null, mapDispatchToProps)(ItemTable);
