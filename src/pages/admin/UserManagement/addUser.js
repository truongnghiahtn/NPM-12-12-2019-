import React, { Component, Fragment } from "react";

export default class AddUser extends Component {
  render() {
    return (
      <Fragment>
        <form>
          <div className="form-group">
            <label htmlFor="username">a</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              placeholder="Fullname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add user
          </button>
        </form>
      </Fragment>
    );
  }
}
