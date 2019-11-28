import React, { useMemo } from 'react';
import styled from 'styled-components';
import EventListItem from './EventListItem';
import EventDataList from '../data/eventData';
import bgImg from '../assets/background.jpg';
import FloorMap from '../containers/FloorMap';
import useGlobalState from '../globalState';

const EventList = () => {
  const { shownTagMap } = useGlobalState();
  const shownTagStr = useMemo(() => {
    return Object.entries(shownTagMap).reduce<string>((acc, [key, value]) => {
      if (value) acc += `_${key}`;
      return acc;
    }, '');
  }, [shownTagMap]);

  return (
    <>
      <Wrapper>
        <BgLayer />
        <div>
          {useMemo(() => {
            return EventDataList.map((item) => {
              if (shownTagStr && !item.tag.some((key) => shownTagMap[key])) return null;
              return <EventListItem {...item} key={`${item.name}-${shownTagStr}`} />;
            });
          }, [shownTagMap])}
        </div>
      </Wrapper>
      <FloorMap />
    </>
  );
};

const Wrapper = styled.div`
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
