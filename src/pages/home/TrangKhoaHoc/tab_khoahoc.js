import React, { Component } from "react";
import { connect } from "react-redux";
import CoursesCard from "./cources_card";
import CoursesList from "./cource_list";
import * as action from "./../../../redux/action/index";

import { FingerprintSpinner } from "react-epic-spinners";
import VisibilitySensor from "react-visibility-sensor";

class tab_khoahoc extends Component {
  DS_courses = [
    {
      ten: "TuDuy",
      background: "#3659a2",
      title: "Web Development"
    },
    {
      ten: "Design",
      background: "#9b3b5a",
      title: "Design "
    },
    {
      ten: "BackEnd",
      background: "#890ca1",
      title: "BackEnd"
    },
    {
      ten: "FrontEnd",
      background: "#30826c",
      title: "FrontEnd"
    },
    {
      ten: "FullStack",
      background: "#7a8230",
      title: "FullStack"
    },
    {
      ten: "DiDong",
      background: "#c92592",
      title: "Mobile Apps Courses"
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.tabchange("TuDuy");
    }, 100);
  }
  tabchange = data => {
    let Data1 = this.DS_courses.find(item => {
      return item.ten === data;
    });

    this.props.ontabchange(Data1);
  };

  onVisibilityChange = isVisible => {
    if (isVisible) setTimeout(() => this.setState({ loading: false }), 300);
  };

  render() {
    console.log(this.props.Course);
    return (
      <div className="tab_khoahoc">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link active"
              onClick={() => {
                this.tabchange("TuDuy");
              }}
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              WEB DEVELOPMENT
            </a>
            <a
              className="nav-item nav-link"
              onClick={() => {
                this.tabchange("Design");
              }}
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              DESIGN
            </a>
            <a
              className="nav-item nav-link"
              onClick={() => {
                this.tabchange("BackEnd");
              }}
              data-toggle="tab"
              href="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              BACKEND
            </a>
            <a
              className="nav-item nav-link"
              onClick={() => {
                this.tabchange("FrontEnd");
              }}
              data-toggle="tab"
              href="#nav-software"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              FRONTEND
            </a>
            <a
              className="nav-item nav-link"
              onClick={() => {
                this.tabchange("FullStack");
              }}
              data-toggle="tab"
              href="#nav-tool"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              FULLSTACK
            </a>
            <a
              className="nav-item nav-link"
              onClick={() => {
                this.tabchange("DiDong");
              }}
              data-toggle="tab"
              href="#nav-ecommerces"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              MOBILEAPPS
            </a>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
          >
            {this.props.Course === "courseCard" ? (
              <CoursesCard data={"Design"} />
            ) : (
              <CoursesList data={"Design"} />
            )}
          </div>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel">
            {this.props.Course === "courseCard" ? (
              <CoursesCard data={"BackEnd"} />
            ) : (
              <CoursesList data={"BackEnd"} />
            )}
          </div>
          <div className="tab-pane fade" id="nav-contact" role="tabpanel">
            {this.props.Course === "courseCard" ? (
              <CoursesCard data={"FrontEnd"} />
            ) : (
              <CoursesList data={"FrontEnd"} />
            )}
          </div>
          <div className="tab-pane fade" id="nav-software" role="tabpanel">
            {this.props.Course === "courseCard" ? (
              <CoursesCard data={"FullStack"} />
            ) : (
              <CoursesList data={"FullStack"} />
            )}
          </div>
          <div className="tab-pane fade" id="nav-tool" role="tabpanel">
            {this.props.Course === "courseCard" ? (
              <CoursesCard data={"DiDong"} />
            ) : (
              <CoursesList data={"DiDong"} />
            )}
          </div>
          <div className="tab-pane fade" id="nav-ecommerces" role="tabpanel">
            {this.props.Course === "courseCard" ? (
              <CoursesCard data={"TuDuy"} />
            ) : (
              <CoursesList data={"TuDuy"} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    Course: state.khoaHocReducer.courseCard
  };
};
const mapDispatchToProps = dispatch => {
  return {
    ontabchange: data => {
      dispatch(action.ontuduy(data));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(tab_khoahoc);
