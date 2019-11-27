import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import TagMap from '../utils/supportedTagMap';
import toggleItemOfArray from '../utils/toggleItemOfArray';

interface SortMenuItem {
  text: string;
  key: keyof EventItem;
}

interface BottomSortMenuProps {
  open: boolean;
  setSortKey: (key: keyof EventItem) => void;
  sortKey: keyof EventItem;
  setFilterKeyArr?: undefined;
  filterKeyArr?: undefined;
  menuType: 'sort';
}

interface BottomFilterMenuProps {
  open: boolean;
  setSortKey?: undefined;
  sortKey?: undefined;
  setFilterKeyArr: (key: OneOfTagKey[]) => void;
  filterKeyArr: OneOfTagKey[];
  menuType: 'filter';
}

const sortMenuItems: SortMenuItem[] = [
  {
    text: '教室で並び替え',
    key: 'room',
  },
  {
    text: '名前で並び替え',
    key: 'name',
  },
];

const filterMenuItems: OneOfTagKey[] = Object.keys(TagMap) as OneOfTagKey[];

const EventSortMenu = ({
  open,
  setSortKey,
  sortKey,
  setFilterKeyArr,
  filterKeyArr,
  menuType,
}: BottomSortMenuProps | BottomFilterMenuProps) => {
  const [visible, setVisible] = useState(false);

  useMemo(() => {
    setVisible(open);
  }, [open]);

  return (
    <Wrapper visible={visible} menuType={menuType}>
      {menuType === 'sort' &&
        sortMenuItems.map(({ key, text }) => (
          <ListItem key={key} onClick={() => setSortKey?.(key)}>
            <div>{key === sortKey && '✔'}</div>
            <div>{text}</div>
          </ListItem>
        ))}
      {menuType === 'filter' && (
        <ListItem
          onClick={() => {
            setFilterKeyArr?.([]);
          }}
          center
        >
          すべて解除
        </ListItem>
      )}
      {menuType === 'filter' &&
        filterMenuItems.map((value) => (
          <ListItem
            key={value}
            onClick={() => filterKeyArr && setFilterKeyArr?.(toggleItemOfArray(filterKeyArr, value))}
          >
            <div>{filterKeyArr?.includes(value) && '👀'}</div>
            <div>{value}</div>
          </ListItem>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul<{ visible: boolean; menuType: 'sort' | 'filter' }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  width: 50%;
  position: fixed;
  right: ${({ menuType }) => (menuType === 'filter' ? 'auto' : 0)};
  left: ${({ menuType }) => (menuType === 'sort' ? 'auto' : 0)};
  bottom: 5rem;
  margin: 1px 0 0;
  padding: 0;
  z-index: 9999;
`;

const ListItem = styled.li<{ center?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'space-between')};
  height: 5rem;
  background-color: #ff6600;
  color: #fff;
  list-style: none;
  font-size: 1.6rem;
  border-top: 1px solid #fff;
  position: relative;
  padding: 0 2rem;
`;

export default EventSortMenu;
