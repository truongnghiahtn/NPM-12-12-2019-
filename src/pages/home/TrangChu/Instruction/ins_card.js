import React, { Component } from "react";

export default class ins_card extends Component {
  render() {
    let { Detail } = this.props;
    return (
      <div>
        <div className="card ">
          <img src={Detail.img} alt="" />
          <div className="detail-card ">
            <h3>{Detail.name}</h3>
            <p>{Detail.skill}</p>
          </div>
          <div className="icon-card">
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
          </div>

          <div className="info-card">
            <span className="view">
                <i className="fa fa-eye" aria-hidden="true" /> {Detail.view}
            </span>
            <div className="info-icon">
              <div className="face">
                <a href="/nghia">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </div>
              <div className="mail">
                <a href="/nghia">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>
              </div>
              <div className="twitter">
                <a href="/nghia">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </div>
              <div className="youtube">
                <a href="/nghia">
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="card-footer">
              <p>
                <i className="fa fa-play-circle" aria-hidden="true" />{" "}
                {Detail.cours} courses
              </p>
              <p>
                <i className="fa fa-users" aria-hidden="true" />{" "}
                {Detail.participants} student
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
