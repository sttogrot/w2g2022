import React from "react";
import "./ThemePicker.css";
import "./Themes.css";

class ThemePicker extends React.Component {
  constructor(props) {
    super(props);
    this.backgrounds = {
      Darkmode: "rgb(100, 100, 100)",
      Lightmode: "rgb(242, 242, 242)",
      VisionMode: "rgb(220, 150, 470)",
      ColorblindMode: "rgb(242, 242, 242)",
    };
    this.modeNames = {
      Darkmode: "Night",
      Lightmode: "Day",
      VisionMode: "Zoom",
      ColorblindMode: "Colorblind",
    };
    this.changeTheme = this.props.changeTheme.bind(this);
  }

  render() {
    return (
      <input
        type="button"
        name={this.props.name}
        onClick={this.changeTheme}
        value={this.modeNames[this.props.name]}
        className={this.props.currTheme + " Button"}
      ></input>
    );
  }
}

export default ThemePicker;