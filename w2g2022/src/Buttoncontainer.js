import React from "react";
import "./ButtonContainer.css";
import "./Themes.css";


class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: true };

    this.ExpandContainer = this.ExpandContainer.bind(this);
  }

  ExpandContainer(e) {
    e.preventDefault();
    if (e.target.localName === "img" && e.target.alt === "Settings") {
      this.setState((state) => ({
        expanded: !state.expanded,
      }));
    }
  }

  render() {
    return (
      <div
        onClick={this.ExpandContainer}
        className={
          this.props.className +
          " container " +
          (this.state.expanded ? "open" : "closed") +
          "Container"
        }
      >
        <img
          src={
            this.props.className.indexOf("Darkmode") !== -1 ||
            this.props.className.indexOf("VisionMode") !== -1
              ? DarkmodeSettings
              : LightmodeSettings
          }
          className={"Button"}
          alt="Settings"
        ></img>
        {this.props.children}
      </div>
    );
  }
}

export default ButtonContainer;