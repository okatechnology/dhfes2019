import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from './Modal';
import BaseButton from './BaseButton';
import { vw } from '../utils/units';
import Colors from '../utils/colors';
import useScrollEffect from '../utils/useScrollEffect';

interface FixedButtonProps extends Pick<BaseButtonProps, 'to'> {
  type: keyof typeof IconMap;
}

const FixedButton = ({ to, type }: FixedButtonProps) => {
  const [visible, setVisible] = useState(false);
  useScrollEffect(
    ({ scrollY }) => {
      if (scrollY > 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    },
    [true],
  );
  return (
    <CustomModal visible={visible}>
      <Button to={to} children={IconMap[type]} />
    </CustomModal>
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
  background-color: ${Colors.TheMagenta};
  color: #ddd;
  border-radius: 50%;
  font-size: ${vw(size / 1.5)};
  transform-origin: center;
`;
const CustomModal = styled(Modal)`
  bottom: 20px;
  right: 20px;
`;

const Search = styled.span`
  display: block;
  transform: rotateZ(45deg) translateY(-6%);
  font-weight: 900;
`;

const Done = styled.span`
  display: block;
  transform: scale(0.8);
  font-weight: 900;
`;

const IconMap = {
  search: <Search children={'⚲'} />,
  done: <Done children={'✕'} />,
};

export default FixedButton;
