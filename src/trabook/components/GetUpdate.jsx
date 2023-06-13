import { Carousel } from './Carousel';

export const GetUpdate = () => {
  return (
    <>
      <div className="row mt-4">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
          <h1>
            Get update with <span className="text-orange">latest blog</span>
          </h1>
        </div>
      </div>
      <Carousel />
    </>
  );
};
