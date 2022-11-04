import { ALERT_THEME } from '../components/atoms/Alert/Alert.theme';
<<<<<<< HEAD
import { AVATAR_THEME } from '../components/atoms/Avatar/Avatar.theme';
=======
import { BREADCRUMB_THEME } from '../components/atoms/Breadcrumb/Breadcrumb.theme';
>>>>>>> 9cabc49 (Move Breadcrumb component)
import { BUTTON_THEME } from '../components/atoms/Button/Button.theme';
import { DARK_THEME_TOGGLE_THEME } from '../components/atoms/DarkThemeToggle/DarkThemeToggle.theme';
import { PROGRESS_THEME } from '../components/atoms/Progress/Progress.theme';
import { SECTION_THEME } from '../components/atoms/Section/Section.theme';
import { TOAST_THEME } from '../components/atoms/Toast/Toast.theme';
import { TOOLTIP_THEME } from '../components/atoms/Tooltip/Tooltip.theme';
<<<<<<< HEAD
import { LIST_GROUP_THEME } from '../components/molecules/ListGroup/ListGroup.theme';
=======
import { HelloInternetTheme } from '../components/bosons';
>>>>>>> 9cabc49 (Move Breadcrumb component)
import { MODAL_THEME } from '../components/molecules/Modal/Modal.theme';
import { TABS_THEME } from '../components/molecules/Tab/Tabs.theme';


const theme: HelloInternetTheme = {
  accordion: {
    base: 'divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700',
    content: {
      base: 'py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg'
    },
    flush: {
      off: 'rounded-lg border',
      on: 'border-b'
    },
    title: {
      arrow: {
        base: 'h-6 w-6 shrink-0',
        open: {
          off: '',
          on: 'rotate-180'
        }
      },
      base: 'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400',
      flush: {
        off: 'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800',
        on: '!bg-transparent dark:!bg-transparent'
      },
      heading: '',
      open: {
        off: '',
        on: 'text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white'
      }
    }
  },
  alert: ALERT_THEME,
  avatar: AVATAR_THEME,
  badge: {
    base: 'flex h-fit items-center gap-1 font-semibold',
    color: {
      info: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300',
      gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600',
      failure:
        'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300',
      success:
        'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300',
      warning:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300',
      indigo:
        'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300',
      purple:
        'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300',
      pink: 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300'
    },
    href: 'group',
    icon: {
      off: 'rounded px-2 py-0.5',
      on: 'rounded-full p-1.5',
      size: {
        xs: 'w-3 h-3',
        sm: 'w-3.5 h-3.5'
      }
    },
    size: {
      xs: 'p-1 text-xs',
      sm: 'p-1.5 text-sm'
    }
  },
  breadcrumb: BREADCRUMB_THEME,
  button: BUTTON_THEME,
  buttonGroup: {
    base: 'inline-flex'
  },
  card: {
    base: 'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
    children: 'flex h-full flex-col justify-center gap-4 p-6',
    horizontal: {
      off: 'flex-col',
      on: 'flex-col md:max-w-xl md:flex-row'
    },
    href: 'hover:bg-gray-100 dark:hover:bg-gray-700',
    img: {
      base: '',
      horizontal: {
        off: 'rounded-t-lg',
        on: 'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
      }
    }
  },
  carousel: {
    base: 'relative h-full w-full',
    indicators: {
      active: {
        off: 'bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800',
        on: 'bg-white dark:bg-gray-800'
      },
      base: 'h-3 w-3 rounded-full',
      wrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3'
    },
    item: {
      base: 'absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2',
      wrapper: 'w-full flex-shrink-0 transform cursor-grab snap-center'
    },
    control: {
      base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
      icon: 'h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6'
    },
    leftControl: 'absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none',
    rightControl: 'absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none',
    scrollContainer: {
      base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg',
      snap: 'snap-x'
    }
  },
  darkThemeToggle: DARK_THEME_TOGGLE_THEME,
  dropdown: {
    floating: {
      target: 'w-fit',
      base: 'z-10 w-fit rounded divide-y divide-gray-100 shadow',
      animation: 'transition-opacity',
      hidden: 'invisible opacity-0',
      style: {
        dark: 'bg-gray-900 text-white dark:bg-gray-700',
        light: 'border border-gray-200 bg-white text-gray-900',
        auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white'
      },
      header: 'block py-2 px-4 text-sm text-gray-700 dark:text-gray-200',
      content: 'py-1 text-sm text-gray-700 dark:text-gray-200',
      arrow: {
        base: 'absolute z-10 h-2 w-2 rotate-45',
        style: {
          dark: 'bg-gray-900 dark:bg-gray-700',
          light: 'bg-white',
          auto: 'bg-white dark:bg-gray-700'
        },
        placement: '-4px'
      },
      item: {
        base: 'flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white',
        icon: 'mr-2 h-4 w-4'
      },
      divider: 'my-1 h-px bg-gray-100 dark:bg-gray-600'
    },
    arrowIcon: 'ml-2 h-4 w-4',
    inlineWrapper: 'flex items-center',
    content: 'py-1'
  },
  footer: {
    base: 'w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between',
    container: 'w-full p-6',
    bgDark: 'bg-gray-800',
    groupLink: {
      base: 'flex flex-wrap text-sm text-gray-500 dark:text-white',
      link: {
        base: 'last:mr-0 md:mr-6',
        href: 'hover:underline'
      },
      col: 'flex-col space-y-4'
    },
    icon: {
      base: 'text-gray-500 dark:hover:text-white',
      size: 'h-5 w-5'
    },
    title: {
      base: 'mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white'
    },
    divider: {
      base: 'w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8'
    },
    copyright: {
      base: 'text-sm text-gray-500 dark:text-gray-400 sm:text-center',
      href: 'ml-1 hover:underline',
      span: 'ml-1'
    },
    brand: {
      base: 'mb-4 flex items-center sm:mb-0',
      img: 'mr-3 h-8',
      span: 'self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white'
    }
  },
  formControls: {
    helperText: {
      base: 'mt-2 text-sm',
      colors: {
        gray: 'text-gray-500 dark:text-gray-400',
        info: 'text-blue-700 dark:text-blue-800',
        success: 'text-green-600 dark:text-green-500',
        failure: 'text-red-600 dark:text-red-500',
        warning: 'text-yellow-500 dark:text-yellow-600'
      }
    },
    label: {
      base: 'text-sm font-medium',
      colors: {
        default: 'text-gray-900 dark:text-gray-300',
        info: 'text-blue-500 dark:text-blue-600',
        failure: 'text-red-700 dark:text-red-500',
        warning: 'text-yellow-500 dark:text-yellow-600',
        success: 'text-green-700 dark:text-green-500'
      },
      disabled: 'opacity-50'
    },
    radio: {
      base: 'h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600'
    },
    checkbox: {
      base: 'h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
    },
    textInput: {
      base: 'flex',
      addon:
        'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400',
      field: {
        base: 'relative w-full',
        icon: {
          base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
          svg: 'h-5 w-5 text-gray-500 dark:text-gray-400'
        },
        input: {
          base: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50',
          sizes: {
            sm: 'p-2 sm:text-xs',
            md: 'p-2.5 text-sm',
            lg: 'sm:text-md p-4'
          },
          colors: {
            gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
            info: 'border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500',
            failure:
              'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
            warning:
              'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
            success:
              'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500'
          },
          withIcon: {
            on: 'pl-10',
            off: ''
          },
          withAddon: {
            on: 'rounded-r-lg',
            off: 'rounded-lg'
          },
          withShadow: {
            on: 'shadow-sm dark:shadow-sm-light',
            off: ''
          }
        }
      }
    },
    fileInput: {
      base: 'flex',
      field: {
        base: 'relative w-full',
        input: {
          base: 'rounded-lg block w-full border disabled:cursor-not-allowed disabled:opacity-50',
          sizes: {
            sm: 'sm:text-xs',
            md: 'text-sm',
            lg: 'sm:text-md'
          },
          colors: {
            gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
            info: 'border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500',
            failure:
              'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
            warning:
              'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
            success:
              'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500'
          }
        }
      }
    },
    toggleSwitch: {
      base: 'group relative flex items-center rounded-lg focus:outline-none',
      active: {
        on: 'cursor-pointer',
        off: 'cursor-not-allowed opacity-50'
      },
      toggle: {
        base: 'toggle-bg h-6 w-11 rounded-full border group-focus:ring-4 group-focus:ring-blue-500/25',
        checked: {
          on: 'border-blue-700 bg-blue-700 after:translate-x-full after:border-white',
          off: 'border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700'
        }
      },
      label: 'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'
    },
    textarea: {
      base: 'block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50',
      colors: {
        gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
        info: 'border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500',
        failure:
          'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
        warning:
          'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
        success:
          'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500'
      },
      withShadow: {
        on: 'shadow-sm dark:shadow-sm-light',
        off: ''
      }
    },
    select: {
      base: 'flex',
      addon:
        'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400',
      field: {
        base: 'relative w-full',
        icon: {
          base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
          svg: 'h-5 w-5 text-gray-500 dark:text-gray-400'
        },
        select: {
          base: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50',
          withIcon: {
            on: 'pl-10',
            off: ''
          },
          withAddon: {
            on: 'rounded-r-lg',
            off: 'rounded-lg'
          },
          withShadow: {
            on: 'shadow-sm dark:shadow-sm-light',
            off: ''
          },
          sizes: {
            sm: 'p-2 sm:text-xs',
            md: 'p-2.5 text-sm',
            lg: 'sm:text-md p-4'
          },
          colors: {
            gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
            info: 'border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500',
            failure:
              'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
            warning:
              'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
            success:
              'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500'
          }
        }
      }
    }
  },
  listGroup: LIST_GROUP_THEME,
  modal: MODAL_THEME,
  navbar: {
    base: 'border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
    rounded: {
      on: 'rounded',
      off: ''
    },
    bordered: {
      on: 'border',
      off: ''
    },
    inner: {
      base: 'mx-auto flex flex-wrap items-center justify-between',
      fluid: {
        on: '',
        off: 'container'
      }
    },
    brand: 'flex items-center',
    collapse: {
      base: 'w-full md:block md:w-auto',
      list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
      hidden: {
        on: 'hidden',
        off: ''
      }
    },
    link: {
      base: 'block py-2 pr-4 pl-3 md:p-0',
      active: {
        on: 'bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700',
        off: 'border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white'
      },
      disabled: {
        on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
        off: ''
      }
    },
    toggle: {
      base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
      icon: 'h-6 w-6 shrink-0'
    }
  },
  rating: {
    base: 'flex items-center',
    star: {
      sizes: {
        sm: 'w-5 h-5',
        md: 'w-7 h-7',
        lg: 'w-10 h-10'
      },
      filled: 'text-yellow-400',
      empty: 'text-gray-300 dark:text-gray-500'
    },
    advanced: {
      base: 'flex items-center',
      label: 'text-sm font-medium text-blue-600 dark:text-blue-500',
      progress: {
        base: 'mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700',
        fill: 'h-5 rounded bg-yellow-400',
        label: 'text-sm font-medium text-blue-600 dark:text-blue-500'
      }
    }
  },
  pagination: {
    base: '',
    layout: {
      table: {
        base: 'text-sm text-gray-700 dark:text-gray-400',
        span: 'font-semibold text-gray-900 dark:text-white'
      }
    },
    pages: {
      base: 'xs:mt-0 mt-2 inline-flex items-center -space-x-px',
      showIcon: 'inline-flex',
      previous: {
        base: 'ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
        icon: 'h-5 w-5'
      },
      next: {
        base: 'rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
        icon: 'h-5 w-5'
      },
      selector: {
        base: 'w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
        active:
          'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
      }
    }
  },
  sidebar: {
    base: 'h-full',
    inner: 'h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3 dark:bg-gray-800',
    collapsed: {
      on: 'w-16',
      off: 'w-64'
    },
    collapse: {
      button:
        'group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
      icon: {
        base: 'h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
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
        blue: 'bg-blue-50 dark:bg-blue-900',
        dark: 'bg-dark-50 dark:bg-dark-900',
        failure: 'bg-red-50 dark:bg-red-900',
        gray: 'bg-alternative-50 dark:bg-alternative-900',
        green: 'bg-green-50 dark:bg-green-900',
        light: 'bg-light-50 dark:bg-light-900',
        red: 'bg-red-50 dark:bg-red-900',
        purple: 'bg-purple-50 dark:bg-purple-900',
        success: 'bg-green-50 dark:bg-green-900',
        yellow: 'bg-yellow-50 dark:bg-yellow-900',
        warning: 'bg-yellow-50 dark:bg-yellow-900'
      }
    },
    item: {
      base: 'flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
      active: 'bg-gray-100 dark:bg-gray-700',
      collapsed: {
        insideCollapse: 'group w-full pl-8 transition duration-75',
        noIcon: 'font-bold'
      },
      content: {
        base: 'px-3 flex-1 whitespace-nowrap'
      },
      icon: {
        base: 'h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
        active: 'text-gray-700 dark:text-gray-100'
      }
    },
    items: '',
    itemGroup:
      'mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700',
    logo: {
      base: 'mb-5 flex items-center pl-2.5',
      collapsed: {
        on: 'hidden',
        off: 'self-center whitespace-nowrap text-xl font-semibold dark:text-white'
      },
      img: 'mr-3 h-6 sm:h-7'
    }
  },
  progress: PROGRESS_THEME,
  section: SECTION_THEME,
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
        base: 'dark:text-gray-600',
        color: {
          failure: '',
          gray: 'dark:fill-gray-300',
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
