import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";
import ItemCart from "./../../../components/ItemCart";
import Button from "./../../../components/Button/Button"

class Filter_khoahoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Filter: "",
      DsFilter: []
    };
  }

  Soft = event => {
    let DATA;
    switch (event.target.value) {
      case "Best Courses":
        DATA = "Best Courses";
        break;
      case "Newest Courses":
        DATA = "Newest Courses";
        break;
      case "Trending Courses":
        DATA = "Trending Courses";
        break;
      case "Oldest Courses":
        DATA = "Oldest Courses";
        break;
      default:
        break;
    }
    this.props.onSoft(DATA);
  };
  FilterCourses = event => {
    let keyword = event.target.value;
    let { listCourse } = this.props;
    if (listCourse && listCourse.length > 0) {
      listCourse = listCourse.filter(item => {
        return (
          item.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        );
      });
    }
    this.setState(
      {
        Filter: keyword,
        DsFilter: listCourse
      },
      () => {
        console.log(this.state.DsFilter.length);
      }
    );
  };
  renderFilterList = () => {
    let { DsFilter } = this.state;
    console.log(DsFilter);
    if (DsFilter && DsFilter.length > 0) {
      return DsFilter.map((item, index) => {
        return (
          <div className="nghia " key={index}>
            <ItemCart khoaHoc={item} />;
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div className="fiter_courses">
        {this.state.Filter !== ""? (<div className="overfolow"></div>):("")}
        <div className="row ">
          <div className="Fiter_icon col-5">
            Filter{" "}
            <span
              onClick={() => {
                this.props.courseCard("courseCard");
              }}
              className={
                this.props.Course === "courseCard" ? "icon_active" : ""
              }
            >
              <i className="fa fa-th-large "></i>
            </span>
            <span
              onClick={() => {
                this.props.courseList("courseList");
              }}
              className={
                this.props.Course === "courseList" ? " icon_active" : ""
              }
            >
              {" "}
              <i className="fa fa-th-list" />
            </span>
            <span className="pr-3 pl-2">Sort By </span>
            <select onChange={this.Soft}>
              <option value="Best Courses">Best Courses</option>
              <option value="Newest Courses">Newest Courses</option>
              <option value="Trending Courses">Trending Courses</option>
              <option value="Oldest Courses">Oldest Courses</option>
            </select>
          </div>
          <form className="form-filter form-inline col-6 p-0 ml-auto">
            <input
              className="form-control m-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.FilterCourses}
            />
            <Button  type="submit">
              Search
            </Button>
          </form>
        </div>
        {this.state.Filter !== "" ? (
          <div className="Search_filter">
            {this.state.DsFilter.length > 0 ? (
              this.renderFilterList()
            ) : (
              <div className="item find">
                <p className="text-center">No course found</p>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    Course: state.khoaHocReducer.courseCard,
    listCourse: state.khoaHocReducer.listCourse
  };
};
const mapDispatchToProps = dispatch => {
  return {
    courseCard: data => {
      dispatch(action.onCourseCard(data));
    },
    courseList: data => {
      dispatch(action.onCourseCard(data));
    },
    onSoft: data => {
      dispatch(action.onCourseSoft(data));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter_khoahoc);