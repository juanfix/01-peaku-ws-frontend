import { CarouselCardsDiscount } from './';

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
      <CarouselCardsDiscount />
    </>
  );
};
