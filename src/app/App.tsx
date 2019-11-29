import React from 'react';
import { GlobalStateProvider } from './globalState';
import { ResizeProvider } from './utils/useResize';
import { ScrollEffectProvider } from './utils/useScrollEffect';
import GlobalStyle from './globalStyle';
import Events from './pages/Events';

const App = () => (
  <GlobalStateProvider>
    <ScrollEffectProvider>
      <ResizeProvider>
        <Events />
        <GlobalStyle />
      </ResizeProvider>
    </ScrollEffectProvider>
  </GlobalStateProvider>
);

export default App;
