import { useContext, useEffect } from 'react';

import { getPlansWithDiscount } from '../helpers/getPlansWithDiscount';
import { dataPlansWithDiscount } from '../data/plansWithDiscount';
import { TrabookContext } from '../context/TrabookContext';

export const useAxiosPlansWithDiscount = () => {
  const { trabook, setTrabook } = useContext(TrabookContext);

  useEffect(() => {
    const plansWithDiscount = getPlansWithDiscount();
    plansWithDiscount
      .then((results) => {
        const { data } = results;
        setTrabook((prevState) => ({
          ...prevState,
          plansWithDiscount: data,
        }));
      })
      .catch((err) => {
        console.log(err);
        const { data } = dataPlansWithDiscount;
        setTrabook((prevState) => ({
          ...prevState,
          plansWithDiscount: data,
        }));
      });
  }, []);
};
