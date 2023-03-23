export * from './atoms';
export * from './atoms/Badge';
export * from './bosons';
export * from './molecules';
export * from './molecules/Accordion';
export * from './molecules/ButtonGroup';
export * from './molecules/Card';
export * from './molecules/Dropdown';
export * from './Navbar';
export * from './organisms/Carousel';
export * from './organisms/Footer';
export * from './Pagination';
export * from './Rating';
export * from './Sidebar';
export * from './Spinner';
export * from './Table';

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
