import React, { useMemo } from 'react';
import styled from 'styled-components';
import EventListItem from './EventListItem';
import EventDataList from '../data/eventData';
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
    <Wrapper>
      {useMemo(() => {
        return EventDataList.map((item) => {
          if (shownTagStr && !item.tag.some((key) => shownTagMap[key])) return null;
          return <EventListItem {...item} key={`${item.name}-${shownTagStr}`} />;
        });
      }, [shownTagMap])}
      <FloorMap />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0.8rem 0.8rem 5rem;
`;

export default EventList;
