import React, { useState, createContext, useMemo } from 'react';
import styled from 'styled-components';
import EventListItem from './EventListItem';
import EventSortBar from './EventSortBar';
import sortEvents from '../data/eventData';
import bgImg from '../assets/background.jpg';

export const ScrollTopContext = createContext<number>(0);

const EventList = () => {
  const [sortKey, setSortKey] = useState<keyof EventItem>('room');
  return (
    <Wrapper>
      <BgLayer />
      <EventSortBar sortKey={sortKey} setSortKey={setSortKey} />
      {useMemo(() => {
        return sortEvents(sortKey).map((item) => {
          return <EventListItem {...item} key={item.name} />;
        });
      }, [sortKey])}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const BgLayer = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${bgImg});
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: -100;
`;

export default EventList;
