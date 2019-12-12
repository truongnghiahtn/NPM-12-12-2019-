import React, { useState } from "react";
import * as action from "./../../../../redux/action/index";
import { connect } from "react-redux";
import UpdateUser from "./../updateUser";

function WithModal(Component) {
  return function(props) {
    let { status } = props;
    return (
      <div>
        <div
          className="modal fade"
          id="modelUser"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelUser"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                {status ? (
                  <h5 className="modal-title">Add User</h5>
                ) : (
                  <h5 className="modal-title">Update User</h5>
                )}
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <Component {...props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default WithModal;
