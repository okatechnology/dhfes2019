import React, { createContext, useContext, useState, useEffect, FC } from 'react';
import { debounce } from './debounce';

interface ResizeState {
  width: number;
  height: number;
}

const ResizeState = () => ({ height: window.innerHeight, width: window.innerWidth });
const initialState = ResizeState();

const useResize = () => useContext(useResize.context);
useResize.context = createContext<ResizeState>(initialState);

export const ResizeProvider: FC = ({ children }) => {
  const [state, setState] = useState<ResizeState>(initialState);

  useEffect(() => {
    const handler = debounce(() => setState(ResizeState()), 100);

    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return <useResize.context.Provider value={state} children={children} />;
};

export default useResize;
