import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import ProfilePic from "./profilePic";
import Btn from "./btn";
import github from "./assets/images/GitHub-Mark-32px.png";
import linkedin from "./assets/images/LI-In-Bug.png";
import "./App.css";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".tooltipped");
      M.Tooltip.init(elems, {});
    });
  }
  render() {
    return (
      <section className="section container #fafafa grey lighten-5 z-depth-2 hoverable">
        <link
          href="http://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <div className="row">
          <div className="col s12 m12 l6" style={{ marginBottom: "20px" }}>
            <ProfilePic width="200" />
          </div>
          <div className="col s12 m12 l6">
            <div className="row">
              <div id="location col s12" className="center-align">
                <i className="material-icons small icons-color">place</i>
                <p className="flow-text">Vila Nova de Famalicão</p>
              </div>
            </div>
            <div className="row">
              <div id="phone col s12" className="center-align">
                <i className="material-icons small icons-color">call</i>
                <p className="flow-text">+351918715154</p>
              </div>
            </div>
            <div className="row">
              <div id="email col s12" className="center-align">
                <i className="material-icons small icons-color">
                  alternate_email
                </i>
                <p className="flow-text">danielcunha94@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s3 m2 l1 offset-s3 offset-m4  offset-l4">
            <Btn
              link="https://github.com/DanielCunha94"
              tooltip="Check my Github!"
              src={github}
            />
          </div>
          <div className="col s3 m2 l1 offset-l1">
            <Btn
              link="https://www.linkedin.com/in/danielcunha94/"
              tooltip="Check my LinkedIn!"
              src={linkedin}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <p className="text">
              Welcome to my personal page. My name is Daniel Cunha and I am 26
              years old.
            </p>
            <p className="text">
              I am a recent graduate of the University of Aveiro who wants to
              work as a software developer.
            </p>
            <p className="text">
              On this page I have some of the projects that I am developing in
              my spare time, if you have any suggestions, comments or challenges
              feel free to contact me.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Profile;
