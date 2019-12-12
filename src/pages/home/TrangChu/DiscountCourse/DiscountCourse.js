import React from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

const DiscountCourse = props => {
  let d = new Date();
  let dSale = new Date("12/24/2019");
  let nDate = Math.abs(dSale - d) / 1000;
  React.useEffect(() => {
    window.$("#clock").FlipClock(nDate, {
      clockFace: "DailyCounter",
      countdown: true
    });
  }, []);
  return (
    <div className="discount">
      <div className="container">
        <div className="row discount__content">
          <div className="col-sm-7 discount__detail discount__content-detail">
            <div className="discount__header">
              <div className="-title">SCRIBBLE STARTUP COURSE:</div>
              <div className="-save">SAVE UP TO 30% + FREE REACTJS</div>
            </div>
            <div className="discount__body">
              <div className="t-body">
                This course is the first of a two-course sequence: Introduction
                to Computer Science and Programming Using Python, and
                Introduction to Computational Thinking and Data Science.
              </div>
              <div className="time-remaining" id="time-remaining">
                <div className="time-remaining__header">
                  <span className="time-remaining__header-line"></span>
                  <h4>HURRY UP! IT'S ONLY LEFT</h4>
                  <span className="time-remaining__header-line"></span>
                </div>
                <div className="clock" id="clock"></div>
              </div>
            </div>
            <div className="sign-up">
              <Button
                className="btn-sign-up"
                onClick={() => props.history.push("/khoa-hoc")}
              >
                Sign up now
              </Button>
            </div>
          </div>
          <div className="col-sm-5 discount__img discount__content-img d-flex align-items-center justify-content-center">
            <img
              className="img-fluid"
              src="https://miro.medium.com/max/1121/1*baMG8GKXPjYjfY-fVTHAzg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DiscountCourse);
