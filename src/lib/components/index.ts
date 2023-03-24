export * from './atoms';
export * from './bosons';
export * from './molecules';
export * from './organisms';

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
