import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import ProfilePic from "./profilePic";
import "./App.css";
//responsive NavBar with a Side bar for Mobile devices

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems, {});
      var elem = document.querySelectorAll(".dropdown-trigger");
      M.Dropdown.init(elem, {
        hover: true,
        coverTrigger: false,
      });
    });
  }

  render() {
    return (
      <div>
        <link
          href="http://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper #ff6f00 amber darken-4">
              <a href="#" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <a
                href="#"
                className="brand-logo flow-text"
                style={{ paddingLeft: "1%" }}
              >
                Daniel
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="#profile">About me</a>
                </li>
                <li>
                  <a
                    className="dropdown-trigger"
                    href="#"
                    data-target="dropdown"
                  >
                    Projects
                    <i className="material-icons right">arrow_drop_down</i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <ul id="dropdown" className="dropdown-content">
            <li>
              <a className="#0277bd light-blue-text darken-3" href="#movieapp">
                Movie App
              </a>
            </li>
            <li className="divider"></li>
            <li>
              <a
                className="#0277bd light-blue-text darken-3"
                href="#landingPage"
              >
                Landing Page
              </a>
            </li>
            <li className="divider"></li>
            <li>
              <a className="#0277bd light-blue-text darken-3" href="#pong">
                Pong
              </a>
            </li>
            <li className="divider"></li>
            <li>
              <a className="#0277bd light-blue-text darken-3" href="#snake">
                Snake
              </a>
            </li>
          </ul>
          <a href="#" data-activates="slide-out"></a>
        </div>
        <ul id="slide-out" className="sidenav">
          <li style={{ paddingTop: "5px" }}>
            <ProfilePic width="100" />
            <p
              className="#ff6f00 amber-text darken-4 flow-text"
              style={{ textAlign: "center" }}
            >
              Daniel
            </p>
          </li>
          <li>
            <a className="#0277bd light-blue-text darken-3" href="#profile">
              About me
            </a>
          </li>
          <li className="divider"></li>
          <li>
            <a className="#0277bd light-blue-text darken-3" href="#movieapp">
              Movie App
            </a>
          </li>
          <li className="divider"></li>
          <li>
            <a className="#0277bd light-blue-text darken-3" href="#landingPage">
              Landing Page
            </a>
          </li>
          <li className="divider"></li>
          <li>
            <a className="#0277bd light-blue-text darken-3" href="#pong">
              Pong
            </a>
          </li>
          <li className="divider"></li>
          <li>
            <a className="#0277bd light-blue-text darken-3" href="#snake">
              Snake
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
