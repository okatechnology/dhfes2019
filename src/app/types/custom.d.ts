import tagMap from '../utils/supportedTagMap';
import placeMap from '../utils/supportedPlaceMap';

declare global {
  interface GlobalState {}

  type NullableKey<T extends object> = {
    [K in keyof T]-?: (null extends T[K] ? K : never) | (undefined extends T[K] ? K : never);
  }[keyof T];

  type PartialIfOptional<T extends object> = {
    [K in keyof (Omit<T, NullableKey<T>> & { [K in NullableKey<T>]?: never })]: T[K];
  };

  interface MapRect extends Pick<ClientRect, 'bottom' | 'left' | 'right' | 'top'> {}
  interface MapPoint extends Pick<MapRect, 'top' | 'left'> {}

  interface EventItem {
    readonly name: string;
    readonly ruby: string;
    readonly description: string;
    readonly tag: Array<keyof typeof tagMap>;
    readonly image: string;
    readonly place: keyof typeof placeMap;
  }
}
