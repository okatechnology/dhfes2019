import React, { useState, useRef, createContext, useEffect } from 'react';
import useResize from '../utils/useResize';
import styled from 'styled-components';
import EventListItem from './EventListItem';

export const ScrollTopContext = createContext<number>(0);

interface EventListProps {
  eventList: EventItem[];
}

const EventList = ({ eventList }: EventListProps) => {
  const [scrollTopState, setScrollTopState] = useState<number>(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { height } = useResize();

  useEffect(() => {
    let alive = true;
    let curr = 0;
    const update = () => {
      if (!alive) return;
      const next = wrapperRef.current?.scrollTop ?? 0;
      if (curr !== next) {
        setScrollTopState(next);
      }
      requestAnimationFrame(update);
    };
    update();

    return () => {
      alive = false;
    };
  }, []);

  return (
    <ScrollTopContext.Provider value={scrollTopState}>
      <Wrapper ref={wrapperRef} style={{ height: height }}>
        {eventList.map(({ name, description, tag, image, room }) => (
          <EventListItem name={name} description={description} tag={tag} image={image} room={room} key={name} />
        ))}
      </Wrapper>
    </ScrollTopContext.Provider>
  );
};

const Wrapper = styled.div`
  overflow: scroll;
`;

export default EventList;
