import { useState } from 'react';
import { TrabookContext } from './TrabookContext';

const trabookDefault = {
  plans: [],
  plansWithDiscount: [],
};

export const TrabookProvider = ({ children }) => {
  const [trabook, setTrabook] = useState(trabookDefault);
  return (
    <TrabookContext.Provider value={{ trabook, setTrabook }}>
      {children}
    </TrabookContext.Provider>
  );
};
