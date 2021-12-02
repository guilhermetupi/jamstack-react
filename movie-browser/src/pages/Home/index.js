import Hero from "../../components/Hero";

export default function Home() {
  return (
    <>
      <Hero title="Welcome to Movie Browser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vitae imperdiet nisl. Duis at neque augue. In dignissim in tellus
              ut scelerisque. Nam tristique egestas commodo. Quisque finibus
              orci est, nec aliquet est pulvinar et. Fusce non dui ac nunc
              congue facilisis. Quisque et quam ac nulla tristique tincidunt ac
              et neque. In accumsan tempus pellentesque. Aliquam erat volutpat.
              <br />
              Nulla facilisi. Pellentesque ultricies rutrum lacus. Donec sodales
              lacus id turpis dictum, ut consequat urna placerat. Pellentesque
              vehicula blandit leo in ornare. Sed cursus, quam vel varius
              convallis, urna nisi scelerisque arcu, ac malesuada leo mi a
              augue. Suspendisse faucibus lectus ipsum, et fringilla lectus
              convallis non. In congue libero id quam auctor tincidunt. Nunc sed
              justo quis justo sodales volutpat. Aliquam aliquam tempor ipsum,
              quis ultrices enim varius at. Mauris sit amet ligula vestibulum
              nisl venenatis sagittis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
