export * from './atoms';
export * from './atoms/Badge';
export * from './atoms/Rating';
export * from './atoms/Spinner';
export * from './bosons';
export * from './molecules';
export * from './molecules/Accordion';
export * from './molecules/ButtonGroup';
export * from './molecules/Card';
export * from './molecules/Dropdown';
export * from './molecules/Pagination';
export * from './molecules/Table';
export * from './organisms/Carousel';
export * from './organisms/Footer';
export * from './organisms/Navbar';
export * from './organisms/Sidebar';

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
