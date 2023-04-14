export type PostAuthorTheme = {
  base: string;
  image: {
    base: string;
  };
  infos: {
    base: string;
    author: {
      base: string;
    };
    post: {
      base: string;
      date: string;
      readingTime: string;
    };
  };
};

export const POST_AUTHOR_THEME: PostAuthorTheme = {
  base: 'list-none rounded-lg bg-white text-sm font-medium text-gray-900',
  image: {
    base: 'h-12 w-12 rounded-full'
  },
  infos: {
    base: 'self-center',
    author: {
      base: 'align-left relative font-normal font-900 text-sm uppercase font-[540]'
    },
    post: {
      base: 'flex gap-1',
      date: 'align-left relative font-normal text-xs text-black contrast-0 uppercase font-light text-gray-500',
      readingTime: 'align-left relative font-normal text-xs text-black contrast-0 uppercase font-light text-gray-500'
    }
  }
};
