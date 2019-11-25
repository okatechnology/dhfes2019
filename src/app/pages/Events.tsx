import React, { useContext, useState, useRef, createContext, useEffect } from 'react';
import styled from 'styled-components';
import EventListItem from '../components/EventListItem';
import ramenImg from '../assets/ramen.jpg';
import useResize from '../utils/useResize';

const tmp: EventItem[] = [
  {
    name: 'okatechnology',
    description:
      'おかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよ',
    tag: ['ramen', 'ramen', 'ramen', 'ramen', 'ramen', 'てすと'],
    image: ramenImg,
    place: 'e01',
  },
  {
    name: 'waowao',
    description: 'wa-o',
    tag: ['whatasoda'],
    image: ramenImg,
    place: 'w01',
  },
  {
    name: 'waowao',
    description: 'wa-o',
    tag: ['whatasoda'],
    image: ramenImg,
    place: 'w01',
  },
  {
    name: 'waowao',
    description: 'wa-o',
    tag: ['whatasoda'],
    image: ramenImg,
    place: 'w01',
  },
  {
    name: 'waowao',
    description: 'wa-o',
    tag: ['whatasoda'],
    image: ramenImg,
    place: 'w01',
  },
  {
    name: 'waowao',
    description: 'wa-o',
    tag: ['whatasoda'],
    image: ramenImg,
    place: 'w01',
  },
  {
    name: 'waowao',
    description: 'wa-o',
    tag: ['whatasoda'],
    image: ramenImg,
    place: 'w01',
  },
  {
    name: 'waowao',
    description: 'wa-o',
    tag: ['whatasoda'],
    image: ramenImg,
    place: 'w01',
  },
];

export const ScrollTopContext = createContext<number>(0);

const Events: PageComponent = () => {
  const [openingCard, setOpeningCard] = useState<number | null>(null);
  const [scrollTopState, setScrollTopState] = useState<number>(0);
  const onOpenCard = (i: number) => {
    if (i === openingCard) {
      setOpeningCard(null);
    } else {
      setOpeningCard(i);
    }
  };
  const listBoxEl = useRef<HTMLDivElement>(null);
  const { height } = useContext(useResize.context);

  useEffect(() => {
    const update = () => {
      setScrollTopState(listBoxEl.current?.scrollTop ?? 0);
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, []);

  const eventList = tmp.map(({ name, description, tag, image, place }, i) => (
    <EventListItem
      name={name}
      description={description}
      tag={tag}
      image={image}
      place={place}
      cardIndex={i}
      openingCardIndex={openingCard}
      onOpenCard={onOpenCard}
      key={name}
    />
  ));
  return (
    <>
      <ScrollTopContext.Provider value={scrollTopState}>
        <ListBox ref={listBoxEl} style={{ height: height }}>
          {eventList}
        </ListBox>
      </ScrollTopContext.Provider>
    </>
  );
};

const ListBox = styled.div`
  overflow: scroll;
`;

export default Events;
