import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import ImageBox from './ImageBox';
import { px, vw } from '../utils/units';
import useResize from '../utils/useResize';
import floorMapImage from '../assets/floor-map.svg';
import RoomMap from '../utils/supportedRoomMap';
import Modal from './Modal';

interface FloorMapProps {
  room: OneOfRoomKey | null;
}

const FloorMapComponent = ({ room }: FloorMapProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  return (
    <CustomModal visible={!!room}>
      {useMemo(() => {
        const item = room && RoomMap[room];
        if (!item) return null;
        const { rect, point } = item;
        return (
          <Wrapper ref={setContainer}>
            <CustomImageBox container={container} rect={rect} src={floorMapImage} point={point} />
          </Wrapper>
        );
      }, [container, room, useResize()])}
    </CustomModal>
  );
};

const Wrapper = styled.div`
  background-color: #888e;
  border-radius: 10px;
  padding: 10px;
`;

interface CustomImageBoxProps {
  container: HTMLElement | null;
}

const CustomImageBox = styled(ImageBox)<CustomImageBoxProps>`
  width: 100%;
  height: ${({ container }) => (container ? px(container.clientWidth) : vw(90))};
  border: #aaa 6px solid;
  border-radius: 10px;
  overflow: hidden;
`;

const CustomModal = styled(Modal)`
  top: 20px;
  bottom: 100px;
  left: 16px;
  right: 16px;
`;

export default FloorMapComponent;
