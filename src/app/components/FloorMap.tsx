import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import ImageBox from './ImageBox';
import { px, vw } from '../utils/units';
import useResize from '../utils/useResize';
import floorMapImage from '../assets/floor-map.svg';
import RoomMap from '../utils/supportedRoomMap';
import BaseButton from './BaseButton';

interface FloorMapProps {
  room: OneOfRoomKey | null;
  close: () => void;
}

const FloorMapComponent = ({ room, close }: FloorMapProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  return useMemo(() => {
    const item = room && RoomMap[room];
    if (!item) return null;
    const { rect, point } = item;
    return (
      <Wrapper ref={setContainer}>
        <CustomImageBox container={container} rect={rect} src={floorMapImage} point={point} />
        <CustomButton to={close} content={'CLOSE'} />
      </Wrapper>
    );
  }, [container, room, useResize()]);
};

const Wrapper = styled.div`
  background-color: #333a;
`;

interface CustomImageBoxProps {
  container: HTMLElement | null;
}

const CustomImageBox = styled(ImageBox)<CustomImageBoxProps>`
  width: 100%;
  height: ${({ container }) => (container ? px(container.clientWidth) : vw(90))};
`;

const CustomButton = styled(BaseButton)``;

export default FloorMapComponent;
