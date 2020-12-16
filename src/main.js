import React, { Component } from "react";
import Profile from "./profile";
import Project from "./project";
import Particles from "react-particles-js";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="container1 section #01579b light-blue darken-4
      "
      >
        <div id="profile">
          <Profile />
        </div>
        <div className="project">
          <Project />
        </div>
        <div className="project">
          <Project />
        </div>
        <div className="project">
          <Project />
        </div>
        <div className="project">
          <Project />
        </div>
        <Particles id="particles-js" params={this.props.params} />
      </div>
    );
  }
}
export default Main;
