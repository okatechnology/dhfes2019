import React, { useContext, FC } from 'react';

const useGlobalState = () => useContext(useGlobalState.context);
useGlobalState.context = React.createContext<GlobalState>(null as any);

const GlobalStateProvider: FC = ({ children }) => {
  return <useGlobalState.context.Provider value={{}} children={children} />;
};

export default GlobalStateProvider;
