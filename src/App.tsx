import React from 'react';
import styled from 'styled-components';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Root>
      <Router />
    </Root>
  </BrowserRouter>
);

const Root = styled.div`
  font-size: 20px;
`;

export default App;
