import React from "react";
import "../css/glass.css";
import me from "../images/me.JPG";
import insta from "../images/insta.png";
import github from "../images/github.png";
import linked from "../images/linkedin.png";
import resume from "../images/Pulling Resume 2023.pdf";

function Glass() {
  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <div className="img">
            <a href={resume} target="_blank">
              <img src={me} alt="Rhys Pulling" />
            </a>
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
            <a
              href="https://www.instagram.com/rhystopher_pulling12/"
              target="_blank"
            >
              <i className="fa fa-instagram">
                <img src={insta} alt="link to instagram" />
              </i>
            </a>
          </li>
          <li>
            <a href="https://github.com/pullingrm12" target="_blank">
              <i className="fa fa-github">
                <img src={github} alt="link to github" />
              </i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rhys-pulling-25470a22b/"
              target="_blank"
            >
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
