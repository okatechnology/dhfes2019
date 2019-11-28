import React from 'react';
import styled from 'styled-components';

interface EventImageProps {
  image: string;
}

const EventImage = ({ image }: EventImageProps) => {
  return <CustomImg src={image} />;
};

interface StyleProps extends Omit<EventImageProps, 'image'> {}
const CustomImg = styled.img<StyleProps>`
  width: 11rem;
  height: 11rem;
  border-radius: 0.8rem;
`;

export default EventImage;
