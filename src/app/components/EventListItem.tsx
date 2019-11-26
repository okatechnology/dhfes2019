import React, { useState, useRef, useEffect } from 'react';
import EventTag from './EventTag';
import EventImage from './EventImage';
import styled from 'styled-components';

interface EventListItemProps extends Omit<EventItem, 'ruby'> {}

const EventListItem = ({ name, description, tag, image, place }: EventListItemProps) => {
  const [showing, setShowing] = useState(false);
  const cardEl = useRef<HTMLElement>(null);

  useEffect(() => {
    let unmounted = false;
    const update = () => {
      if (cardEl.current && cardEl.current?.getBoundingClientRect().top < window.innerHeight - 80) {
        setShowing(true);
      } else if (!unmounted) {
        window.requestAnimationFrame(update);
      }
    };
    window.requestAnimationFrame(update);
    return () => {
      unmounted = true;
    };
  }, []);

  const tagElement = tag.map((tagName) => <EventTag name={tagName} key={tagName} />);
  return (
    <Card ref={cardEl} style={(!showing && { opacity: '0', transform: 'translateX(-30vw)' }) || undefined}>
      <div>
        <EventImage image={image} />
        <Place>{place}</Place>
      </div>
      <RightItem>
        <Name>{name}</Name>
        <TagWrapper>{tagElement}</TagWrapper>
        <Description>{description}</Description>
      </RightItem>
      <SeeMoreButtonWrapper>
        <SeeMoreButton></SeeMoreButton>
      </SeeMoreButtonWrapper>
    </Card>
  );
};

const Card = styled.section`
  display: grid;
  grid-template-columns: 10rem 1fr 1.5rem;
  gap: 0.8rem;
  justify-content: space-between;
  padding: 0.8rem;
  background-color: rgba(255, 255, 255, 0.85);
  margin: 0.8rem;
  border-radius: 0.8rem;
  transition: transform 0.5s cubic-bezier(0.17, 0.67, 0.52, 1.26), opacity 0.5s ease-out;
  overflow: hidden;
  transform: none;
  opacity: 1;
`;

const Place = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  width: 10rem;
  margin-top: 0.8rem;
  background-color: #ff6600;
  border-radius: 0.8rem;
  color: #fff;
  font-size: 1.4rem;
  font-weight: bold;
`;

const Name = styled.h1`
  font-size: 2.4rem;
  color: #333;
  margin: 0.8rem 0 0;
  line-height: 1;
`;

const Description = styled.p`
  font-size: 1.4rem;
  color: #333;
  width: 100%;
  display: block;
  align-items: center;
  margin: 0.8rem 0 0;
`;

const SeeMoreButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 2rem;
`;

const SeeMoreButton = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-right: 3px solid #333;
  border-bottom: 3px solid #333;
  transform: rotate(-0.125turn);
  transition: transform 0.8s ease-in-out;
`;

const RightItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.4rem 0 0 -0.2rem;
  width: calc(100% + 0.4rem);
`;

export default EventListItem;
