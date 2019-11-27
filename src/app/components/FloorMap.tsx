import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import ImageBox from './ImageBox';
import { px, vw } from '../utils/units';
import useResize from '../utils/useResize';
import floorMapImage from '../assets/floor-map.svg';
import RoomMap from '../utils/supportedRoomMap';
import BaseButton from './BaseButton';
import Modal from './Modal';

interface FloorMapProps {
  room: OneOfRoomKey | null;
  close: () => void;
}

const FloorMapComponent = ({ room, close }: FloorMapProps) => {
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
            <CustomButton to={close}>CLOSE</CustomButton>
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

const CustomButton = styled(BaseButton)``;

const CustomModal = styled(Modal)`
  top: 20px;
  bottom: 100px;
  left: 16px;
  right: 16px;
`;

export default FloorMapComponent;
