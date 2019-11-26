import React, { ReactNode, useState, AnimationEventHandler, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

interface ModalProps {
  visible: boolean;
  children: ReactNode;
}

const Modal = ({ children, visible }: ModalProps) => {
  const [display, setDisplay] = useState(visible);
  const handleAnimationEnd: AnimationEventHandler = (e) => {
    setDisplay(e.animationName === fadeIn.getName());
  };
  const defer = useMemo(() => children, [visible || display]);
  return (
    <Container onAnimationEnd={handleAnimationEnd} display={display} visible={visible}>
      {visible && display ? children : defer}
    </Container>
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

const Container = styled.div<ModalProps & { display: boolean }>`
  position: fixed;
  top: 30px;
  left: 20px;
  right: 20px;
  bottom: 30px;
  display: ${({ visible, display }) => (visible || display ? 'block' : 'none')};
  animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 0.3s ease-in 0s 1;
  z-index: 100;
`;

export default Modal;
