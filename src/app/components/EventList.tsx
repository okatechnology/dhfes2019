import React, { useMemo } from 'react';
import styled from 'styled-components';
import EventListItem from './EventListItem';
import EventDataList from '../data/eventData';
import FloorMap from '../containers/FloorMap';
import useGlobalState from '../globalState';
import logo from '../assets/dhfes-logo.png';
import PromptScroll from './PromptScroll';

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
      <FirstView>
        <CustomImage src={logo} />
        <PromptScroll />
      </FirstView>
      <Wrapper>
        {useMemo(() => {
          return EventDataList.map((item) => {
            if (shownTagStr && !item.tag.some((key) => shownTagMap[key])) return null;
            return <EventListItem {...item} key={`${item.name}-${shownTagStr}`} />;
          });
        }, [shownTagMap])}
      </Wrapper>
      <FloorMap />
    </>
  );
};

const FirstView = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;
const CustomImage = styled.img`
  display: block;
  width: 90%;
  position: sticky;
  top: 75%;
  left: 0;
  right: 0;
  margin: auto;
`;

const Wrapper = styled.div`
  padding: 0.8rem 0.8rem 5rem;
`;

export default EventList;
