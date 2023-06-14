export const ThingsToDo = () => {
  return (
    <>
      <div className="row bg-custom mt-5">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
          <h1>
            Things you need <span className="text-orange">to do</span>
          </h1>
          <p>
            We ensure that you'll embark on a perfectly planned, safe vacation
            at a price you can afford.
          </p>
        </div>
      </div>
      <div className="row bg-custom pb-3">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card">
            <div className="card-body">
              <img
                className="card-img-top w-auto mb-3"
                src="/assets/img/Group-2.png"
                alt="Card image cap"
              />
              <h5 className="card-title">Sign Up</h5>
              <p className="card-text">
                Completes all the work associated with planning and processing.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card">
            <div className="card-body">
              <img
                className="card-img-top w-auto mb-3"
                src="/assets/img/Group.png"
                alt="Card image cap"
              />
              <h5 className="card-title">Worth of Money</h5>
              <p className="card-text">
                After successful access then book from exclusive deals &
                pricing.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card">
            <div className="card-body">
              <img
                className="card-img-top w-auto mb-3"
                src="/assets/img/Group-1.png"
                alt="Card image cap"
              />
              <h5 className="card-title">Exciting Travel</h5>
              <p className="card-text">
                Start and explore a wide range of exciting travel experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
