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
  width: 10rem;
  height: 10rem;
  border-radius: 0.8rem;
`;

export default EventImage;
