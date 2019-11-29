import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import ImageBox from './ImageBox';
import { px, vw } from '../utils/units';
import useResize from '../utils/useResize';
import floorMapImage from '../assets/floor-map.svg';
import RoomMap from '../utils/supportedRoomMap';
import Modal from './Modal';
import { BackgroundStyle } from '../globalStyle';

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
          <Wrapper ref={setContainer} container={container}>
            <CustomImageBox rect={rect} src={floorMapImage} point={point} />
          </Wrapper>
        );
      }, [container, room, useResize()])}
    </CustomModal>
  );
};

interface WrapperProps {
  container: HTMLElement | null;
}
const Wrapper = styled.div<WrapperProps>`
  border: #050691 3px solid;
  ${BackgroundStyle}
  border-radius: 10px;
  overflow: hidden;
  width: calc(100% - 3.2rem);
  height: ${({ container }) => (container ? px(container.clientWidth) : vw(90))};
  position: absolute;
  top: 0;
  bottom: 15vw;
  margin: auto 1.6rem;
`;

const CustomImageBox = styled(ImageBox)`
  width: 100%;
  height: 100%;
  background-color: #fff3;
`;

const CustomModal = styled(Modal)`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #aaae;
`;

export default FloorMapComponent;
