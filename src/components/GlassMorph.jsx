import React from "react";
import "../css/glass.css";
import me from "../images/me.JPG";
import insta from "../images/insta.png";
import github from "../images/github.png";
import linked from "../images/linkedin.png";

function Glass() {
  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <div className="img">
            <img src={me} alt="Rhys Pulling" />
          </div>
          <div className="cardContent">
            <h3>
              Rhys Pulling<br></br>
              <span>Computer Scientist</span>
            </h3>
          </div>
        </div>
        <ul className="sci">
          <li>
            <a href="https://www.instagram.com/rhystopher_pulling12/">
              <i className="fa fa-instagram">
                <img src={insta} alt="link to instagram" />
              </i>
            </a>
          </li>
          <li>
            <a href="https://github.com/pullingrm12">
              <i className="fa fa-github">
                <img src={github} alt="link to github" />
              </i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rhys-pulling-25470a22b/">
              <i className="fa fa-github">
                <img src={linked} alt="link to linkedin" />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Glass;
