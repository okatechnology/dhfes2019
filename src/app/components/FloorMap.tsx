import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import ImageBox from './ImageBox';
import { px, vw } from '../utils/units';
import useResize from '../utils/useResize';
import floorMapImage from '../assets/floor-map.svg';
import RoomMap from '../utils/supportedRoomMap';

interface FloorMapProps {
  room: OneOfRoomKey | null;
  close: () => void;
}

const FloorMapComponent = ({ room }: FloorMapProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  return useMemo(() => {
    const item = room && RoomMap[room];
    if (!item) return null;
    const { rect, point } = item;
    return (
      <div ref={setContainer}>
        <CustomImageBox container={container} rect={rect} src={floorMapImage} point={point} />
      </div>
    );
  }, [container, room, useResize()]);
};

interface CustomImageBoxProps {
  container: HTMLElement | null;
}

const CustomImageBox = styled(ImageBox)<CustomImageBoxProps>`
  width: 100%;
  height: ${({ container }) => (container ? px(container.clientWidth) : vw(90))};
`;

export default FloorMapComponent;
