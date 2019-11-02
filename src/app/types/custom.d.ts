interface GlobalState {}

type NullableKey<T extends object> = {
  [K in keyof T]-?: (null extends T[K] ? K : never) | (undefined extends T[K] ? K : never);
}[keyof T];

type PartialIfOptional<T extends object> = {
  [K in keyof (Omit<T, NullableKey<T>> & { [K in NullableKey<T>]?: never })]: T[K];
};

type a = NullableKey<BaseButtonProps>;
