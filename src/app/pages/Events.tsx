import React from 'react';
import EventsComponent from '../templates/Events';
import { FloorMapProvider } from '../containers/FloorMap';

const Events: PageComponent = () => (
  <FloorMapProvider>
    <EventsComponent />
  </FloorMapProvider>
);

export default Events;
