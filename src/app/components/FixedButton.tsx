import React from 'react';
import styled from 'styled-components';

import Modal from './Modal';
import BaseButton from './BaseButton';
import { vw } from '../utils/units';

const IconMap = {
  search: '🔎',
  done: '✔',
};

interface FixedButtonProps extends Pick<BaseButtonProps, 'to'> {
  type: keyof typeof IconMap;
}

const FixedButton = ({ to, type }: FixedButtonProps) => (
  <CustomModal visible={true}>
    <Button to={to} children={IconMap[type]} />
  </CustomModal>
);

const size = 15;
const Button = styled(BaseButton)`
  width: ${vw(size)};
  height: ${vw(size)};
  display: block;
  text-align: center;
  line-height: ${vw(size)};
  text-decoration: none;
  background-color: #ff6600;
  color: #1e1;
  border-radius: 50%;
  font-size: ${vw(size / 2)};
`;
const CustomModal = styled(Modal)`
  bottom: 20px;
  right: 20px;
`;

export default FixedButton;
