interface GlobalState {
  setShownTagMap: React.Dispatch<React.SetStateAction<ShownTagMap>>;
  shownTagMap: ShownTagMap;
}

type NullableKey<T extends object> = {
  [K in keyof T]-?: (null extends T[K] ? K : never) | (undefined extends T[K] ? K : never);
}[keyof T];

type PartialIfOptional<T extends object> = {
  [K in keyof (Omit<T, NullableKey<T>> & { [K in NullableKey<T>]?: never })]: T[K];
};

interface MapRect extends Pick<ClientRect, 'bottom' | 'left' | 'right' | 'top'> {}
interface MapPoint extends Pick<MapRect, 'top' | 'left'> {}

type OneOfTagKey = keyof typeof import('../utils/supportedTagMap')['default'];
type OneOfRoomKey = keyof typeof import('../utils/supportedRoomMap')['default'];

interface EventItem {
  name: string;
  description: string;
  image: string;
  tag: OneOfTagKey[];
  room: OneOfRoomKey;
}

interface ShownTagMap extends Record<OneOfTagKey, boolean> {}
