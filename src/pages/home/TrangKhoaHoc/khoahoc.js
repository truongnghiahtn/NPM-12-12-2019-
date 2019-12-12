import React, { Component } from "react";
import Banner from "./banner_khoahoc";
import TabKhoahoc from "./tab_khoahoc";
import FilterKhoahoc from "./Filter_khoahoc";

export default class khoahoc extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  render() {
    return (
      <div className="Page_KhoaHoc">
        <Banner />
        <TabKhoahoc />
        <FilterKhoahoc />
      </div>
    );
  }
}
