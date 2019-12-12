import React, { useState, useEffect } from "react";
import * as action from "../../../redux/action/index";
import { connect } from "react-redux";

import Badge from "../../../components/Badge/Badge";

import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ClosedCaptionOutlinedIcon from "@material-ui/icons/ClosedCaptionOutlined";
import DoneIcon from "@material-ui/icons/Done";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Button from "@material-ui/core/Button";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const ChiTietKhoaHoc = props => {
  const [state, setState] = useState({
    coupon: false,
    countUp: false,
    active: true,
    check: "unregistered"
  });

  useEffect(() => {
    let fee = JSON.parse(localStorage.getItem("course")).fee;
    let id = props.match.params.id;
    props.getDetailCourse(id, fee);

    window.scrollTo(0, 0);
  }, [props.match.params.id]);

  let { course, historyListCourse } = props;

  React.useEffect(() => {
    if (historyListCourse && course) {
      let index = historyListCourse.findIndex(
        item => item.maKhoaHoc === course.maKhoaHoc
      );

      if (index !== -1) {
        setState({ ...state, check: "registered" });
      }
    }
  }, [props.historyListCourse, course.maKhoaHoc]);

  useEffect(() => {
    let index = props.cart.findIndex(
      item => item.maKhoaHoc === course.maKhoaHoc
    );
    if (index !== -1) {
      setState({ ...state, check: "register" });
    }
  }, [props.cart, course.maKhoaHoc]);

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setState({ ...state, countUp: true, active: false });
    }
  };

  return (
    <div className="course">
      <div className="course-details container px-0">
        <div className="row pb-5">
          <div className="col-sm-12 d-flex justify-content-end gift-wishlist">
            <a className="gift-wistlist__gift" href="true">
              <span className="cardGift">
                <CardGiftcardIcon />
              </span>
              <span>Gift This Course</span>
            </a>
            <button className="gift-wistlist__wishlist btn">
              <span className="heart">
                <FavoriteBorderOutlinedIcon />
              </span>
              <span>Wishlist</span>
            </button>
          </div>
          <div className="col-sm-8 detail-info">
            <div className="detail-info__title">
              <div>{course.tenKhoaHoc}</div>
              <div>{course.moTa}</div>
            </div>

            <div className="wrapper-details d-flex align-items-center">
              <div className="wrapper__badge d-flex">
                <Badge />
              </div>
              <div className="star d-flex align-items-center">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
                <span>4.7</span>
                <span>(23,240 ratings)</span>
                <span>70,100 students enrolled</span>
              </div>
            </div>
            <div style={{ marginTop: "5px", fontSize: "15px" }}>
              <span style={{ textTransform: "capitalize" }}>
                {course.nguoiTao ? `Created by ${course.nguoiTao.hoTen}` : ""}
              </span>
              <span> Last updated {course.ngayTao}</span>
            </div>
            <div style={{ marginTop: "5px", fontSize: "15px" }}>
              <span style={{ marginRight: "10px" }}>
                <ChatBubbleOutlineOutlinedIcon /> English
              </span>
              <span>
                <ClosedCaptionOutlinedIcon /> English, French [Auto-generated]
              </span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="right-col__content">
              <div className="right-col__module">
                <div className="detail-course__img">
                  <div className="-style"></div>
                  <img src={course.hinhAnh} alt="" />
                </div>
                <div className="right-col__inner">
                  <div className="detail-course__info">
                    <div className="buy-box">
                      <div className="buy-box__element">
                        <div className="-price-discount">
                          <span>
                            {course.fee ? `$${course.fee.toFixed(2)}` : ""}
                          </span>
                        </div>
                        <div className="-price-origin">
                          <span>
                            <s>199.99</s>
                          </span>
                        </div>
                        <div className="-price-discount-percent">
                          <span>94% off</span>
                        </div>
                      </div>
                      <div className="buy-box__element--discount-expiration">
                        <div className="-icon">
                          <AlarmOnIcon />
                        </div>
                        <div className="-text">
                          <b>1 day</b> left at this price!
                        </div>
                      </div>
                      <div className="buy-box__element--add-to-cart-button">
                        {state.check === "registered" ? (
                          <Button
                            className="cart-btn -disabled"
                            variant="outlined"
                            disabled
                          >
                            This course has been registered
                          </Button>
                        ) : state.check === "register" ? (
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
                      </div>
                      <div className="buy-box__element--buy-now-button">
                        <button className="btn btn--buy btn-lg text-center">
                          Buy now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="buy-box__element buy-box__element--money-back">
                    <span className="money-back">
                      30-Day Money-Back Guarantee
                    </span>
                  </div>
                  <div className="incentives">
                    <div className="incentives__title">
                      This course includes
                    </div>
                    <ul className="incentives__list">
                      <li className="incentives__item">
                        <span>
                          <OndemandVideoIcon />
                        </span>
                        <span>28 hours on-demand video</span>
                      </li>
                      <li className="incentives__item">
                        <span>
                          <InsertDriveFileOutlinedIcon />
                        </span>
                        <span>1 article</span>
                      </li>
                      <li className="incentives__item">
                        <span>
                          <AllInclusiveIcon />
                        </span>
                        <span>Full lifetime access</span>
                      </li>
                      <li className="incentives__item">
                        <span>
                          <PhoneIphoneIcon />
                        </span>
                        <span>Access on mobile and TV</span>
                      </li>
                      <li className="incentives__item">
                        <span>
                          <CardMembershipIcon />
                        </span>
                        <span>Certificate of Completion</span>
                      </li>
                    </ul>
                  </div>
                  <div className="coupon">
                    {state.coupon ? (
                      <form className="coupon_form" id="coupon_form">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            aria-describedby="button-addon"
                            placeholder="Enter Coupon"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn"
                              type="button"
                              id="button-addon"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      </form>
                    ) : (
                      <button
                        className="coupon__btn btn btn-link"
                        id="applyCoupon"
                        onClick={() => setState({ ...state, coupon: true })}
                      >
                        Apply Coupon
                      </button>
                    )}
                  </div>
                  <div className="share">
                    <div className="share__underline"></div>

                    <div className="share__body">
                      <button className="btn btn-link">
                        <span className="e-icon">
                          <ShareIcon />
                        </span>
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-col__train">
                <div className="right-col__inner">
                  <div className="buy-for-team__title">
                    Training 5 or more people?
                  </div>
                  <p className="buy-for-team__text">
                    Get your team access to 3,500+ top Udemy courses anytime,
                    anywhere.
                  </p>
                  <a href="false" className="buy-for-team__link">
                    Try Udemy for Business
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-0">
        <div className="row">
          <div className="col-sm-8">
            <div className="what-you-get">
              <div className="what-you-get__content">
                <div className="what-you-get__title">What you'll learn</div>
                <ul className="what-you-get__items">
                  <li className="what-you-get__item">
                    <span className="what-you-get__icon">
                      <DoneIcon />
                    </span>
                    <span className="what-you-get__text">
                      Tons of modern CSS techniques to create stunning designs
                      and effects
                    </span>
                  </li>
                  <li className="what-you-get__item">
                    <span className="what-you-get__icon">
                      <DoneIcon />
                    </span>
                    <span className="what-you-get__text">
                      Tons of modern CSS techniques to create stunning designs
                      and effects
                    </span>
                  </li>
                  <li className="what-you-get__item">
                    <span className="what-you-get__icon">
                      <DoneIcon />
                    </span>
                    <span className="what-you-get__text">
                      Tons of modern CSS techniques to create stunning designs
                      and effects
                    </span>
                  </li>
                  <li className="what-you-get__item">
                    <span className="what-you-get__icon">
                      <DoneIcon />
                    </span>
                    <span className="what-you-get__text">
                      Tons of modern CSS techniques to create stunning designs
                      and effects
                    </span>
                  </li>
                  <li className="what-you-get__item">
                    <span className="what-you-get__icon">
                      <DoneIcon />
                    </span>
                    <span className="what-you-get__text">
                      Tons of modern CSS techniques to create stunning designs
                      and effects
                    </span>
                  </li>
                  <li className="what-you-get__item">
                    <span className="what-you-get__icon">
                      <DoneIcon />
                    </span>
                    <span className="what-you-get__text">
                      Tons of modern CSS techniques to create stunning designs
                      and effects
                    </span>
                  </li>
                  <li className="what-you-get__item">
                    <span className="what-you-get__icon">
                      <DoneIcon />
                    </span>
                    <span className="what-you-get__text">
                      Tons of modern CSS techniques to create stunning designs
                      and effects
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="requirement">
              <div className="requirement__title">Requirements</div>
              <ul className="requirement__list">
                <li className="requirement__item">
                  This not a beginner course — You should be confident in coding
                  HTML and CSS before taking the course
                </li>
                <li className="requirement__item">
                  Any computer and OS will work — Windows, macOS or Linux
                </li>
                <li className="requirement__item">
                  There is no need for any paid software — The text editor you
                  already have works just fine
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="rating row">
              <div className="col-sm-12 rating__title">Student feedback</div>
              <div className="col-sm-4 rating-inner justify-content-center">
                <div className="rating-col text-center">
                  <div className="rating-col__number">
                    <VisibilitySensor
                      onChange={onVisibilityChange}
                      delayedCall
                      active={state.active}
                    >
                      <CountUp
                        duration={3}
                        decimals={1}
                        start={0}
                        end={state.countUp ? 4.7 : 0}
                      />
                    </VisibilitySensor>
                  </div>
                  <div className="rating-col__text">Course Rating</div>
                  <div className="rating-col__star">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 rating-inner">
                <div className="rating-col__element">
                  <ul className="ul-list">
                    <li className="ul-list__item">
                      <span>
                        <StarIcon />
                      </span>
                      <span>5.0 Communication</span>
                    </li>
                    <li className="ul-list__item">
                      <span>
                        <StarIcon />
                      </span>
                      <span>5.0 Maecenas cursus mauris justo</span>
                    </li>
                    <li className="ul-list__item">
                      <span>
                        <StarIcon />
                      </span>
                      <span>5.0 Suspendisse sit amet</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 rating-inner">
                <div className="rating-col__element">
                  <ul className="ul-list">
                    <li className="ul-list__item">
                      <span>
                        <StarIcon />
                      </span>
                      <span>5.0 Suspendisse sit amet</span>
                    </li>
                    <li className="ul-list__item">
                      <span>
                        <StarIcon />
                      </span>
                      <span>5.0 Communication</span>
                    </li>
                    <li className="ul-list__item">
                      <span>
                        <StarIcon />
                      </span>
                      <span>5.0 Maecenas cursus mauris justo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    course: state.khoaHocReducer.course,
    cart: state.khoaHocReducer.cart,
    historyListCourse: state.formReducer.historyListCourse
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetailCourse: (id, fee) => {
      dispatch(action.actGetDetailCourseAPI(id, fee));
    },
    addToCart: course => {
      dispatch(action.actAddToCart(course));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChiTietKhoaHoc);
