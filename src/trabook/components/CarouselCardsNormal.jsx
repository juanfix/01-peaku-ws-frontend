import { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { responsive } from '../../carousel/config';
import { useAxiosPlansNormal } from '../../hooks/useAxiosPlansNormal';
import { TrabookContext } from '../../context/TrabookContext';
import { Card } from './';

export const CarouselCardsNormal = () => {
  useAxiosPlansNormal();
  const { trabook } = useContext(TrabookContext);
  const { plans } = trabook;
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {plans.map((plan) => (
        <Card
          key={plan.id_plan_has_city}
          cityName={plan.city.name}
          countryName={plan.city.country.name}
          discount={plan.plan.discount}
          img_url={plan.plan.img_url}
          num_days={plan.plan.num_days}
          price={plan.plan.price}
          score={plan.plan.score}
        />
      ))}
    </Carousel>
  );
};
