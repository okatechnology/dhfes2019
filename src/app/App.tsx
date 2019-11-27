import React from 'react';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import GlobalStateProvider from './globalState';
import { ResizeProvider } from './utils/useResize';
import { ScrollEffectProvider } from './utils/useScrollEffect';
import GlobalStyle from './globalStyle';

const App = () => (
  <GlobalStateProvider>
    <ScrollEffectProvider>
      <ResizeProvider>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ResizeProvider>
    </ScrollEffectProvider>
  </GlobalStateProvider>
);

export default App;
