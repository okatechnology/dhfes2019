import React from 'react';
import styled from 'styled-components';
import TagMap, { AllTagKeyList } from '../utils/supportedTagMap';
import Modal from './Modal';
import useGlobalState from '../globalState';

interface FilterMenuProps {
  open: boolean;
}

const FilterMenu = ({ open }: FilterMenuProps) => {
  const { setShownTagMap, shownTagMap } = useGlobalState();
  return (
    <CustomModal visible={open}>
      <Wrapper>
        {AllTagKeyList.map((key) => {
          const add = () => setShownTagMap((curr) => ({ ...curr, [key]: !curr[key] }));
          const { color, name } = TagMap[key];
          return (
            <ListItem key={key} bgColor={color} onClick={add}>
              <div>{name}</div>
              <div>{shownTagMap[key] && '✔'}</div>
            </ListItem>
          );
        })}
      </Wrapper>
    </CustomModal>
  );
};

const CustomModal = styled(Modal)`
  bottom: calc(15vw + 40px);
  right: 20px;
  width: 220px;
`;

const Wrapper = styled.ul`
  margin: 0;
  padding: 0 0 5rem;
  height: 40vh;
  border: #aaa5 3px solid;
  background-color: #fff5;
  border-radius: 1.5rem;
  overflow: auto;
`;

const ListItem = styled.li<{ bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  background-color: ${({ bgColor }) => `${bgColor}d`};
  color: #fff;
  list-style: none;
  font-size: 1.8rem;
  position: relative;
  padding: 0 0.6rem;
  margin-bottom: 2px;
  border-radius: 4px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default FilterMenu;
