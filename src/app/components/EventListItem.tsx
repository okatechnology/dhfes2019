import React, { useState, useMemo, useRef, useEffect, useContext } from 'react';
import EventTag from './EventTag';
import placeMap from '../utils/supportedPlaceMap';
import EventImage from './EventImage';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { debounce } from '../utils/debounce';
import { ScrollTopContext } from '../pages/Events';

interface EventListItemProps extends EventItem {
  cardIndex: number;
  openingCardIndex: number | null;
  onOpenCard: (i: number) => void;
}

const EventListItem = ({
  name,
  description,
  tag,
  image,
  place,
  cardIndex,
  onOpenCard,
  openingCardIndex,
}: EventListItemProps) => {
  const [opening, setOpening] = useState(true);
  const [showing, setShowing] = useState(false);
  const [cardHeight, setCardHeight] = useState<number | undefined>(undefined);
  const cardEl = useRef<HTMLElement>(null);
  const scrollTop = useContext(ScrollTopContext);
  useMemo(() => {
    if (cardIndex === openingCardIndex || cardHeight === undefined) {
      setOpening(true);
    } else {
      setOpening(false);
    }
  }, [openingCardIndex]);

  useEffect(() => {
    if (cardEl.current && scrollTop + (window.innerHeight - 160) > cardEl.current?.offsetTop) {
      setShowing(true);
    }
  }, [scrollTop]);

  useEffect(() => {
    setCardHeight(cardEl.current?.offsetHeight ?? 0);
    setOpening(false);
  }, []);

  useEffect(() => {
    const event = debounce(() => {
      setOpening(true);
      setCardHeight(undefined);
      setCardHeight(cardEl.current?.offsetHeight ?? 0);
      setOpening(false);
    }, 100);
    window.addEventListener('resize', event);
    return () => {
      window.removeEventListener('resize', event);
    };
  }, []);

  const tagElement = tag.map((tagName) => <EventTag name={tagName} key={tagName} />);
  return (
    <Card
      onClick={() => {
        onOpenCard(cardIndex);
      }}
      ref={cardEl}
      style={(opening && cardHeight && { height: cardHeight }) || (!cardHeight && { height: 'auto' }) || undefined}
      showing={showing}
    >
      <div>
        <EventImage image={image} />
        <Place to={placeMap[place].position}>{place}</Place>
      </div>
      <RightItem>
        <Name>{name}</Name>
        <TagWrapper>{tagElement}</TagWrapper>
        <Description>
          <DescriptionText style={(opening && { textOverflow: 'clip', whiteSpace: 'normal' }) || undefined}>
            {description}
          </DescriptionText>
          <OpenButton
            style={(opening && { transform: 'translate(-1rem, 0.5rem) rotate(2.625turn)' }) || undefined}
          ></OpenButton>
        </Description>
      </RightItem>
    </Card>
  );
};

const Name = styled.h1`
  font-size: 2.4rem;
  color: #333;
  margin: 0;
  line-height: 1;
`;

interface CardStyleProps {
  showing: boolean;
}
const Card = styled.section<CardStyleProps>`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  background-color: rgba(255, 255, 255, 0.85);
  margin: 0.8rem;
  border-radius: 0.8rem;
  height: 16rem;
  transition: height 1s cubic-bezier(0, 0, 0.2, 1), transform 0.5s cubic-bezier(0.17, 0.67, 0.49, 1.48);
  overflow: hidden;
  transform: ${(props) => (props.showing ? 'none' : 'translateX(-90vw)')};
`;

const Place = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  margin-top: 0.8rem;
  height: 3.6rem;
  background-color: #ff6600;
  border-radius: 0.8rem;
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
`;

const Description = styled.div`
  margin-top: 0.8rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const DescriptionText = styled.p`
  font-size: 1.4rem;
  color: #333;
  width: calc(100% - 4rem);
  display: block;
  align-items: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
`;

const OpenButton = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-right: 3px solid #333;
  border-bottom: 3px solid #333;
  transform: translate(-1rem) rotate(0.125turn);
  transition: transform 0.8s ease-in-out;
`;

const RightItem = styled.div`
  width: calc(100% - 10.8rem);
  display: flex;
  flex-direction: column;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.6rem 0 0 -0.2rem;
  width: calc(100% + 0.4rem);
`;

export default EventListItem;
