export const GetStarted = () => {
  const onHandlerSchedule = (e) => {
    e.preventDefault();
    alert('Excellent!');
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <h1>
            Get started your exciting{' '}
            <span className="text-orange"> journey</span> with us.
          </h1>
          <p className="my-5">
            A Team of experienced tourism professionals will provide you with
            the best advice and tips for your desire place.
          </p>
          <button className="btn btn-outline-primary fw-bold">
            Discover Now
          </button>
          <form onSubmit={onHandlerSchedule}>
            <div className="row align-items-center my-5">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <div className="form-group">
                  <i className="fa fa-location-dot icon-blue"></i>
                  <label htmlFor="location" className="ms-2">
                    Location
                  </label>
                  <select className="form-select" id="location" required>
                    <option value="">Where are you going</option>
                    <option value="1">Hawai</option>
                    <option value="2">Spain</option>
                    <option value="3">France</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <div className="form-group">
                  <i className="fa fa-calendar-days icon-blue"></i>
                  <label htmlFor="date" className="ms-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    placeholder="dd-mm-yyyy"
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <div className="form-group">
                  <i className="fa fa-user-plus icon-blue"></i>
                  <label htmlFor="guestsNumber" className="ms-2">
                    Guest
                  </label>
                  <select className="form-select" id="guestsNumber" required>
                    <option value="">Number of guest</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 d-grid gap-1">
                <button type="submit" className="btn btn-primary mt-4 fw-bold">
                  Explore Now
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-direction-row align-items-center justify-content-center">
          <img
            src="./assets/img/tourist-with-thumb-up.png"
            className="img-fluid"
            alt="Statistics"
          />
        </div>
      </div>
      <div className="container"></div>
    </>
  );
};
