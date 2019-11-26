import React from 'react';
import ramenImg from '../assets/ramen.jpg';
import EventList from '../components/EventList';
import { FloorMapProvider } from '../containers/FloorMap';

const eventList: EventItem[] = [
  {
    name: 'okatechnology',
    description:
      'おかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよおかてくのろじーを崇めよ',
    tag: ['ramen', 'ramen', 'ramen', 'ramen', 'ramen', 'てすと'],
    image: ramenImg,
    room: 'e01',
  },
  {
    name: 'waowao',
    description: 'wa-o',
    tag: ['whatasoda'],
    image: ramenImg,
    room: 'w01',
  },
  {
    name: 'waowao',
    description: 'wa-o',
    tag: ['whatasoda'],
    image: ramenImg,
    room: 'w01',
  },
  {
    name: 'waowao',
    description: 'wa-o',
    tag: ['whatasoda'],
    image: ramenImg,
    room: 'w01',
  },
  {
    name: 'waowao',
    description: 'wa-o',
    tag: ['whatasoda'],
    image: ramenImg,
    room: 'w01',
  },
  {
    name: 'waowao',
    description: 'wa-o',
    tag: ['whatasoda'],
    image: ramenImg,
    room: 'w01',
  },
  {
    name: 'waowao',
    description: 'wa-o',
    tag: ['whatasoda'],
    image: ramenImg,
    room: 'w01',
  },
  {
    name: 'waowao',
    description: 'wa-o',
    tag: ['whatasoda'],
    image: ramenImg,
    room: 'w01',
  },
];

const Events: PageComponent = () => (
  <FloorMapProvider>
    <EventList eventList={eventList} />
  </FloorMapProvider>
);

export default Events;
