import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import { withRouter } from "react-router-dom";

import ItemCard from "../../../../components/Card/ItemCard";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Dshistory: [],
      soPage: 1
    };
  }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.props.getHistory(user);
      this.props.getListCourse();
    } else {
      this.props.history.push("/");
    }
    
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.testrender();
    }
  }
  testrender = () => {
    let mang = [];
    let { historyListCourse, listCourse } = this.props;
    if (listCourse && listCourse.length > 0) {
      historyListCourse.map(item => {
        listCourse.map(item2 => {
          if (item.maKhoaHoc === item2.maKhoaHoc) {
            mang.push(item2);
          }
        });
      });
    }
    this.setState({
      Dshistory: mang
    });
  };
  renderPagehtml = () => {
    let { Dshistory } = this.state;
    let so_page = Dshistory.length / 3;
    let songuyen = parseInt(Dshistory.length / 3);
    if (so_page === songuyen) {
      so_page = songuyen;
    } else {
      so_page = songuyen + 1;
    }
    return (
      <div>
        <div className="show_course row">{this.show_course(Dshistory)}</div>
        <div className="List_page">
          {this.state.soPage === 1 ? (
            ""
          ) : (
            <span className="prev onlist" onClick={this.prev}>
              <i className="fa fa-angle-double-left"></i>
            </span>
          )}

          <ul className="pagination">{this.cardPage(so_page, Dshistory)}</ul>
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
  show_course = Dshistory => {
    let { soPage } = this.state;
    let min = (soPage - 1) * 3;
    let max = soPage * 3;
    if (Dshistory && Dshistory.length > 0) {
      return Dshistory.map((item, index) => {
        if (index < max && index >= min) {
          return (
            <div className="col-4" key={index}>
              <div className="item-history">
                <ItemCard
                  course={item}
                  id={index}
                  ID={Math.floor(Math.random() * 100 + 1)}
                />
              </div>
            </div>
          );
        }
      });
    }
  };
  chiapage = data => {
    let so = data.index + 1;
    this.setState({
      soPage: so
    });
  };
  cardPage = (data, Dshistory) => {
    if (Dshistory && Dshistory.length > 0) {
      return Dshistory.map((item, index) => {
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
            </li>
          );
        }
      });
    }
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
    return (
      <div className="history-page">
        <div className="courses_Card Courses_Card">{this.renderPagehtml()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    historyListCourse: state.formReducer.historyListCourse,
    listCourse: state.khoaHocReducer.listCourse
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHistory: user => {
      dispatch(action.actGetHistory(user));
    },
    getListCourse: () => {
      dispatch(action.actGetListCourseAPI());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(History));
