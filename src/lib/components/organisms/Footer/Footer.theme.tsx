export type FooterTheme = {
  base: string;
  container: string;
  bgDark: string;
  groupLink: {
    base: string;
    link: {
      base: string;
      href: string;
    };
    col: string;
  };
  icon: {
    base: string;
    size: string;
  };
  title: {
    base: string;
  };
  divider: {
    base: string;
  };
  copyright: {
    base: string;
    href: string;
    span: string;
  };
  brand: {
    base: string;
    img: string;
    span: string;
  };
};

export const FOOTER_THEME: FooterTheme = {
  base: 'w-full rounded-lg bg-white shadow md:flex md:items-center md:justify-between',
  container: 'w-full p-6',
  bgDark: 'bg-gray-800',
  groupLink: {
    base: 'flex flex-wrap text-sm text-gray-500',
    link: {
      base: 'last:mr-0 md:mr-6',
      href: 'hover:underline'
    },
    col: 'flex-col space-y-4'
  },
  icon: {
    base: 'text-gray-500:text-white',
    size: 'h-5 w-5'
  },
  title: {
    base: 'mb-6 text-sm font-semibold uppercase text-gray-500'
  },
  divider: {
    base: 'w-full my-6 border-gray-200 sm:mx-auto lg:my-8'
  },
  copyright: {
    base: 'text-sm text-gray-500 sm:text-center',
    href: 'ml-1 hover:underline',
    span: 'ml-1'
  },
  brand: {
    base: 'mb-4 flex items-center sm:mb-0',
    img: 'mr-3 h-8',
    span: 'self-center whitespace-nowrap text-2xl font-semibold text-gray-800'
  }
};
