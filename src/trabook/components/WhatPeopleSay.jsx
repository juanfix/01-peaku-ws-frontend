export const WhatPeopleSay = () => {
  return (
    <>
      <div className="row bg-custom mt-5">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <h1>
            What people say <span className="text-orange"> about us.</span>
          </h1>
          <p>
            A Team of experienced tourism professionals will provide you with
            the best advice and tips for your desire place.
          </p>
          <div className="d-flex flex-direction-row justify-content-start">
            <button type="button" className="btn btn-primary btn-circle me-2">
              <i className="fa fa-angle-left"></i>
            </button>
            <button type="button" className="btn btn-primary btn-circle ms-2">
              <i className="fa fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
          <div className="row bg-custom pb-3">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="card">
                <div className="card-body">
                  <img
                    className="card-img-top w-25 mb-3"
                    src="./assets/img/user-male.svg"
                    alt="Card image cap"
                  />
                  <p className="card-text">
                    "On the Windows talking painted pasture yet its express
                    parties use. Sure last upon he same as knew next. Of
                    believed or diverted no."
                  </p>
                </div>
                <div className="card-footer">
                  <h5>Mike Taylor</h5>
                  <small className="text-muted">Lahore, Pakistan</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="card">
                <div className="card-body">
                  <img
                    className="card-img-top w-25 mb-3"
                    src="./assets/img/user-male.svg"
                    alt="Card image cap"
                  />
                  <p className="card-text">
                    "On the Windows talking painted pasture yet its express
                    parties use. Sure last upon he same as knew next. It's
                    nice."
                  </p>
                </div>
                <div className="card-footer">
                  <h5>Chris Thomas</h5>
                  <small className="text-muted">CEO of Red Button</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
