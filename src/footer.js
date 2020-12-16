import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

function Footer(props) {
  return (
    <footer
      className="page-footer #0277bd light-blue darken-3"
      style={{ marginTop: "3%" }}
    >
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <p className="grey-text text-lighten-4">
              Developed by Daniel Cunha
            </p>
            <a
              className="grey-text text-lighten-3"
              href="https://github.com/DanielCunha94/portfolio"
              target="_black"
            >
              GITHUB Link
            </a>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Libraries/Frameworks</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://reactjs.org/"
                  target="_black"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.npmjs.com/package/react-particles-js"
                  target="_black"
                >
                  React-particles-js
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://materializecss.com/"
                  target="_black"
                >
                  Materializecss
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright #01579b light-blue darken-4">
        <div className="container">2020</div>
      </div>
    </footer>
  );
}
export default Footer;
