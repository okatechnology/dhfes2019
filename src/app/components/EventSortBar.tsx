import React, { useState } from 'react';
import styled from 'styled-components';
import EventSortMenu from './EventSortMenu';

interface EventSortBarProps {
  sortBy: keyof EventItem;
  onSetSortBy: (evItem: keyof EventItem) => void;
}

const EventSortBar = ({ sortBy, onSetSortBy }: EventSortBarProps) => {
  const [opening, setOpening] = useState(false);

  const onButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (opening) {
      setOpening(false);
    } else {
      setOpening(true);
    }
  };

  const onHideMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpening(false);
  };

  return (
    <Wrapper>
      <Button onClick={onButtonClick}>並び替え</Button>
      <EventSortMenu opening={opening} onClickSortBy={onSetSortBy} sortBy={sortBy} />
      <HideMenu onClick={onHideMenu} style={!opening ? { display: 'none' } : undefined} />
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

const HideMenu = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -9999;
  height: ${window.innerHeight}px;
`;

export default EventSortBar;
