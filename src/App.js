import "./App.css";
import NavBar from "./navbar";
import Profile from "./profile";
import Project from "./project";
import Particles from "react-particles-js";
import Footer from "./footer";
import params from "./params";
import landing from "./assets/images/landing.png";
import movies from "./assets/images/movies.png";
import pong from "./assets/images/pong.png";
import snake from "./assets/images/snake.png";
import aboutJson from "./about";

function App() {
  const about = aboutJson;

  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
      ></link>
      <NavBar />
      <div className="container1 section #fffff">
        <div id="profile">
          <Profile />
        </div>
        <div id="movieapp" className="project">
          <Project
            img={movies}
            title="Movie App"
            projectLink="https://danielflix.netlify.app/"
            githubLink="https://github.com/DanielCunha94/MovieApp"
            about={about.movieapp}
          />
        </div>
        <div id="landingPage" className="project">
          <Project
            img={landing}
            title="Landing Page"
            githubLink="https://github.com/DanielCunha94/landingPage"
            projectLink="https://dcompany.netlify.app/"
            about={about.landing}
          />
        </div>
        <div id="pong" className="project">
          <Project
            img={pong}
            title="Pong"
            githubLink="https://github.com/DanielCunha94/Pong"
            projectLink="https://dpong.netlify.app/"
            about={about.pong}
          />
        </div>
        <div id="snake" className="project">
          <Project
            img={snake}
            title="Snake"
            githubLink="https://github.com/DanielCunha94/snake"
            projectLink="https://dsnake.netlify.app/"
            about={about.snake}
          />
        </div>

        <Particles id="particles-js" params={params} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
