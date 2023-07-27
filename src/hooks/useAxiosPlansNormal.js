import { useContext, useEffect } from 'react';

import { getPlansNormal } from '../helpers/getPlansNormal';
import { dataPlansNormal } from '../data/plansNormal';
import { TrabookContext } from '../context/TrabookContext';

export const useAxiosPlansNormal = () => {
  const { trabook, setTrabook } = useContext(TrabookContext);

  useEffect(() => {
    const plansNormal = getPlansNormal();
    plansNormal
      .then((results) => {
        const { data } = results;
        setTrabook((prevState) => ({
          ...prevState,
          plans: data,
        }));
      })
      .catch((err) => {
        console.log(err);
        const { data } = dataPlansNormal;
        setTrabook((prevState) => ({
          ...prevState,
          plans: data,
        }));
      });
  }, []);
};
