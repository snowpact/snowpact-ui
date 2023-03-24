export type PaginationTheme = {
  base: string;
  layout: {
    table: {
      base: string;
      span: string;
    };
  };
  pages: {
    base: string;
    showIcon: string;
    previous: {
      base: string;
      icon: string;
    };
    next: {
      base: string;
      icon: string;
    };
    selector: {
      base: string;
      active: string;
    };
  };
};

export const PAGINATION_THEME: PaginationTheme = {
  base: '',
  layout: {
    table: {
      base: 'text-sm text-gray-700',
      span: 'font-semibold text-gray-900'
    }
  },
  pages: {
    base: 'xs:mt-0 mt-2 inline-flex items-center -space-x-px',
    showIcon: 'inline-flex',
    previous: {
      base: 'ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700:bg-gray-700:text-white',
      icon: 'h-5 w-5'
    },
    next: {
      base: 'rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700:bg-gray-700:text-white',
      icon: 'h-5 w-5'
    },
    selector: {
      base: 'w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700:bg-gray-700:text-white',
      active: 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700'
    }
  }
};
