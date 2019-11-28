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
const Tag = styled.span<StyleProps>`
  background-color: ${(props) => props.color};
  color: #fff;
  font-size: 1.4rem;
  border-radius: 0.4rem;
  text-align: center;
  line-height: 1;
  padding: 0.4rem 0.4rem 0.4rem 0.5rem;
  margin: 0.2rem;
  font-weight: bold;
`;

export default EventTag;
