import React from 'react';
import styled from 'styled-components';
import tagMap from '../utils/supportedTagMap';

interface TagProps {
  name: keyof typeof tagMap;
}

const EventTag = ({ name }: TagProps) => {
  return <Tag color={tagMap[name].color}>{name}</Tag>;
};

interface StyleProps {
  color: string;
}
const Tag = styled.p<StyleProps>`
  background-color: ${(props) => props.color};
  color: #fff;
  font-size: 1.4rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  line-height: 1;
  padding: 0.4rem;
  margin: 0.2rem;
`;

export default EventTag;
