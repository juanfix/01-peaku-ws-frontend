import {
  BestVPlan,
  ExclusiveDD,
  GetStarted,
  GetUpdate,
  Suscribe,
  ThingsToDo,
  WhatPeopleSay,
} from '../components';

export const MainPage = () => {
  return (
    <>
      <section className="container-fluid">
        <GetStarted />
        <ThingsToDo />
        <ExclusiveDD />
        <BestVPlan />
        <WhatPeopleSay />
        <GetUpdate />
        <Suscribe />
      </section>
    </>
  );
};
