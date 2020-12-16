import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

function Project(props) {
  return (
    <section
      className="card container  #fafafa grey lighten-5 z-depth-2 hoverable"
      style={{ margin: "auto" }}
    >
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator responsive-img"
          src={props.img}
          alt="project view"
        />
      </div>
      <div className="card-content">
        <span className="card-title flow-text activator grey-text text-darken-4">
          {props.title}
          <i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-action">
        <a href={props.githubLink} target="_blank" rel="noreferrer">
          GitHub link
        </a>
        <a href={props.projectLink} target="_blank" rel="noreferrer">
          Project link
        </a>
      </div>
      <div className="card-reveal  #fafafa grey lighten-5 ">
        <span className="card-title flow-text grey-text text-darken-4">
          {props.title}
          <i className="material-icons right">close</i>
        </span>
        <p className="text" style={{ paddingTop: "2%" }}>
          {props.about}
        </p>
      </div>
    </section>
  );
}

export default Project;
