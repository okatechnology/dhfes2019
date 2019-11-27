import React, { useState } from 'react';
import styled from 'styled-components';
import FilterMenu from './FilterMenu';
import Modal from './Modal';
import BaseButton from './BaseButton';
import { vw } from '../utils/units';

const EventBottomBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <CustomModal visible={true}>
        <Button to={() => setOpen(!open)}>{open ? '✔' : '🔎'}</Button>
      </CustomModal>
      <FilterMenu open={open} />
    </div>
  );
};

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

export default EventBottomBar;
