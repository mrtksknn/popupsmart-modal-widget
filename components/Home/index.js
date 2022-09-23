const displayName = 'Home';

const Home = () => (
  <div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 fw-bold">
      Centered screenshot
    </h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">
        Quickly design and customize responsive mobile-first sites with Bootstrap.
      </p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button className="btn btn-primary btn-lg px-4 me-sm-3" type="button">
          Primary button
        </button>
        <button className="btn btn-outline-secondary btn-lg px-4" type="button">
          Secondary
        </button>
        <button type="button">
          Primary
        </button>
      </div>
    </div>
  </div>
);

Home.displayName = displayName;

export default Home;
