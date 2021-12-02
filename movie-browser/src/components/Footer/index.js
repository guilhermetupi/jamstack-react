import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <nav class="navbar fixed-bottom navbar-light bg-light">
      <div class="container-fluid p-2 d-flex justify-content-center align-items-center">
        <p className="lead" style={{ marginBottom: 0 }}>
          Know more about me at my{" "}
          <a
            href="https://www.linkedin.com/in/guilhermetupinamba/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ marginLeft: ".5rem" }}
            />
          </a>{" "}
          or{" "}
          <a
            href="https://github.com/guilhermetupi/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <FontAwesomeIcon icon={faGithub} style={{ marginLeft: ".5rem" }} />
          </a>
        </p>
      </div>
    </nav>
  );
}
