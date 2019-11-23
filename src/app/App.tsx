import React from 'react';
import styled from 'styled-components';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import GlobalStateProvider from './globalState';
import { ResizeProvider } from './utils/useResize';

const App = () => (
  <GlobalStateProvider>
    <ResizeProvider>
      <BrowserRouter>
        <Root>
          <Router />
        </Root>
      </BrowserRouter>
    </ResizeProvider>
  </GlobalStateProvider>
);

const Root = styled.div`
  font-size: 20px;
`;

export default App;
