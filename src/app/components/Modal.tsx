import React, { ReactNode, useState, AnimationEventHandler, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

interface ModalProps {
  visible: boolean;
  children: ReactNode;
  className?: string;
}

const Modal = ({ children, visible, className }: ModalProps) => {
  const [display, setDisplay] = useState(visible);
  const handleAnimationEnd: AnimationEventHandler = (e) => {
    setDisplay(e.animationName === fadeIn.getName());
  };
  const defer = useMemo(() => children, [visible || display]);
  return (
    <Wrapper onAnimationEnd={handleAnimationEnd} cssDisplay={display} visible={visible} className={className}>
      {visible && display ? children : defer}
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

interface WrapperProps extends ModalProps {
  cssDisplay: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  display: ${({ visible, cssDisplay: display }) => (visible || display ? 'block' : 'none')};
  animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 0.3s ease-in 0s 1;
  z-index: 100;
`;

export default Modal;
