import React, { useState } from 'react';
import styled from 'styled-components';
import EventListItem from '../components/EventListItem';
import evSortBy from '../data/eventData';
import bgImg from '../assets/background.jpg';
import EventSortBar from '../components/EventSortBar';

const Events: PageComponent = () => {
  const [sortBy, setSortBy] = useState<keyof EventItem>('ruby');
  const onSetSortBy = (evItem: keyof EventItem) => {
    setSortBy(evItem);
  };
  const evSortByRuby = evSortBy('ruby').map(({ name, description, tag, image, place }) => (
    <EventListItem name={name} description={description} tag={tag} image={image} place={place} key={name} />
  ));
  const evSortByPlace = evSortBy('place').map(({ name, description, tag, image, place }) => (
    <EventListItem name={name} description={description} tag={tag} image={image} place={place} key={name} />
  ));
  return (
    <>
      <Wrapper>
        <BgLayer></BgLayer>
        <EventSortBar sortBy={sortBy} onSetSortBy={onSetSortBy} />
        {sortBy === 'ruby' && evSortByRuby}
        {sortBy === 'place' && evSortByPlace}
      </Wrapper>
    </>
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
  z-index: -9999;
`;

export default Events;
