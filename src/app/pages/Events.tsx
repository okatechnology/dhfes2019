import React from 'react';
import EventList from '../components/EventList';
import { FloorMapProvider } from '../containers/FloorMap';

const Events: PageComponent = () => (
  <FloorMapProvider>
    <EventList />
  </FloorMapProvider>
);

export default Events;
