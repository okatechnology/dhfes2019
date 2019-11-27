import React, { useContext, FC, useState } from 'react';
import { AllTagKeyList } from './utils/supportedTagMap';

const useGlobalState = () => useContext(useGlobalState.context);
useGlobalState.context = React.createContext<GlobalState>(null as any);

export const GlobalStateProvider: FC = ({ children }) => {
  const [shownTagMap, setShownTagMap] = useState(() => {
    return AllTagKeyList.reduce<ShownTagMap>((acc, key) => {
      acc[key] = false;
      return acc;
    }, {} as any);
  });

  return <useGlobalState.context.Provider value={{ shownTagMap, setShownTagMap }} children={children} />;
};

export default useGlobalState;
