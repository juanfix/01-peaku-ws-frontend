export const Card = (props) => {
  const { cityName, countryName, discount, img_url, num_days, price, score } =
    props;

  return (
    <div className="card mx-2">
      <img className="card-img-top" src={img_url} alt={cityName} />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            {discount === 0 ? `${cityName}, ${countryName}` : cityName}
          </h5>
          <p>
            <i className="fa fa-star icon-gold me-1"></i>
            {score}
          </p>
        </div>
        <div className="d-flex justify-content-between text-muted">
          <p>
            <i
              className={
                discount === 0
                  ? 'fa fa-location-arrow text-orange me-1'
                  : 'fa fa-location-dot me-1'
              }
            ></i>
            {discount === 0 ? `${num_days} days trip` : countryName}
          </p>
          <p>
            <span
              className={
                discount === 0
                  ? 'text-decoration-line-through me-1 d-none'
                  : 'text-decoration-line-through me-1'
              }
            >
              ${price}
            </span>
            <span
              className={
                discount === 0
                  ? 'text-orange fw-bold p-1 ms-1'
                  : 'text-orange final-price p-1 ms-1'
              }
            >
              ${price * (1 - discount)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
