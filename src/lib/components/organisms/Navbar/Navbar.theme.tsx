export type NavBarTheme = {
  base: string;
  opened: string;
  innerBase: string;
  brand: string;
  background: string;
  fixedTransparentStyle: string;
  scrolledTransparentStyle: string;
  fixedSolidStyle: string;
  scrolledSolidStyle: string;
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
  opened: '',
  innerBase: '',
  brand: '',
  fixedTransparentStyle: '',
  scrolledTransparentStyle: '',
  fixedSolidStyle: '',
  scrolledSolidStyle: '',
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
