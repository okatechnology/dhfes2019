declare module '*.jpg' {
  const _path: string;
  export default _path;
}

declare module '*.png' {
  const _path: string;
  export default _path;
}

declare module '*.svg' {
  const _path: string;
  export default _path;
}

interface GlobalState {}

type NullableKey<T extends object> = {
  [K in keyof T]-?: (null extends T[K] ? K : never) | (undefined extends T[K] ? K : never);
}[keyof T];

type PartialIfOptional<T extends object> = {
  [K in keyof (Omit<T, NullableKey<T>> & { [K in NullableKey<T>]?: never })]: T[K];
};

interface MapRect extends Pick<ClientRect, 'bottom' | 'left' | 'right' | 'top'> {}
interface MapPoint extends Pick<MapRect, 'top' | 'left'> {}
