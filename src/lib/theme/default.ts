import { ALERT_THEME } from '../components/atoms/Alert/Alert.theme';
import { AVATAR_THEME } from '../components/atoms/Avatar/Avatar.theme';
import { BADGE_THEME } from '../components/atoms/Badge/Badge.theme';
import { BREADCRUMB_THEME } from '../components/atoms/Breadcrumb/Breadcrumb.theme';
import { BUTTON_THEME } from '../components/atoms/Button/Button.theme';
import { DARK_THEME_TOGGLE_THEME } from '../components/atoms/DarkThemeToggle/DarkThemeToggle.theme';
import { MAIN_CONTAINER_THEME } from '../components/atoms/MainContainer/MainContainer.theme';
import { PROGRESS_THEME } from '../components/atoms/Progress/Progress.theme';
import { RATING_THEME } from '../components/atoms/Rating/Rating.theme';
import { TOAST_THEME } from '../components/atoms/Toast/Toast.theme';
import { TOOLTIP_THEME } from '../components/atoms/Tooltip/Tooltip.theme';
import type { HelloInternetTheme } from '../components/bosons';
import { ACCORDION_THEME } from '../components/molecules/Accordion/Accordion.theme';
import { BUTTON_GROUP_THEME } from '../components/molecules/ButtonGroup/ButtonGroup.theme';
import { CAMERA_ROLL_THEME } from '../components/molecules/CameraRoll/CameraRoll.theme';
import { CARD_THEME } from '../components/molecules/Card/Card.theme';
import { DROPDOWN_THEME } from '../components/molecules/Dropdown/Dropdown.theme';
import { HERO_THEME } from '../components/molecules/Hero/Hero.theme';
import { LIST_GROUP_THEME } from '../components/molecules/ListGroup/ListGroup.theme';
import { MODAL_THEME } from '../components/molecules/Modal/Modal.theme';
import { PAGINATION_THEME } from '../components/molecules/Pagination/Pagination.theme';
import { PRESENTATIONAL_THEME } from '../components/molecules/Presentational/Presentational.theme';
import { TABS_THEME } from '../components/molecules/Tab/Tabs.theme';
import { CAROUSEL_THEME } from '../components/organisms/Carousel/Carousel.theme';
import { FOOTER_THEME } from '../components/organisms/Footer/Footer.theme';
import { FORM_CONTROLS_THEME } from '../components/organisms/FormControls/FormControls.theme';
import { NAV_BAR_THEME } from '../components/organisms/Navbar/Navbar.theme';

const theme: HelloInternetTheme = {
  accordion: ACCORDION_THEME,
  alert: ALERT_THEME,
  avatar: AVATAR_THEME,
  badge: BADGE_THEME,
  breadcrumb: BREADCRUMB_THEME,
  button: BUTTON_THEME,
  buttonGroup: BUTTON_GROUP_THEME,
  cameraRoll: CAMERA_ROLL_THEME,
  card: CARD_THEME,
  carousel: CAROUSEL_THEME,
  darkThemeToggle: DARK_THEME_TOGGLE_THEME,
  dropdown: DROPDOWN_THEME,
  footer: FOOTER_THEME,
  formControls: FORM_CONTROLS_THEME,
  hero: HERO_THEME,
  listGroup: LIST_GROUP_THEME,
  modal: MODAL_THEME,
  navbar: NAV_BAR_THEME,
  rating: RATING_THEME,
  pagination: PAGINATION_THEME,
  sidebar: {
    base: 'h-full',
    inner: 'h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3',
    collapsed: {
      on: 'w-16',
      off: 'w-64'
    },
    collapse: {
      button:
        'group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100:bg-gray-700',
      icon: {
        base: 'h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900:text-white',
        open: {
          off: '',
          on: 'text-gray-900'
        }
      },
      label: {
        base: 'ml-3 flex-1 whitespace-nowrap text-left',
        icon: 'h-6 w-6'
      },
      list: 'space-y-2 py-2'
    },
    cta: {
      base: 'mt-6 rounded-lg p-4',
      color: {
        blue: 'bg-blue-50',
        dark: 'bg-dark-50',
        failure: 'bg-red-50',
        gray: 'bg-alternative-50',
        green: 'bg-green-50',
        light: 'bg-light-50',
        red: 'bg-red-50',
        purple: 'bg-purple-50',
        success: 'bg-green-50',
        yellow: 'bg-yellow-50',
        warning: 'bg-yellow-50'
      }
    },
    item: {
      base: 'flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100:bg-gray-700',
      active: 'bg-gray-100',
      collapsed: {
        insideCollapse: 'group w-full pl-8 transition duration-75',
        noIcon: 'font-bold'
      },
      content: {
        base: 'px-3 flex-1 whitespace-nowrap'
      },
      icon: {
        base: 'h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900:text-white',
        active: 'text-gray-700'
      }
    },
    items: '',
    itemGroup: 'mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0',
    logo: {
      base: 'mb-5 flex items-center pl-2.5',
      collapsed: {
        on: 'hidden',
        off: 'self-center whitespace-nowrap text-xl font-semibold'
      },
      img: 'mr-3 h-6 sm:h-7'
    }
  },
  progress: PROGRESS_THEME,
  presentational: PRESENTATIONAL_THEME,
  mainContainer: MAIN_CONTAINER_THEME,
  spinner: {
    base: 'inline animate-spin text-gray-200',
    color: {
      failure: 'fill-red-600',
      gray: 'fill-gray-600',
      info: 'fill-blue-600',
      pink: 'fill-pink-600',
      purple: 'fill-purple-600',
      success: 'fill-green-500',
      warning: 'fill-yellow-400'
    },
    light: {
      off: {
        base: '',
        color: {
          failure: '',
          gray: '',
          info: '',
          pink: '',
          purple: '',
          success: '',
          warning: ''
        }
      },
      on: {
        base: '',
        color: {
          failure: '',
          gray: '',
          info: '',
          pink: '',
          purple: '',
          success: '',
          warning: ''
        }
      }
    },
    size: {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-10 h-10'
    }
  },
  tab: TABS_THEME,
  toast: TOAST_THEME,
  tooltip: TOOLTIP_THEME
};

export default theme;
