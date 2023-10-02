export type NavBarTheme = {
  base: string;
  innerBase: string;
  brand: string;
  background: string;
  fixedTransparentStyle: string;
  collapse: {
    base: string;
    list: string;
  };
  link: {
    base: string;
    active: string;
    disabled: string;
    underline: string;
  };
  toggle: {
    base: string;
    icon: string;
  };
  group: {
    base: string;
    icon: {
      base: string;
      opened: string;
    };
    container: {
      base: string;
      closed: string;
    };
  };
};

export const NAV_BAR_THEME: NavBarTheme = {
  base: '',
  innerBase: '',
  brand: '',
  fixedTransparentStyle: '',
  background: '',
  collapse: {
    base: '',
    list: ''
  },
  link: {
    base: '',
    active: '',
    disabled: '',
    underline: ''
  },
  toggle: {
    base: '',
    icon: ''
  },
  group: {
    base: '',
    icon: {
      base: '',
      opened: ''
    },
    container: {
      base: '',
      closed: ''
    }
  }
};
