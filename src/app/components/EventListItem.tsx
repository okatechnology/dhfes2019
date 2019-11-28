import React, { useRef, useEffect, useState } from 'react';
import EventTag from './EventTag';
import EventImage from './EventImage';
import styled from 'styled-components';
import { useFloorMapDispatcher } from '../containers/FloorMap';
import useResize from '../utils/useResize';
import supportedRoomMap from '../utils/supportedRoomMap';
import useScrollEffect from '../utils/useScrollEffect';
import Colors from '../utils/colors';

interface EventListItemProps extends EventItem {}

const EventListItem = ({ name, description, tag, image, room }: EventListItemProps) => {
  const [visible, setVisible] = useState(false);
  const [threshold, setThreshold] = useState(Infinity);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useFloorMapDispatcher();

  const resize = useResize();
  useEffect(() => {
    if (visible) return;
    const initialTop = cardRef.current?.getBoundingClientRect().top ?? Infinity;
    const initialScroll = window.scrollY;
    const threshold = initialTop + initialScroll - window.innerHeight + 80;
    setThreshold(threshold);
  }, [visible || resize]);

  useScrollEffect(
    ({ scrollY }) => {
      if (threshold < scrollY) setVisible(true);
    },
    [!visible, threshold],
  );

  return (
    <Card ref={cardRef} visible={visible}>
      <div>
        <EventImage image={image} />
        <Room>{supportedRoomMap[room].name}</Room>
      </div>
      <RightItem>
        <Name>{name}</Name>
        <TagWrapper>
          {tag.map((tagKey) => (
            <EventTag tagKey={tagKey} key={tagKey} />
          ))}
        </TagWrapper>
        <Description>{description}</Description>
      </RightItem>
      <ShowDetailButtonWrapper onClick={() => dispatch({ room })}>
        <ShowDetailButton />
      </ShowDetailButtonWrapper>
    </Card>
  );
};

interface CardProps {
  visible: boolean;
}

const Card = styled.div<CardProps>`
  display: grid;
  grid-template-columns: 11rem 1rem 1fr 0.6rem 2.2rem;
  padding: 1rem;
  margin: 0 0 0.8rem;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 0.8rem;
  transition: transform 0.5s cubic-bezier(0.17, 0.67, 0.52, 1.26), opacity 0.5s ease-out;
  overflow: hidden;
  transform: ${({ visible }) => (visible ? 'none' : 'translateX(-30vw)')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

const Room = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  width: 11rem;
  margin-top: 0.8rem;
  background-color: ${Colors.TheCyan};
  border-radius: 1rem;
  color: #fff;
  font-size: 1.4rem;
  font-weight: bold;
  white-space: pre-wrap;
`;

const Name = styled.h1`
  font-size: 2.4rem;
  color: #333;
  margin: 0.4rem 0 0;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 1.4rem;
  color: #333;
  width: 100%;
  display: block;
  align-items: center;
  margin: 0.8rem 0 0;
  font-weight: bold;
`;

const ShowDetailButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 2rem;
  padding-left: 6px;
  margin-left: -3px;
  border-left: #3338 1px solid;
  grid-column: 5 / 6;
`;

const ShowDetailButton = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-right: 3px solid #333;
  border-bottom: 3px solid #333;
  transform: rotate(-0.125turn);
  transition: transform 0.8s ease-in-out;
`;

const RightItem = styled.div`
  grid-column: 3 / 4;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 0 -0.2rem;
  width: calc(100% + 0.4rem);
`;

export default EventListItem;
