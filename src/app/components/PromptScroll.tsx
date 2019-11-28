import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import useScrollEffect from '../utils/useScrollEffect';

const PromptScroll = () => {
  const [visible, setVisible] = useState(true);
  useScrollEffect(
    ({ scrollY }) => {
      if (scrollY > 0) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    },
    [true],
  );
  return (
    <Wrapper visible={visible}>
      <Side position="left" />
      <Side position="right" />
    </Wrapper>
  );
};

const basicAnimation = keyframes`
  0% {
    transform: translateY(2rem);
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 0.5;
    transfrom: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-5rem);
  }
`;
const visibleAnimation = css`
  animation: ${basicAnimation} 2s linear infinite;
`;
const fadeOutAnimation = css`
  animation: ${fadeOut} 0.3s linear;
`;
interface WrapperProps {
  visible: boolean;
}
const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  ${({ visible }) => (visible ? visibleAnimation : fadeOutAnimation)}
  opacity: 0;
`;

const leftTransform = css`
  transform: rotate(30deg) translateX(0.4rem);
`;
const rightTransform = css`
  transform: rotate(-30deg) translateX(-0.4rem);
`;
const Side = styled.div<{ position: 'left' | 'right' }>`
  background-color: #fff;
  width: 3rem;
  height: 0.5rem;
  border: 1px solid #fff;
  border-radius: 9999px;
  ${({ position }) => (position === 'left' ? leftTransform : rightTransform)};
`;

export default PromptScroll;
