import React, { useState } from 'react';
import styled from 'styled-components';
import BottomMenu from './EventBottomMenu';

interface EventSortBarProps {
  sortKey: keyof EventItem;
  setSortKey: (key: keyof EventItem) => void;
  filterKeyArr: OneOfTagKey[];
  setFilterKeyArr: (keyArr: OneOfTagKey[]) => void;
}

const EventBottomBar = ({ sortKey, setSortKey, filterKeyArr, setFilterKeyArr }: EventSortBarProps) => {
  const [visiableMenu, setVisiableMenu] = useState<'sort' | 'filter' | null>(null);

  const onSetVisiableMenu = (target: 'sort' | 'filter' | null) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      setVisiableMenu((curr) => (target === curr ? null : target));
    };
  };

  return (
    <Wrapper>
      <BottomMenu
        menuType="filter"
        open={visiableMenu === 'filter'}
        filterKeyArr={filterKeyArr}
        setFilterKeyArr={setFilterKeyArr}
      />
      <Button onClick={onSetVisiableMenu('filter')}>フィルター</Button>
      <BottomMenu menuType="sort" open={visiableMenu === 'sort'} setSortKey={setSortKey} sortKey={sortKey} />
      <Button onClick={onSetVisiableMenu('sort')}>並び替え</Button>
      <CloseButton onClick={onSetVisiableMenu(null)} open={visiableMenu !== null} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #fff;
  background-color: #ff6600;
  z-index: 9999;
`;

const Button = styled.div`
  width: 10rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6600;
  background-color: #fff;
  margin: 0 1rem;
  border-radius: 999px;
  font-size: 1.6rem;
  z-index: 9999;
`;

const CloseButton = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9000;
  height: ${window.innerHeight}px;
`;

export default EventBottomBar;
