import React from "react";
import * as action from "../../redux/action/index";
import { connect } from "react-redux";

import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import TuneIcon from "@material-ui/icons/Tune";
import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import Badge from "../Badge/Badge";

import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import $ from "jquery";

const Popover = props => {
  let { course, id, ID, historyListCourse } = props;
  const [state, setState] = React.useState("unregistered");
  const [heart, setHeart] = React.useState(false);

  React.useEffect(() => {
    if (historyListCourse && course) {
      let index = historyListCourse.findIndex(
        item => item.maKhoaHoc === course.maKhoaHoc
      );

      if (index !== -1) {
        setState("registered");
      }
    }
  }, [props.historyListCourse]);

  React.useEffect(() => {
    let index = props.cart.findIndex(
      item => item.maKhoaHoc === course.maKhoaHoc
    );
    if (index !== -1) {
      setState("register");
    }
  }, [props.cart]);

  const handleClick = () => {
    setHeart(true);
  };

  return (
    <UncontrolledPopover
      trigger="hover"
      placement="right"
      target={"Popover-" + ID + id}
      delay={{ hide: 50 }}
      modifiers={{ offset: { offset: "0, 5px" } }}
    >
      <div className="popover_header">
        <div
          className="d-flex justify-content-between"
          style={{ padding: "5px 0" }}
        >
          <div className="-avatar">
            <img src="/img/avatar.png" alt="" />
            <p>Demo Instructor</p>
          </div>
          <div className="-lastupdated">Last updated {course.ngayTao}</div>
        </div>
        <PopoverHeader>
          <Link to={`/chi-tiet-khoa-hoc/${course.maKhoaHoc}`}>
            {course.tenKhoaHoc}
          </Link>
        </PopoverHeader>
        <div className="popover_badge -with-content">
          <Badge />
          <span className="content-info">
            <span>
              in
              <a href="true"> {course.danhMucKhoaHoc.maDanhMucKhoahoc} </a>
            </span>
            | Development
          </span>
        </div>
        <div className="course-info">
          <div className="e-icon">
            <i>
              <FormatListBulletedOutlinedIcon />
            </i>
            5 lectures
          </div>
          <div className="e-icon">
            <i>
              <QueryBuilderOutlinedIcon />
            </i>
            10 houres
          </div>
          <div className="e-icon">
            <i>
              <TuneIcon />
            </i>
            All levels
          </div>
        </div>
      </div>
      <PopoverBody className="popover_body">
        <div className="description">{course.moTa}</div>
        <div className="description-info">
          With no prior experience, you will have the opportunity to walk
          through hands-on examples with Hadoop and Spark frameworks, two of the
          most common ...
        </div>
        <CardActions className="popover_cart">
          {state === "registered" ? (
            <Button className="cart-btn -disabled" variant="outlined" disabled>
              This course has been registered
            </Button>
          ) : state === "register" ? (
            <Button
              className="cart-btn -go"
              onClick={() => props.history.push("/gio-hang")}
            >
              Go to cart
            </Button>
          ) : (
            <Button
              className="cart-btn -add"
              onClick={() => {
                props.addToCart(course);
              }}
            >
              Add to cart
            </Button>
          )}
        </CardActions>

        <div className="d-flex justify-content-between align-items-center heart">
          <IconButton
            className={heart ? "cart-heart heart--color" : "cart-heart"}
            aria-label="add to favorites"
            onClick={() => handleClick()}
          >
            <FavoriteIcon />
          </IconButton>
          <div className="fee">${course.fee.toFixed(2)}</div>
        </div>
      </PopoverBody>
    </UncontrolledPopover>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.khoaHocReducer.cart,
    historyListCourse: state.formReducer.historyListCourse
  };
};

const mapDispatchToprops = dispatch => {
  return {
    addToCart: khoaHoc => {
      dispatch(action.actAddToCart(khoaHoc));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(withRouter(Popover));
