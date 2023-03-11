export type CameraRollTheme = {
  base: string;
  item: {
    base: string;
    image: string;
    button: string;
    hoverIcon: string;
    modalImage: string;
  };
};

export const CAMERA_ROLL_THEME: CameraRollTheme = {
  base: 'grid gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3',
  item: {
    base: 'relative flex flex-col',
    image: 'duration:1300 h-full object-cover transition',
    button: 'absolute flex h-full w-full items-center justify-center bg-white opacity-0 hover:opacity-60',
    hoverIcon: 'w-10 h-10',
    modalImage: 'rounded-lg'
  }
};
