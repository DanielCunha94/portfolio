import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

function Btn(props) {
  return (
    <a
      className="waves-effect waves-light btn  tooltipped #eceff1 blue-grey lighten-5"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      data-position="top"
      data-tooltip={props.tooltip}
    >
      <img src={props.src} alt="" style={{ width: "32px", heigth: "32px" }} />
    </a>
  );
}
export default Btn;
