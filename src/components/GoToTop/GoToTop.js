import React from "react";
import Button from "@material-ui/core/Button";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

export default class GoToTop extends React.Component {
  state = {
    thePosition: 0
  };
  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    window.scrollTo(0, 0);
  }

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  renderGoTopIcon = () => {
    if (this.state.thePosition) {
      return (
        <Button className="go-top" onClick={this.scrollToTop}>
          <ArrowUpwardIcon />
        </Button>
      );
    }
  };
  render() {
    return <React.Fragment>{this.renderGoTopIcon()}</React.Fragment>;
  }
}
