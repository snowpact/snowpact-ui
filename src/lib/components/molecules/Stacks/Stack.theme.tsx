export type StacksTheme = {
  base: string;
  horizontal: {
    on: string;
    off: string;
  };
  stacksList: {
    base: string;
    horizontal: string;
  };
  stackList: {
    base: string;
    horizontal: {
      on: string;
      off: string;
    };
  };
  title: {
    base: string;
    horizontal: string;
    text: string;
  };
  stackItem: {
    base: string;
    horizontal: {
      on: string;
      off: string;
    };
    text: string;
    link: {
      base: string;
      withLink: string;
    };
    stackImage: {
      base: string;
      withGrayscale: string;
    };
  };
};

export const STACKS_THEME: StacksTheme = {
  base: 'mt-2 flex gap-4',
  horizontal: {
    on: 'flex-row',
    off: 'max-w-[150px] flex-col text-center gap-4'
  },
  stacksList: {
    base: 'flex flex-wrap place-content-center gap-6 p-2',
    horizontal: 'flex-col gap-6 items-center'
  },
  stackList: {
    base: 'flex p-2',
    horizontal: {
      on: 'flex-row items-center gap-4',
      off: 'flex-col justify-center gap-4'
    }
  },
  title: {
    base: 'my-2',
    horizontal: 'sm:rotate-360 w-36 self-center',
    text: 'text-xl text-black'
  },
  stackItem: {
    base: 'mt-2 flex gap-4',
    horizontal: {
      on: 'flex-row',
      off: 'flex-col'
    },
    text: 'flex-1 text-sm font-[520] text-black',
    link: {
      base: 'inline-block min-w-[120px] rounded-xl px-2 py-6 text-center shadow-lg margin-auto',
      withLink: 'duration-300 ease-in hover:shadow-xl'
    },
    stackImage: {
      base: 'mb-2 inline-block h-10 w-10 object-contain',
      withGrayscale: 'opacity-50 grayscale'
    }
  }
};
