export const ExclusiveDD = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
          <h1>
            Exclusive <span className="text-orange">deals & discounts</span>
          </h1>
          <p>
            Discover our fantastic early booking discounts & start planning your
            journey.
          </p>
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <div className="card">
            <img
              className="card-img-top"
              src="/assets/img/Image-1.png"
              alt="Madrid"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Madrid</h5>
                <p>
                  <i className="fa fa-star icon-gold me-1"></i>
                  4.8
                </p>
              </div>
              <div className="d-flex justify-content-between text-muted">
                <p>
                  <i className="fa fa-location-dot me-1"></i>Spain
                </p>
                <p>
                  <span className="text-decoration-line-through me-1">
                    $950
                  </span>
                  <span className="text-orange final-price p-1 ms-1">$850</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <div className="card">
            <img
              className="card-img-top"
              src="/assets/img/Hover-effect.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Firenze</h5>
                <p>
                  <i className="fa fa-star icon-gold me-1"></i>
                  4.5
                </p>
              </div>
              <div className="d-flex justify-content-between text-muted">
                <p>
                  <i className="fa fa-location-dot me-1"></i>Italy
                </p>
                <p>
                  <span className="text-decoration-line-through me-1">
                    $850
                  </span>
                  <span className="text-orange final-price p-1 ms-1">$750</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <div className="card">
            <img
              className="card-img-top"
              src="/assets/img/Image-2.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Paris</h5>
                <p>
                  <i className="fa fa-star icon-gold me-1"></i>
                  4.4
                </p>
              </div>
              <div className="d-flex justify-content-between text-muted">
                <p>
                  <i className="fa fa-location-dot me-1"></i>France
                </p>
                <p>
                  <span className="text-decoration-line-through me-1">
                    $699
                  </span>
                  <span className="text-orange final-price p-1 ms-1">$599</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <div className="card">
            <img
              className="card-img-top"
              src="/assets/img/Image-3.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">London</h5>
                <p>
                  <i className="fa fa-star icon-gold me-1"></i>
                  4.8
                </p>
              </div>
              <div className="d-flex justify-content-between text-muted">
                <p>
                  <i className="fa fa-location-dot me-1"></i>UK
                </p>
                <p>
                  <span className="text-decoration-line-through me-1">
                    $850
                  </span>
                  <span className="text-orange final-price p-1 ms-1">$850</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-direction-row justify-content-center">
        <button type="button" className="btn btn-primary btn-circle me-2">
          <i className="fa fa-angle-left"></i>
        </button>
        <button type="button" className="btn btn-primary btn-circle ms-2">
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    </>
  );
};
