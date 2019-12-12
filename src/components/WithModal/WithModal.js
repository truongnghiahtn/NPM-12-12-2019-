/* import React from "react";

const WithModal = ModalComponent => WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
        data: null
      };
    }

    showModal = data => {
      this.setState({
        show: true,
        data: data
      });
    };

    showModal = data => {
      this.setState({
        show: false,
        data: data
      });
    };

    render() {
      return (
        <React.Fragment>
          <WrappedComponent showModal={this.showModal} />
          {this.state.show ? (
            <ModalComponent data={this.state.data} close={this.closeModal} />
          ) : null}
        </React.Fragment>
      );
    }
  };
};

export default WithModal;
 */

import React from "react";

const WithModal = Component => {
  return function(props) {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Title</h5>
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
    );
  };
};

export default WithModal;
