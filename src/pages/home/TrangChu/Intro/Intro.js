import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import ItemCart from "./../../../../components/ItemCart";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  renderFilterList = () => {
    let { filterListCourse } = this.props;
    if (filterListCourse && filterListCourse.length > 0) {
      return filterListCourse.map((item, index) => {
        return <ItemCart khoaHoc={item} key={index} />;
      });
    }
  };

  handleOnChange = event => {
    let target = event.target;
    let keyword = target.value;
    this.onFilter(keyword);
    this.setState({
      keyword
    });
  };

  onFilter = keyword => {
    let { listCourse } = this.props;
    if (listCourse && listCourse.length > 0) {
      let filterList = listCourse.filter(item => {
        return (
          item.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        );
      });
      this.props.onFilterCourses(filterList);
    }
  };
  render() {
    let { keyword } = this.state;
    let { filterListCourse } = this.props;
    return (
      <div className="intro" style={{ backgroundImage: 'url("./img/5.jpg")' }}>
        <div className="container">
          <div className="intro_content">
            <h3>LEARN ONLINE COURSES</h3>
            <h1>Advance Your Career.</h1>
            <p className="sub-title">
              <span className="number">6,178</span> courses in Business,
              Technology and Creative Skills taught by industry experts.
            </p>

            <div className="col-6 mx-auto search">
              <div className="input-group p-3 bg-white">
                <input
                  type="text"
                  className="form-control input"
                  placeholder="What do you want to learn?"
                  required
                  onChange={event => {
                    this.handleOnChange(event);
                  }}
                />
                <div className="input-group-append">
                  <button className="btn btn-info" type="submit">
                    Search
                    <i className="ti-angle-right small" />
                  </button>
                  
                </div>
                {keyword !== "" ? (
                  <div className="list-filter">
                    {filterListCourse.length > 0 ? (
                      this.renderFilterList()
                    ) : (
                      <div className="item find">
                        <p className="text-center">No course found</p>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="buttons">
              <button className="btn btn-success start">
                Start Free Trial
              </button>
              <button className="btn become">Become An Instructor</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listCourse: state.khoaHocReducer.listCourse,
    filterListCourse: state.khoaHocReducer.filterListCourse
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterCourses: filterListCourse => {
      dispatch(action.actOnFilter(filterListCourse));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
