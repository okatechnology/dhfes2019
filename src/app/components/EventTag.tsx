import React from 'react';
import styled from 'styled-components';
import TagMap from '../utils/supportedTagMap';

interface TagProps {
  tagKey: OneOfTagKey;
}

const EventTag = ({ tagKey }: TagProps) => {
  const { color, name } = TagMap[tagKey];
  return <Tag color={color}>{name}</Tag>;
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
