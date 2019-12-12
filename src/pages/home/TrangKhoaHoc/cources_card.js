import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";
import ItemCard from "../../../components/Card/ItemCard";
import AOS from "aos";
import "aos/dist/aos.css";

class cources_card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soPage: 1,
      mangao:[],
      name:""
    };
  }
  componentDidMount() {
    this.props.getListCourse();
    AOS.init({
      duration: 1000
    });
  }
  renderhtml = () => {
    let { listCourse, tab, courseSoft } = this.props;
    let ListCourse =[...listCourse]



    switch (courseSoft) {
      case "Best Courses":
        ListCourse.sort(function(a, b) {
          return b.fee - a.fee;
        });
        break;
      case "Newest Courses":
        ListCourse.sort(function(a, b) {
          return b.ngayTao - a.ngayTao;
        });
        break;
      case "Trending Courses":
        ListCourse.sort(function(a, b) {
          return b.luotXem - a.luotXem;
        });
        break;
      case "Oldest Courses":
        ListCourse.sort(function(a, b) {
          a = new Date(a.ngayTao);
          b = new Date(b.ngayTao);
          return a > b ? -1 : a < b ? 1 : 0;
        });
        break;
    }

    let so_page = ListCourse.length / 8;
    let songuyen = parseInt(ListCourse.length / 8);
    if (so_page === songuyen) {
      so_page = songuyen;
    } else {
      so_page = songuyen + 1;
    }
    return (
      <div>
        <div className="show_course row">{this.show_course(ListCourse)}</div>
        <div className="List_page">
          {this.state.soPage === 1 ? (
            ""
          ) : (
            <span className="prev onlist" onClick={this.prev}>
              <i className="fa fa-angle-double-left"></i>
            </span>
          )}

          <ul className="pagination">{this.cardPage(so_page, ListCourse)}</ul>
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
    let min = (soPage - 1) * 8;
    let max = soPage * 8;

    return ListCourse.map((item, index) => {
      if (index < max && index >= min) {
        return (
          <div
            data-aos={index < 3 ? "fade-up" : "fade-up"}
            className="col-3 "
            key={index}
          >
            <div className="item-card ">
              <ItemCard course={item} id={index} ID={this.props.tab.ten} />
            </div>
          </div>
        );
      }
    });
  };
  chiapage = data => {
    let so = data.index + 1;
    this.setState({
      soPage: so
    });
  };
  cardPage = (data, ListCourse) => {
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
    return <div className="Courses_Card">{this.renderhtml()}</div>;
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
export default connect(mapStateToProps, mapDispatchToProps)(cources_card);
