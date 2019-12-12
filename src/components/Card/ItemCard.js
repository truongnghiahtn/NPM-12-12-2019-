import React, { Component, Fragment } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

import { withRouter } from "react-router-dom";
import Popover from "../Popover/Popover";

class ItemCard extends Component {
  delayRoute = e => {
    e.preventDefault();
    localStorage.setItem("course", JSON.stringify(this.props.course));
    setTimeout(() => {
      this.props.history.push(
        `/chi-tiet-khoa-hoc/${this.props.course.maKhoaHoc}`
      );
    }, 250);
  };

  render() {
    let { course, id, ID } = this.props;
    let d = new Date();
    let ngayTao = new Date(
      course.ngayTao.slice(6),
      course.ngayTao.slice(3, 5) - 1,
      course.ngayTao.slice(0, 2),
      0,
      0,
      0,
      0
    );
    let tDay = Math.abs(d - ngayTao);
    let nDay = Math.round(tDay / (1000 * 60 * 60 * 24));

    return (
      <Fragment>
        <Card
          className="card"
          id={"Popover-" + ID + id}
          onClick={this.delayRoute}
        >
          <CardActionArea>
            <div style={{ cursor: "default", pointerEvents: "none" }}>
              {course.fee >= 50 && nDay >= 20 ? (
                <div className="wrapper-badge">
                  <div className="badge">
                    Best
                    <i />
                    <i />
                  </div>
                </div>
              ) : course.fee < 50 && course.luotXem > 150 ? (
                <div className="wrapper-badge">
                  <div className="badge badge--hot">
                    Hot
                    <i />
                    <i />
                  </div>
                </div>
              ) : nDay < 30 ? (
                <div className="wrapper-badge">
                  <div className="badge badge--new">
                    New
                    <i />
                    <i />
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="card-top">
                <CardMedia
                  image={course.hinhAnh}
                  className="card-img-top img-fluid"
                  alt="#error"
                  title={course.biDanh}
                />
                <div className="card__overlay" />
              </div>
              <hr className="m-0" />
              <div className="card-body">
                <h1 className="card-title">
                  <span>{course.tenKhoaHoc}</span>
                </h1>
                <p className="card-text">{course.moTa}</p>
                <div className="star">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                  <span>{Math.floor(Math.random() * 9 + 41) / 10}</span>
                  <span>
                    (
                    {Math.floor(Math.random() * 19000 + 1000)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                    )
                  </span>
                </div>
                <div className="price">
                  <s>
                    <span>$199.99</span>
                  </s>
                  <span>${course.fee.toFixed(2)}</span>
                  <LocalOfferIcon />
                </div>
              </div>
            </div>
          </CardActionArea>
        </Card>
        <Popover course={course} id={id} ID={ID} />
      </Fragment>
    );
  }
}

export default withRouter(ItemCard);
