/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Events = () => {
  const pBodyStyle = {
    paddingTop: "20px",
    fontSize: "14px",
    color: "#656565",
    lineHeight: "25px",
    borderTop: "none",
    position: "relative"
  };

  const pStyle = {
    padding: "10px 20px",
    margin: "0",
    background: "#f1f1e6",
    borderRadius: "15px"
  };

  let d = new Date();
  let dEvent = new Date("12/24/2019");
  let nDate = Math.abs(dEvent - d) / 1000;

  React.useEffect(() => {
    window.$("#countdown").FlipClock(nDate, {
      clockFace: "DailyCounter",
      countdown: true
    });
    new window.WOW().init();

    window.scrollTo({ top: 0});
  }, []);

  return (
    <div className="event">
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header-banner">
                <h1>
                  NPM <span>conference 2019</span>
                </h1>
                <h4>December, 30, 2019</h4>
                <h5>
                  Hotel Figueroa, 99 Figueroa Street Los Angeles, California
                </h5>
                <div className="countdown" id="countdown"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-area" id="about">
        <img className="left-img" src="img/left-img.png" alt="" />
        <img className="right-img" src="img/right-img.png" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-col">
                <h3>
                  Few words about <span>NPM</span> conference for Freelancer
                </h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-col">
                <div className="panel-group" id="accordion">
                  <div className="panel">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          data-target="#collapseOne"
                        >
                          how can i be a freelancer?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-parent="#accordion"
                    >
                      <div style={pBodyStyle}>
                        <p style={pStyle}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent nisl lorem, dictum id pellentesque at,
                          vestibulum ut arcu. Curabitur erat libero.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          data-target="#collapseTwo"
                        >
                          What Is web design?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div style={pBodyStyle}>
                        <p style={pStyle}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent nisl lorem, dictum id pellentesque at,
                          vestibulum ut arcu. Curabitur erat libero.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          data-target="#collapseThree"
                        >
                          what is web development?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div style={pBodyStyle}>
                        <p style={pStyle}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent nisl lorem, dictum id pellentesque at,
                          vestibulum ut arcu. Curabitur erat libero.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          data-target="#collapseFour"
                        >
                          what is domain and hosting?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div style={pBodyStyle}>
                        <p style={pStyle}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent nisl lorem, dictum id pellentesque at,
                          vestibulum ut arcu. Curabitur erat libero.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          data-target="#collapseFive"
                        >
                          what is web server?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div style={pBodyStyle}>
                        <p style={pStyle}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent nisl lorem, dictum id pellentesque at,
                          vestibulum ut arcu. Curabitur erat libero.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="speakers-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>
                  Our honorable <span>Speakers</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-sx-6">
              <div
                className="speaker-col wow fadeInLeft animated"
                data-wow-duration=".5s"
                data-wow-delay="0s"
              >
                <div className="speaker-box">
                  <div className="pic">
                    <img src="img/speaker/1.jpg" alt="" />
                    <ul className="social">
                      <li>
                        <a>
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="speaker-info">
                  <h4>Jon Moris</h4>
                  <span>Founder & CEO, GM IT</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-sx-6">
              <div
                className="speaker-col wow fadeInLeft animated"
                data-wow-duration=".5s"
                data-wow-delay=".2s"
              >
                <div className="speaker-box">
                  <div className="pic">
                    <img src="img/speaker/2.jpg" alt="" />
                    <ul className="social">
                      <li>
                        <a>
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="speaker-info">
                  <h4>Maria Alves</h4>
                  <span>Founder & CEO, MR Web</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-sx-6">
              <div
                className="speaker-col wow fadeInLeft animated"
                data-wow-duration=".5s"
                data-wow-delay=".2s"
              >
                <div className="speaker-box">
                  <div className="pic">
                    <img src="img/speaker/3.jpg" alt="" />
                    <ul className="social">
                      <li>
                        <a>
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="speaker-info">
                  <h4>Cris Moris</h4>
                  <span>CEO, Envato</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-sx-6">
              <div
                className="speaker-col wow fadeInLeft animated"
                data-wow-duration=".5s"
                data-wow-delay=".2s"
              >
                <div className="speaker-box">
                  <div className="pic">
                    <img src="img/speaker/4.jpg" alt="" />
                    <ul className="social">
                      <li>
                        <a>
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="speaker-info">
                  <h4>Tomas Alfa</h4>
                  <span>Founder & CEO, Upwork</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-sx-6">
              <div
                className="speaker-col wow fadeInLeft animated"
                data-wow-duration=".5s"
                data-wow-delay="0s"
              >
                <div className="speaker-box">
                  <div className="pic">
                    <img src="img/speaker/5.jpg" alt="" />
                    <ul className="social">
                      <li>
                        <a>
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="speaker-info">
                  <h4>Julio Alfa</h4>
                  <span>Web Developer, MR IT</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-sx-6">
              <div
                className="speaker-col wow fadeInLeft animated"
                data-wow-duration=".5s"
                data-wow-delay=".2s"
              >
                <div className="speaker-box">
                  <div className="pic">
                    <img src="img/speaker/6.jpg" alt="" />
                    <ul className="social">
                      <li>
                        <a>
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="speaker-info">
                  <h4>Max Nixon</h4>
                  <span>Web Designer, Themeforest</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-sx-6">
              <div
                className="speaker-col wow fadeInLeft animated"
                data-wow-duration=".5s"
                data-wow-delay=".2s"
              >
                <div className="speaker-box">
                  <div className="pic">
                    <img src="img/speaker/7.jpg" alt="" />
                    <ul className="social">
                      <li>
                        <a>
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="speaker-info">
                  <h4>Ros Tailor</h4>
                  <span>Founder & CEO, GM IT</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-sx-6">
              <div
                className="speaker-col wow fadeInLeft animated"
                data-wow-duration=".5s"
                data-wow-delay=".2s"
              >
                <div className="speaker-box">
                  <div className="pic">
                    <img src="img/speaker/8.jpg" alt="" />
                    <ul className="social">
                      <li>
                        <a>
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="speaker-info">
                  <h4>Jequlin Oliva</h4>
                  <span>Founder & CEO, Fiverr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-8">
              <div className="newsletter-col">
                <h4>Join our mailing list and never miss an update!</h4>
                <form action="#">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                    />
                    <div className="input-group-append">
                      <button className="btn" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="footer-col hi-icon-wrap">
                <a className="hi-icon">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="hi-icon">
                  <i className="fa fa-twitter"></i>
                </a>
                <a className="hi-icon">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a className="hi-icon">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a className="hi-icon">
                  <i className="fa fa-google-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
