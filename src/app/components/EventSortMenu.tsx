import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

interface Item {
  text: string;
  key: keyof EventItem;
}

interface EventSortMenu {
  setSortKey: (key: keyof EventItem) => void;
  open: boolean;
  sortKey: keyof EventItem;
}

const items: Item[] = [
  {
    text: '教室で並び替え',
    key: 'room',
  },
  {
    text: '名前で並び替え',
    key: 'name',
  },
];

const EventSortMenu = ({ setSortKey, open, sortKey }: EventSortMenu) => {
  const [visible, setVisible] = useState(false);

  useMemo(() => {
    setVisible(open);
  }, [open]);

  return (
    <Wrapper visible={visible}>
      {items.map(({ key, text }) => (
        <ListItem key={key} onClick={() => setSortKey(key)}>
          {key === sortKey && '✔ '}
          {text}
        </ListItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
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
