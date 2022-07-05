import logo from './logo.svg';
import './App.css';
import React from 'react';
import ThemePicker from "./ThemePicker";
import ButtonContainer from "./Buttoncontainer"
import DarkmodeSettings from "./imgs/DarkmodeSettings.png";
import LightmodeSettings from "./imgs/LightmodeSettings.png";
import LightmodeSave from "./imgs/LightmodeSave.png";
import DarkmodeSave from "./imgs/DarkmodeSave.png";
import LightmodeRefresh from "./imgs/LightmodeRefresh.png";
import DarkmodeRefresh from "./imgs/DarkmodeRefresh.png";



class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        userName: "",
        userID: -1,
      },
      users: {},
      theme: "Darkmode",
      loggedIn: false,
    };

    
    this.replaceClasses = this.replaceClasses.bind(this); // This replaces the theme related classes
    // of all affected elements with one specific theme class
    
    document.body.style.backgroundColor = "rgb(100, 100, 100)";
  }


  changeTheme() {
    this.props.replaceClasses(this.props.name);
    document.body.style.background = this.backgrounds[this.props.name];
    let containers = document.getElementsByClassName("container");
    for (let i = 0; i < containers.length; i++) {
      let images = containers[i].getElementsByTagName("img");
      images[0].src =
        this.props.name === "Darkmode" || this.props.name === "VisionMode"
          ? DarkmodeSettings
          : LightmodeSettings;
      if (images.length > 1) {
        for (let n = 1; n < images.length; n++) {
          if (images[n].alt === "Save") {
            images[n].src =
              this.props.name === "ColorblindMode"
                ? ""
                : this.props.name === "Darkmode" ||
                  this.props.name === "VisionMode"
                  ? DarkmodeSave
                  : LightmodeSave;
          } else if (images[n].alt === "Refresh") {
            images[n].src =
              this.props.name === "ColorblindMode"
                ? ""
                : this.props.name === "Darkmode" ||
                  this.props.name === "VisionMode"
                  ? DarkmodeRefresh
                  : LightmodeRefresh;
          }
        }
      }
    }
  }
  render() {
    return (
      <div className={"Darkmode"}>
        <ButtonContainer className={this.state.theme + " Settings"}>
          <ThemePicker
            currTheme={this.state.theme}
            className={"Button"}
            replaceClasses={this.replaceClasses}
            changeTheme={this.changeTheme}
            name={"Darkmode"}
          ></ThemePicker>
          <ThemePicker
            currTheme={this.state.theme}
            className={"Button"}
            replaceClasses={this.replaceClasses}
            changeTheme={this.changeTheme}
            name={"Lightmode"}
          ></ThemePicker>
          <ThemePicker
            currTheme={this.state.theme}
            className={"Button"}
            replaceClasses={this.replaceClasses}
            changeTheme={this.changeTheme}
            name={"ColorblindMode"}
          ></ThemePicker>
          <ThemePicker
            currTheme={this.state.theme}
            className={"Button"}
            replaceClasses={this.replaceClasses}
            changeTheme={this.changeTheme}
            name={"VisionMode"}
          ></ThemePicker>
        </ButtonContainer>
        <div className={"infoMessage hidden"} id={"infoMessage"}></div>
      </div>
    );
  }
}

export default App;
