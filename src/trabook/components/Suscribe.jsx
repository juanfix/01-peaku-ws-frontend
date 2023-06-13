export const Suscribe = () => {
  return (
    <>
      <div className="row bg-orange mt-5 py-5">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center text-white d-flex flex-column align-items-center justify-content-center">
          <h1>Suscribe and get exclusive deals & offer</h1>
          <div className="input-group my-3 w-75">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Enter your email"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-primary fw-bold"
              type="button"
              id="button-addon2"
            >
              Suscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
