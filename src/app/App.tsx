import React from 'react';
import styled from 'styled-components';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import GlobalStateProvider from './globalState';

const App = () => (
  <GlobalStateProvider>
    <BrowserRouter>
      <Root>
        <Router />
      </Root>
    </BrowserRouter>
  </GlobalStateProvider>
);

const Root = styled.div`
  font-size: 20px;
`;

export default App;
