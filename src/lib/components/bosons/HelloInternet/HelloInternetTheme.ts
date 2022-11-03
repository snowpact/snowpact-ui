import { DeepPartial } from '../..';
import type { AlertColors } from '../../Alert';
import type { ButtonTheme } from '../../atoms/Button/Button.theme';
import type { ProgressColors, ProgressSizes } from '../../atoms/Progress';
import type { SectionTheme } from '../../atoms/Section/Section.theme';
import type { TooltipTheme } from '../../atoms/Tooltip/Tooltip.theme';
import type { AvatarSizes } from '../../Avatar';
import type { BadgeColors, BadgeSizes } from '../../Badge';
import { FlowbiteDropdownTheme } from '../../Dropdown';
import type {
  HelperColors,
  LabelColors,
  SelectColors,
  SelectSizes,
  TextareaColors,
  TextInputColors,
  TextInputSizes
} from '../../FormControls';
import type { ModalPositions, ModalSizes } from '../../Modal';
import type { StarSizes } from '../../Rating';
import type { SidebarCTAColors } from '../../Sidebar/SidebarCTA';
import type { SpinnerColors, SpinnerSizes } from '../../Spinner';
import type { TabStyleItem, TabStyles } from '../../Tab';

export type CustomHelloInternetTheme = DeepPartial<HelloInternetTheme>;

export interface HelloInternetTheme extends Record<string, unknown> {
  accordion: {
    base: string;
    content: {
      base: string;
    };
    flush: FlowbiteBoolean;
    title: {
      arrow: {
        base: string;
        open: {
          off: string;
          on: string;
        };
      };
      base: string;
      flush: FlowbiteBoolean;
      heading: string;
      open: FlowbiteBoolean;
    };
  };
  alert: {
    base: string;
    borderAccent: string;
    closeButton: {
      base: string;
      color: AlertColors;
    };
    color: AlertColors;
    icon: string;
    rounded: string;
  };
  avatar: {
    base: string;
    bordered: string;
    img: {
      off: string;
      on: string;
    };
    rounded: string;
    size: AvatarSizes;
    stacked: string;
    status: {
      away: string;
      base: string;
      busy: string;
      offline: string;
      online: string;
    };
    statusPosition: FlowbitePositions;
    initials: {
      base: string;
      text: string;
    };
  };
  badge: {
    base: string;
    color: BadgeColors;
    href: string;
    icon: {
      off: string;
      on: string;
      size: BadgeSizes;
    };
    size: BadgeSizes;
  };
  breadcrumb: {
    item: {
      base: string;
      chevron: string;
      href: {
        off: string;
        on: string;
      };
      icon: string;
    };
    list: string;
  };
  button: ButtonTheme;
  buttonGroup: {
    base: string;
  };
  card: {
    base: string;
    children: string;
    horizontal: {
      off: string;
      on: string;
    };
    href: string;
    img: {
      base: string;
      horizontal: {
        off: string;
        on: string;
      };
    };
  };
  carousel: {
    base: string;
    indicators: {
      active: {
        off: string;
        on: string;
      };
      base: string;
      wrapper: string;
    };
    item: {
      base: string;
      wrapper: string;
    };
    control: {
      base: string;
      icon: string;
    };
    leftControl: string;
    rightControl: string;
    scrollContainer: {
      base: string;
      snap: string;
    };
  };
  darkThemeToggle: {
    base: string;
    icon: string;
  };
  footer: {
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
  formControls: {
    helperText: {
      base: string;
      colors: HelperColors;
    };
    label: {
      base: string;
      colors: LabelColors;
      disabled: string;
    };
    radio: {
      base: string;
    };
    checkbox: {
      base: string;
    };
    textInput: {
      base: string;
      addon: string;
      field: {
        base: string;
        icon: {
          base: string;
          svg: string;
        };
        input: {
          base: string;
          sizes: TextInputSizes;
          colors: TextInputColors;
          withIcon: FlowbiteBoolean;
          withAddon: FlowbiteBoolean;
          withShadow: FlowbiteBoolean;
        };
      };
    };
    fileInput: {
      base: string;
      field: {
        base: string;
        input: {
          base: string;
          sizes: TextInputSizes;
          colors: TextInputColors;
        };
      };
    };
    toggleSwitch: {
      base: string;
      active: FlowbiteBoolean;
      toggle: {
        base: string;
        checked: FlowbiteBoolean;
      };
      label: string;
    };
    textarea: {
      base: string;
      colors: TextareaColors;
      withShadow: FlowbiteBoolean;
    };
    select: {
      base: string;
      addon: string;
      field: {
        base: string;
        icon: {
          base: string;
          svg: string;
        };
        select: {
          base: string;
          withIcon: FlowbiteBoolean;
          withAddon: FlowbiteBoolean;
          withShadow: FlowbiteBoolean;
          sizes: SelectSizes;
          colors: SelectColors;
        };
      };
    };
  };
  listGroup: {
    base: string;
    item: {
      active: FlowbiteBoolean;
      base: string;
      href: FlowbiteBoolean;
      icon: string;
    };
  };
  modal: {
    base: string;
    show: FlowbiteBoolean;
    content: {
      base: string;
      inner: string;
    };
    body: {
      base: string;
      popup: string;
    };
    header: {
      base: string;
      popup: string;
      title: string;
      close: {
        base: string;
        icon: string;
      };
    };
    footer: {
      base: string;
      popup: string;
    };
    sizes: ModalSizes;
    positions: ModalPositions;
  };
  navbar: {
    base: string;
    rounded: FlowbiteBoolean;
    bordered: FlowbiteBoolean;
    inner: {
      base: string;
      fluid: FlowbiteBoolean;
    };
    brand: string;
    collapse: {
      base: string;
      list: string;
      hidden: FlowbiteBoolean;
    };
    link: {
      base: string;
      active: FlowbiteBoolean;
      disabled: FlowbiteBoolean;
    };
    toggle: {
      base: string;
      icon: string;
    };
  };
  rating: {
    base: string;
    star: {
      sizes: StarSizes;
      filled: string;
      empty: string;
    };
    advanced: {
      base: string;
      label: string;
      progress: {
        base: string;
        fill: string;
        label: string;
      };
    };
  };
  pagination: {
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
  sidebar: {
    base: string;
    collapsed: FlowbiteBoolean;
    inner: string;
    collapse: {
      button: string;
      icon: {
        base: string;
        open: FlowbiteBoolean;
      };
      label: {
        base: string;
        icon: string;
      };
      list: string;
    };
    cta: {
      base: string;
      color: SidebarCTAColors;
    };
    item: {
      active: string;
      base: string;
      collapsed: {
        insideCollapse: string;
        noIcon: string;
      };
      content: {
        base: string;
      };
      icon: {
        base: string;
        active: string;
      };
    };
    items: string;
    itemGroup: string;
    logo: {
      base: string;
      collapsed: FlowbiteBoolean;
      img: string;
    };
  };
  progress: {
    base: string;
    label: string;
    bar: string;
    color: ProgressColors;
    size: ProgressSizes;
  };
  section: SectionTheme;
  spinner: {
    base: string;
    color: SpinnerColors;
    light: {
      off: {
        base: string;
        color: SpinnerColors;
      };
      on: {
        base: string;
        color: SpinnerColors;
      };
    };
    size: SpinnerSizes;
  };
  tab: {
    base: string;
    tablist: {
      base: string;
      styles: TabStyles;
      tabitem: {
        base: string;
        styles: TabStyleItem<TabStyles>;
        icon: string;
      };
    };
    tabpanel: string;
  };
  toast: {
    base: string;
    closed: string;
    removed: string;
    toggle: {
      base: string;
      icon: string;
    };
  };
  tooltip: TooltipTheme;
  dropdown: {
    floating: FlowbiteDropdownTheme;
    content: string;
    inlineWrapper: string;
    arrowIcon: string;
  };
}

export interface FlowbiteBoolean {
  off: string;
  on: string;
}

export interface FlowbiteStateColors {
  info: string;
  failure: string;
  success: string;
  warning: string;
}

export interface HIThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface FlowbiteColors extends FlowbiteStateColors, HIThemeColors {
  [key: string]: string;
  blue: string;
  cyan: string;
  dark: string;
  gray: string;
  green: string;
  indigo: string;
  light: string;
  lime: string;
  pink: string;
  purple: string;
  red: string;
  teal: string;
  yellow: string;
}

export interface FlowbiteGradientColors extends Omit<FlowbiteStateColors, 'warning'> {
  cyan: string;
  lime: string;
  pink: string;
  purple: string;
  teal: string;
}

export type FlowbiteHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface FlowbitePositions {
  'bottom-left': string;
  'bottom-right': string;
  'bottom-center': string;
  'top-left': string;
  'top-center': string;
  'top-right': string;
  'center-left': string;
  center: string;
  'center-right': string;
}

export interface FlowbiteSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
}

export interface HIButtonWidth extends FlowbiteSizes {
  compact: string;
  full: string;
}

export interface FlowbiteContentPositions {
  center: string;
}
