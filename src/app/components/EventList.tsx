import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import EventListItem from './EventListItem';
import EventBottomBar from './EventBottomBar';
import sortEvents from '../data/eventData';
import bgImg from '../assets/background.jpg';
import FloorMap from '../containers/FloorMap';
import TagMap from '../utils/supportedTagMap';

export const allTagNames = Object.keys(TagMap) as OneOfTagKey[];
const EventList = () => {
  const [sortKey, setSortKey] = useState<keyof EventItem>('room');
  const [filterKeyArr, setFilterKeyArr] = useState<OneOfTagKey[]>(allTagNames);
  return (
    <>
      <Wrapper>
        <BgLayer />
        <EventBottomBar
          sortKey={sortKey}
          setSortKey={setSortKey}
          filterKeyArr={filterKeyArr}
          setFilterKeyArr={setFilterKeyArr}
        />
        {useMemo(() => {
          return sortEvents(sortKey).map((item) => {
            if (!item.tag.some((value) => filterKeyArr.includes(value))) return null;
            return <EventListItem {...item} key={`${item.name}-${sortKey}-${filterKeyArr.length}`} />;
          });
        }, [sortKey, filterKeyArr])}
      </Wrapper>
      <FloorMap />
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 0.8rem 0 5rem;
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
