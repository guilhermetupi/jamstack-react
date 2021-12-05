import Hero from "../../components/Hero";

export default function Home() {
  return (
    <>
      <Hero title="Welcome to Movie Browser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <h1 className="text-title">Movie Browser</h1>
            <p className="lead">
              Welcome to Movie Browser. This is a simple app that allows you to
              search for movies and view their details. That's a project that
              I've been working for the JamStack e-degree on Coursera.
              <br /> <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
