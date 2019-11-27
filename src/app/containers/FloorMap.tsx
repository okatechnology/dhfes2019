import React, { createContext, useContext, useState, Dispatch, FC } from 'react';
import FloorMapComponent from '../components/FloorMap';

interface FloorMapEntry {
  room: OneOfRoomKey | null;
}

export const useFloorMapDispatcher = () => useContext(useFloorMapDispatcher.context);
useFloorMapDispatcher.context = createContext<Dispatch<FloorMapEntry | null>>(() => void 0);

export const useFloorMapEntry = () => useContext(useFloorMapEntry.context);
useFloorMapEntry.context = createContext<FloorMapEntry | null>(null);

export const FloorMapProvider: FC = ({ children }) => {
  const [entry, dispatch] = useState<FloorMapEntry | null>(null);
  return (
    <useFloorMapEntry.context.Provider value={entry}>
      <useFloorMapDispatcher.context.Provider value={dispatch}>{children}</useFloorMapDispatcher.context.Provider>
    </useFloorMapEntry.context.Provider>
  );
};

const FloorMap = () => <FloorMapComponent room={useFloorMapEntry()?.room ?? null} />;

export default FloorMap;
