import React, { useState } from 'react';
import styled from 'styled-components';
import EventSortMenu from './EventSortMenu';

interface EventSortBarProps {
  sortKey: keyof EventItem;
  setSortKey: (key: keyof EventItem) => void;
}

const EventSortBar = ({ sortKey, setSortKey }: EventSortBarProps) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen((curr) => !curr);
  };

  const close = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <Wrapper>
      <Button onClick={toggleOpen}>並び替え</Button>
      <EventSortMenu open={open} setSortKey={setSortKey} sortKey={sortKey} />
      <CloseButton onClick={close} open={open} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 4rem;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #fff;
  background-color: #ff6600;
  z-index: 9999;
`;

const Button = styled.a`
  width: 10rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 0 0 0 auto;
  border-left: 1px solid #fff;
  font-size: 1.6rem;
`;

const CloseButton = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -9999;
  height: ${window.innerHeight}px;
`;

export default EventSortBar;
