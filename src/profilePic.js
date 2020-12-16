import "materialize-css/dist/css/materialize.min.css";
import logo from "./assets/images/IMG_42.jpg";
import "./App.css";

function ProfilePic(props) {
  return (
    <div style={{ width: `${props.width}px`, margin: "auto" }}>
      <img src={logo} alt="" className="circle responsive-img hoverable" />
    </div>
  );
}
export default ProfilePic;
