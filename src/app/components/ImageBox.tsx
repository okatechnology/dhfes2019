import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { px } from '../utils/units';
import source from '../assets/pointer.png';

const WIDTH = 100;

interface ImageBoxProps {
  className?: string;
  rect: MapRect;
  src: string;
  pointerSize?: number;
  point?: MapPoint;
}

const ImageBox = ({ rect, src, className, point, pointerSize = 60 }: ImageBoxProps) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  return (
    <Wrapper className={className} ref={setContainer}>
      <Box transformState={TransformState(container, rect, point)} size={pointerSize}>
        <img src={src} />
        {point && <div children={<img src={source} />} />}
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  transform-origin: center;
`;

interface BoxProps {
  transformState: ReturnType<typeof TransformState>;
  size: number;
}
const TransformState = (
  container: HTMLDivElement | null,
  { left, right, bottom, top }: MapRect,
  point: MapPoint | undefined,
) => {
  const containerWidth = container?.clientWidth ?? 100;
  const aspect = 4500 / 7762;
  const coef = 100 / (100 - (left + right));
  const HEIGHT = WIDTH * aspect;
  const width = containerWidth * coef;

  const Ox = (right - left) / 2;
  const Oy = (bottom - top) / 2;

  const scale = width / WIDTH;
  const x = Ox * 1e-2 * WIDTH;
  const y = Oy * 1e-2 * HEIGHT;

  const state = { scale, x, y, Px: 0, Py: 0 };
  if (point) {
    const Px = (point.left - 50 + Ox) * 1e-2 * WIDTH;
    const Py = (point.top - 50 + Oy) * 1e-2 * HEIGHT;
    return { ...state, Px, Py };
  }

  return state;
};

const rotate = keyframes`
  0% {
    transform: rotateY(0deg) translateY(0px);
  }
  50% {
    transform: rotateY(120deg) translateY(10px);
  }
  100% {
    transform: rotateY(360deg) translateY(0px);
  }
`;

const Box = styled.div<BoxProps>`
  position: absolute;
  width: ${px(WIDTH)};
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transform: ${({ transformState: { scale } }) => `scale(${scale})`};
  & > * {
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  & > img {
    transform: ${({ transformState: { x, y } }) => `translateX(${px(x)}) translateY(${px(y)})`};
    display: block;
    width: 100%;
  }
  & > div {
    width: 0;
    height: 0;
    z-index: 100;
    transform: ${({ transformState: { Px, Py, scale } }) =>
      `translateX(${px(Px)}) translateY(${px(Py)}) scale(${1 / scale})`};
    & > img {
      display: block;
      width: ${({ size }) => px(size)};
      animation: ${rotate} 0.8s linear infinite;
      position: absolute;
      left: ${({ size }) => px(-size / 2)};
      right: ${({ size }) => px(-size / 2)};
      bottom: 0;
      margin: auto;
    }
  }
`;

export default ImageBox;
