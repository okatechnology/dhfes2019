import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

interface ModalProps {
  visible: boolean;
  children: ReactNode;
}

const Modal = ({ children, visible }: ModalProps) => {
  return <Container visible={visible}>{children}</Container>;
};

const fadeIn = keyframes`
  from {
    display: none;
    opacity: 0;
  }
  to {
    display: block;
    opacity: 1;
  }
`;

const Container = styled.div<ModalProps>`
  position: fixed;
  top: 30px;
  left: 20px;
  right: 20px;
  bottom: 30px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  animation: ${fadeIn} 0.3s ease-in 1 ${({ visible }) => (visible ? 'normal' : 'reverse')};
`;

export default Modal;
