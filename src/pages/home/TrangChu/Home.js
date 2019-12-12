import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Intro from "./Intro/Intro";
import UseCourse from "./UseCourse/UseCourse";
import StudentView from "./StudentsView/StudentsView";
import SearchDefault from "./SearchDefault/SearchDefault";
import PopularCourses from "./PopularCourses/PopularCourses";
import DiscountCourse from "./DiscountCourse/DiscountCourse";
import Instruction from "./Instruction/instruction";
import About from "./aboutUs/aBoutUs";
import Blog from "./blog/blog";
import * as action from "../../../redux/action/index";

class Home extends Component {
  componentDidMount() {
    this.props.getListCourse();
    window.scrollTo({ top: 0, behavior: "smooth" });
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.props.getHistoryCourse(user);
    }
  }
  render() {
    return (
      <Fragment>
        <Intro />
        <UseCourse />
        <PopularCourses />
        <DiscountCourse />
        <StudentView />
        <SearchDefault />
        <Instruction />
        <Blog />
        <About />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getListCourse: () => {
      dispatch(action.actGetListCourseAPI());
    },
    getHistoryCourse: user => {
      dispatch(action.actGetHistory(user));
    }
  };
};

export default connect(null, mapDispatchToProps)(Home);
