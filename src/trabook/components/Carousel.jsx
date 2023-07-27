import { useAxiosBlogs } from '../../hooks/useAxiosBlogs';

export const Carousel = () => {
  const { blogs } = useAxiosBlogs();

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {blogs.map((blog, index) => (
          <button
            key={blog.id_blog}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index == 0 ? 'active' : ''}
            aria-current="true"
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner rounded-3">
        {blogs.map((blog, index) => (
          <div
            key={blog.id_blog}
            className={index == 0 ? 'carousel-item active' : 'carousel-item'}
          >
            <a href="#">
              <img
                src={blog.img_url}
                className="d-block w-100"
                alt={blogs.title}
              />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>{blog.title}</h5>
              <p className="text-white">{blog.date}</p>
            </div>
          </div>
        ))}
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
