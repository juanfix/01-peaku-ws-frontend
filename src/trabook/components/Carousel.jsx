export const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner rounded-3">
        <div className="carousel-item active">
          <a href="#">
            <img
              src="/assets/img/paris.jpg"
              className="d-block w-100"
              alt="Paris"
            />
          </a>
          <div className="carousel-caption d-none d-md-block">
            <h5>The Amazing Difference a Year of Traveling.</h5>
            <p className="text-white">July 27, 2021</p>
          </div>
        </div>
        <div className="carousel-item">
          <a href="#">
            <img
              src="/assets/img/castelmezzano.jpg"
              className="d-block w-100"
              alt="Castel Mezzano"
            />
          </a>
          <div className="carousel-caption d-none d-md-block">
            <h5>Travel far enough, you meet yourself.</h5>
            <p className="text-white">July 27, 2021</p>
          </div>
        </div>
        <div className="carousel-item">
          <a href="#">
            <img
              src="/assets/img/desert.jpg"
              className="d-block w-100"
              alt="Desert"
            />
          </a>
          <div className="carousel-caption d-none d-md-block">
            <h5>How to Save Money While Visiting Africa.</h5>
            <p className="text-white">July 27, 2021</p>
          </div>
        </div>
        <div className="carousel-item">
          <a href="#">
            <img
              src="/assets/img/morocco.jpg"
              className="d-block w-100"
              alt="Morroco"
            />
          </a>
          <div className="carousel-caption d-none d-md-block">
            <h5>Reflections on 5 Months of Travel: Time to Hang</h5>
            <p className="text-white">July 27, 2021</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};
