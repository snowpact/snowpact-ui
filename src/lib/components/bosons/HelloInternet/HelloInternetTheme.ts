import type { DeepPartial } from '../..';
import type { AlertTheme } from '../../atoms/Alert/Alert.theme';
import type { BreadcrumbTheme } from '../../atoms/Breadcrumb/Breadcrumb.theme';
import type { ButtonTheme } from '../../atoms/Button/Button.theme';
import type { DarkThemeToggleTheme } from '../../atoms/DarkThemeToggle/DarkThemeToggle.theme';
import type { MainContainerTheme } from '../../atoms/MainContainer/MainContainer.theme';
import type { ProgressColors, ProgressSizes } from '../../atoms/Progress';
import type { ToastTheme } from '../../atoms/Toast/Toast.theme';
import type { TooltipTheme } from '../../atoms/Tooltip/Tooltip.theme';

import type { AvatarTheme } from '../../atoms/Avatar/Avatar.theme';
import type { BadgeTheme } from '../../atoms/Badge/Badge.theme';
import type { AccordionTheme } from '../../molecules/Accordion/Accordion.theme';
import type { ButtonGroupTheme } from '../../molecules/ButtonGroup/ButtonGroup.theme';
import type { CameraRollTheme } from '../../molecules/CameraRoll/CameraRoll.theme';
import type { CardTheme } from '../../molecules/Card/Card.theme';
import type { DropdownTheme } from '../../molecules/Dropdown/Dropdown.theme';
import type { HeroTheme } from '../../molecules/Hero/Hero.theme';
import type { ModalTheme } from '../../molecules/Modal/Modal.theme';
import type { TabsTheme } from '../../molecules/Tab/Tabs.theme';
import type { CarouselTheme } from '../../organisms/Carousel/Carousel.theme';
import type { FooterTheme } from '../../organisms/Footer/Footer.theme';
import type { FormControlsTheme } from '../../organisms/FormControls/FormControls.theme';
import type { StarSizes } from '../../Rating';
import type { SidebarCTAColors } from '../../Sidebar/SidebarCTA';
import type { SpinnerColors, SpinnerSizes } from '../../Spinner';

export type CustomHelloInternetTheme = DeepPartial<HelloInternetTheme>;

export interface HelloInternetTheme extends Record<string, unknown> {
  accordion: AccordionTheme;
  alert: AlertTheme;
  avatar: AvatarTheme;
  badge: BadgeTheme;
  breadcrumb: BreadcrumbTheme;
  button: ButtonTheme;
  buttonGroup: ButtonGroupTheme;
  cameraRoll: CameraRollTheme;
  card: CardTheme;
  carousel: CarouselTheme;
  darkThemeToggle: DarkThemeToggleTheme;
  dropdown: DropdownTheme;
  footer: FooterTheme;
  formControls: FormControlsTheme;
  hero: HeroTheme;
  listGroup: {
    base: string;
    item: {
      active: FlowbiteBoolean;
      base: string;
      href: FlowbiteBoolean;
      icon: string;
    };
  };
  modal: ModalTheme;
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
  presentational: {
    base: string;
    icon: string;
    header: string;
    description: string;
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
  mainContainer: MainContainerTheme;
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
  tab: TabsTheme;
  toast: ToastTheme;
  tooltip: TooltipTheme;
}

export interface FlowbiteBoolean {
  off: string;
  on: string;
}

export interface HIStateColors {
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

export interface HIColors extends HIStateColors, HIThemeColors {
  [key: string]: string;
  blue: string;
  cyan: string;
  dark: string;
  gray: string;
  green: string;
  indigo: string;
  light: string;
  lime: string;
  orange: string;
  pink: string;
  purple: string;
  red: string;
  teal: string;
  yellow: string;
}

export type HIHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HIPositions {
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

export interface HISizes {
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

export interface HIButtonWidth extends HISizes {
  compact: string;
  full: string;
}
