import React from 'react';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import GlobalStateProvider from './globalState';
import { ResizeProvider } from './utils/useResize';
import GlobalStyle from './globalStyle';

const App = () => (
  <GlobalStateProvider>
    <ResizeProvider>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ResizeProvider>
  </GlobalStateProvider>
);

export default App;
