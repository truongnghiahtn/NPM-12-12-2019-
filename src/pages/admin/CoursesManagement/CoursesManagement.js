import React from "react";
import { connect } from "react-redux";

//core
import Button from "@material-ui/core/Button";
//icon
import AddIcon from "@material-ui/icons/Add";
//component
import Table from "../../../components/Table/Table";
import * as action from "../../../redux/action/index";
import AddCourse from "../../../components/Form/FormCourse/AddCourse";
import EditCourse from "../../../components/Form/FormCourse/EditCourse";
import WithModal from "../../../components/WithModal/WithModal";
import SearchCourse from "../../../components/SearchCourse/SearchCourse";

const CoursesManagement = props => {
  const [listCourse, setListCourse] = React.useState([]);
  let array = [];
  React.useEffect(() => {
    props.getListCourse();
    props.getCatalogCourse();
  }, []);

  React.useEffect(() => {
    setListCourse(props.listCourse);
  }, [props.listCourse]);

  const handleFilter = keyword => {
    let filterCourse = props.listCourse.filter(
      course =>
        course.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );
    setListCourse(filterCourse);
  };

  return (
    <React.Fragment>
      <div className="management-courses flex-grow-1">
        <h3>Users Management</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-between">
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  data-toggle="modal"
                  data-target="#AddCourse"
                >
                  <AddIcon /> Add Courses
                </Button>
              </div>
              <SearchCourse onFilter={handleFilter} />
            </div>
            <div className="col-md-12 px-2">
              <Table listCourse={listCourse} />
            </div>
          </div>
        </div>
      </div>
      <AddCourse />
      <EditCourse />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    listCourse: state.khoaHocReducer.listCourseAdmin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListCourse: () => {
      dispatch(action.actGetListCourseAPI());
    },
    getCatalogCourse: () => {
      dispatch(action.actGetCataLogCourse());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesManagement);
