export const BestVPlan = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
          <h1>
            Best <span className="text-orange">vacation plan</span>
          </h1>
          <p>
            Plan your perfect vacation with our travel agency. Choose among
            hundreds of all-inclusive offers!
          </p>
        </div>
      </div>
      <div className="d-flex flex-direction-row justify-content-end">
        <button type="button" className="btn btn-primary btn-circle me-2">
          <i className="fa fa-angle-left"></i>
        </button>
        <button type="button" className="btn btn-primary btn-circle ms-2">
          <i className="fa fa-angle-right"></i>
        </button>
      </div>

      <div className="row pb-3 mt-2">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card">
            <img
              className="card-img-top"
              src="/assets/img/Image-4.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Rome, Italy</h5>
                <h5 className="card-title text-orange">$5,42k</h5>
              </div>
              <div className="d-flex justify-content-between text-muted">
                <p>
                  <i className="fa fa-location-arrow text-orange me-1"></i>10
                  days trip
                </p>
                <p>
                  <i className="fa fa-star icon-gold me-1"></i>
                  4.8
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card">
            <img
              className="card-img-top"
              src="/assets/img/Image-5.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">London, UK</h5>
                <h5 className="card-title text-orange">$2,42k</h5>
              </div>
              <div className="d-flex justify-content-between text-muted">
                <p>
                  <i className="fa fa-location-arrow text-orange me-1"></i>07
                  days trip
                </p>
                <p>
                  <i className="fa fa-star icon-gold me-1"></i>
                  4.7
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card">
            <img
              className="card-img-top"
              src="/assets/img/Image-6.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Osaka, Japan</h5>
                <h5 className="card-title text-orange">$5,42k</h5>
              </div>
              <div className="d-flex justify-content-between text-muted">
                <p>
                  <i className="fa fa-location-arrow text-orange me-1"></i>10
                  days trip
                </p>
                <p>
                  <i className="fa fa-star icon-gold me-1"></i>
                  4.8
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
