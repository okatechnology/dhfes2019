import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

interface Item {
  text: string;
  sortBy: keyof EventItem;
}

interface EventSortMenu {
  onClickSortBy: (by: keyof EventItem) => void;
  opening: boolean;
  sortBy: keyof EventItem;
}

const item: Item[] = [
  {
    text: '教室で並び替え',
    sortBy: 'place',
  },
  {
    text: '名前で並び替え',
    sortBy: 'ruby',
  },
];

const EventSortMenu = ({ onClickSortBy, opening, sortBy }: EventSortMenu) => {
  const [display, setDisplay] = useState(false);

  useMemo(() => {
    setDisplay(opening);
  }, [opening]);

  const listItem = item.map((value) => (
    <ListItem key={value.sortBy} onClick={() => onClickSortBy(value.sortBy)}>
      {value.sortBy === sortBy && '✔ '}
      {value.text}
    </ListItem>
  ));
  return <Wrapper style={(!display && { display: 'none' }) || undefined}>{listItem}</Wrapper>;
};

const Wrapper = styled.ul`
  width: 50%;
  position: absolute;
  right: 0;
  margin: 1px 0 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  background-color: #ff6600;
  color: #fff;
  list-style: none;
  font-size: 1.6rem;
  border-bottom: 1px solid #fff;
  position: relative;
`;

export default EventSortMenu;
