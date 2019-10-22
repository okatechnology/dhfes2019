import React from 'react';
import styled from 'styled-components';

const Event: PageComponent = ({ match }) => {
  const { id } = match.params;
  return <Root>Hello, World. Event: {id}</Root>;
};

const Root = styled.div`
  font-size: 20px;
`;

export default Event;
