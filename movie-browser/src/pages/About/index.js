import Hero from "../../components/Hero";
import Photo from "../../images/my-photo.jpg";

export default function About() {
  return (
    <>
      <Hero title="About me" />
      <div className="container ">
        <div className="row p-5 d-flex justify-content-center">
          <div className="col-sm-12 col-md-3 d-flex justify-content-center">
            <img
              src={Photo}
              height="200"
              width="200"
              alt="Me"
              style={{ borderRadius: ".25rem" }}
            />
          </div>
          <div className="col-sm-12 col-md-7">
            <p className="lead">
              Hi, my name is Guilherme, I'm a software developer and currently
              I'm studying Information Systems at the University of Campinas
              (UNICAMP) and working as a junior full-stack web developer at{" "}
              <a
                href="https://www.hubbrasil.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                HUB Brasil
              </a>{" "}
              using the technologies React, Angular, NodeJS, Express, Firebase,
              PostgreSQL and using agile methodologies such as Scrum and Kanban.
              I'm a passionate about web development and I'm always looking for
              new challenges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
