import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import ImageBox from './ImageBox';
import { px, vw } from '../utils/units';
import useResize from '../utils/useResize';
import img from '../assets/floor-map.svg';

interface MapProps {
  className?: string;
  rect: MapRect;
  point: MapPoint;
}

const FloorMap = ({ className, rect, point }: MapProps) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  return (
    <div ref={setContainer} className={className}>
      {useMemo(
        () => (
          <CustomImageBox container={container} rect={rect} src={img} point={point} />
        ),
        [container, rect, point, useResize()],
      )}
    </div>
  );
};

interface CustomImageBox {
  container: HTMLDivElement | null;
}

const CustomImageBox = styled(ImageBox)<CustomImageBox>`
  width: 100%;
  height: ${({ container }) => (container ? px(container.clientWidth) : vw(90))};
`;

export default FloorMap;
