import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";
import ListCard from "./list_card";

class cource_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soPage: 1
    };
  }
  componentDidMount() {
    this.props.getListCourse();
  }

  renderhtml = () => {
    let { listCourse, tab, courseSoft } = this.props;
    let ListCourse =[...listCourse]

   
  
    // switch (courseSoft) {
    //   case "Best Courses":
    //     ListCourse.sort(function(a, b) {
    //       return b.luotXem - a.luotXem;
    //     });
    //     break;
    //   case "Newest Courses":
    //     ListCourse.sort(function(a, b) {
    //       return b.ngayTao - a.ngayTao;
    //     });
    //     break;
    //   case "Trending Courses":
    //     ListCourse.sort(function(a, b) {
    //       return b.luotXem - a.luotXem;
    //     });
    //     break;
    //   case "Oldest Courses":
    //     ListCourse.sort(function(a, b) {
    //       a = new Date(a.ngayTao);
    //       b = new Date(b.ngayTao);
    //       return a > b ? -1 : a < b ? 1 : 0;
    //     });
    //     break;
    // }
    ListCourse.sort(function(a, b) {
      return b.luotXem - a.luotXem;
    });
    let so_page = ListCourse.length / 4;
    let songuyen = parseInt(ListCourse.length / 4);
    if (so_page === songuyen) {
      so_page = songuyen;
    } else {
      so_page = songuyen + 1;
    }

    return (
      <div>
        <div className="show_course">{this.show_course(ListCourse)}</div>
        <div className="List_page">
          {this.state.soPage === 1 ? (
            ""
          ) : (
            <span className="prev onlist" onClick={this.prev}>
              <i className="fa fa-angle-double-left"></i>
            </span>
          )}

          <ul className="pagination">{this.listPage(so_page, ListCourse)}</ul>
          {this.state.soPage === so_page ? (
            ""
          ) : (
            <span className="next onlist" onClick={this.next}>
              <i className="fa fa-angle-double-right"></i>
            </span>
          )}
        </div>
      </div>
    );
  };
  show_course = ListCourse => {
    let { soPage } = this.state;
    let min = (soPage - 1) * 4;
    let max = soPage * 4;
    console.log(min, max);
    return ListCourse.map((item, index) => {
      if (index < max && index >= min) {
        return <ListCard key={index} course={item} stt={index} />;
      }
    });
  };
  chiapage = data => {
    let so = data.index + 1;
    this.setState({
      soPage: so
    });
  };
  listPage = (data, ListCourse) => {
    return ListCourse.map((item, index) => {
      if (index < data) {
        let trangso = index + 1;

        return (
          <li
            onClick={() => {
              this.chiapage({ index });
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={
              this.state.soPage === trangso
                ? " num onlist active "
                : "num onlist "
            }
            key={index}
          >
            {index + 1}
            {}
          </li>
        );
      }
    });
  };
  next = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    let so = this.state.soPage + 1;
    this.setState({
      soPage: so
    });
  };
  prev = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    let so = this.state.soPage - 1;
    this.setState({
      soPage: so
    });
  };

  render() {
    return <div className="Courses_List">{this.renderhtml()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    listCourse: state.khoaHocReducer.listCourse,
    tab: state.khoaHocReducer.tab,
    courseSoft: state.khoaHocReducer.courseSoft
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getListCourse: () => {
      dispatch(action.actGetListCourseAPI());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(cource_list);
