import React, { Component } from "react";

export default class dashboard_2 extends Component {
  componentDidMount() {
    var chart = document.getElementById("myChart");
    window.Chart.defaults.global.animation.duration = 2000; // Animation duration
    window.Chart.defaults.global.title.display = false; // Remove title
    window.Chart.defaults.global.title.text = "Chart"; // Title
    window.Chart.defaults.global.title.position = "bottom"; // Title position
    window.Chart.defaults.global.defaultFontColor = "#999"; // Font color
    window.Chart.defaults.global.defaultFontSize = 10; // Font size for every label

    // Chart.defaults.global.tooltips.backgroundColor = '#FFF'; // Tooltips background color
    window.Chart.defaults.global.tooltips.borderColor = "white"; // Tooltips border color
    window.Chart.defaults.global.legend.labels.padding = 0;
    window.Chart.defaults.scale.ticks.beginAtZero = true;
    window.Chart.defaults.scale.gridLines.zeroLineColor =
      "rgba(255, 255, 255, 0.1)";
    window.Chart.defaults.scale.gridLines.color = "rgba(255, 255, 255, 0.02)";

    window.Chart.defaults.global.legend.display = false;

    var myChart = new window.Chart(chart, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "Jul"],
        datasets: [
          {
            label: "Lost",
            fill: false,
            lineTension: 0,
            data: [45, 25, 40, 20, 45, 20],
            pointBorderColor: "#4bc0c0",
            borderColor: "#4bc0c0",
            borderWidth: 2,
            showLine: true
          },
          {
            label: "Succes",
            fill: false,
            lineTension: 0,
            startAngle: 2,
            data: [20, 40, 20, 45, 25, 60],
            // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
            backgroundColor: "transparent",
            pointBorderColor: "#ff6384",
            borderColor: "#ff6384",
            borderWidth: 2,
            showLine: true
          }
        ]
      }
    });
    //  Chart ( 2 )

    var Chart2 = document.getElementById("myChart2").getContext("2d");
    var chart = new window.Chart(Chart2, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "test",
          "test",
          "test",
          "test"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 79, 116)",
            borderWidth: 2,
            pointBorderColor: false,
            data: [5, 10, 5, 8, 20, 30, 20, 10],
            fill: false,
            lineTension: 0.4
          },
          {
            label: "Month",
            fill: false,
            lineTension: 0.4,
            startAngle: 2,
            data: [20, 14, 20, 25, 10, 15, 25, 10],
            // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
            backgroundColor: "transparent",
            pointBorderColor: "#4bc0c0",
            borderColor: "#4bc0c0",
            borderWidth: 2,
            showLine: true
          },
          {
            label: "Month",
            fill: false,
            lineTension: 0.4,
            startAngle: 2,
            data: [40, 20, 5, 10, 30, 15, 15, 10],
            // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
            backgroundColor: "transparent",
            pointBorderColor: "#ffcd56",
            borderColor: "#ffcd56",
            borderWidth: 2,
            showLine: true
          }
        ]
      },

      // Configuration options
      options: {
        title: {
          display: false
        }
      }
    });
  }

  render() {
    return (
      <div className="dashboard_2 container ">
        <section id="contents ">
          <div className="welcome">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="content">
                    <h2>Welcome to Dashboard</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="statistics">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <div className="box">
                    <i className="fa fa-envelope fa-fw bg-primary" />
                    <div className="info">
                      <h3>1,245</h3> <span>Emails</span>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <i className="fa fa-file fa-fw danger" />
                    <div className="info">
                      <h3>34</h3> <span>Projects</span>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <i className="fa fa-users fa-fw success" />
                    <div className="info">
                      <h3>5,245</h3> <span>Users</span>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="charts">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="chart-container">
                    <h3>Chart</h3>
                    <canvas id="myChart" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="chart-container">
                    <h3>Chart2</h3>
                    <canvas id="myChart2" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="admins">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <div className="box">
                    <h3>Admins:</h3>
                    <div className="admin">
                      <div className="img">
                        <img
                          src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148906966/small/1501685402/enhance"
                          alt="admin"
                        />
                      </div>
                      <div className="info">
                        <h3>Joge Lucky</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="admin">
                      <div className="img">
                        <img
                          src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907137/small/1501685404/enhance"
                          alt="admin"
                        />
                      </div>
                      <div className="info">
                        <h3>Joge Lucky</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="admin">
                      <div className="img">
                        <img
                          src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907019/small/1501685403/enhance"
                          alt="admin"
                        />
                      </div>
                      <div className="info">
                        <h3>Joge Lucky</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box">
                    <h3>Moderators:</h3>
                    <div className="admin">
                      <div className="img">
                        <img
                          src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907114/small/1501685404/enhance"
                          alt="admin"
                        />
                      </div>
                      <div className="info">
                        <h3>Joge Lucky</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="admin">
                      <div className="img">
                        <img
                          src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907086/small/1501685404/enhance"
                          alt="admin"
                        />
                      </div>
                      <div className="info">
                        <h3>Joge Lucky</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="admin">
                      <div className="img">
                        <img
                          src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance"
                          alt="admin"
                        />
                      </div>
                      <div className="info">
                        <h3>Joge Lucky</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="statis text-center">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <div className="box bg-primary">
                    <i className="fa fa-eye" />
                    <h3>5,154</h3>
                    <p className="lead">Page views</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box danger">
                    <i className="fa fa-user-o" />
                    <h3>245</h3>
                    <p className="lead">User registered</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box warning">
                    <i className="fa fa-shopping-cart" />
                    <h3>5,154</h3>
                    <p className="lead">Product sales</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box success">
                    <i className="fa fa-handshake-o" />
                    <h3>5,154</h3>
                    <p className="lead">Transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}
