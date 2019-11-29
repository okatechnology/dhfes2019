import React, { FC } from 'react';
import EventsComponent from '../templates/Events';
import { FloorMapProvider } from '../containers/FloorMap';

const Events: FC = () => (
  <FloorMapProvider>
    <EventsComponent />
  </FloorMapProvider>
);

export default Events;
