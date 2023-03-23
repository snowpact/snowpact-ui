import type { FlowbiteBoolean } from '../../bosons/HelloInternet/HelloInternetTheme';
import type { HelperColors } from './HelperText';
import type { LabelColors } from './Label';
import type { SelectColors, SelectSizes } from './Select';
import type { TextareaColors } from './Textarea';
import type { TextInputColors, TextInputSizes } from './TextInput';

export type FormControlsTheme = {
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

export const FORM_CONTROLS_THEME: FormControlsTheme = {
  helperText: {
    base: 'mt-2 text-sm',
    colors: {
      gray: 'text-gray-500',
      info: 'text-blue-700',
      success: 'text-green-600',
      failure: 'text-red-600',
      warning: 'text-yellow-500'
    }
  },
  label: {
    base: 'text-sm font-medium',
    colors: {
      default: 'text-gray-900',
      info: 'text-blue-500',
      failure: 'text-red-700',
      warning: 'text-yellow-500',
      success: 'text-green-700'
    },
    disabled: 'opacity-50'
  },
  radio: {
    base: 'h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-blue-500:bg-blue-600:ring-blue-600'
  },
  checkbox: {
    base: 'h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500:ring-blue-600'
  },
  textInput: {
    base: 'flex',
    addon:
      'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900',
    field: {
      base: 'relative w-full',
      icon: {
        base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
        svg: 'h-5 w-5 text-gray-500'
      },
      input: {
        base: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50',
        sizes: {
          sm: 'p-2 sm:text-xs',
          md: 'p-2.5 text-sm',
          lg: 'sm:text-md p-4'
        },
        colors: {
          gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500:border-blue-500:ring-blue-500',
          info: 'border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500:border-blue-500:ring-blue-500',
          failure:
            'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500:border-red-500:ring-red-500',
          warning:
            'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500:border-yellow-500:ring-yellow-500',
          success:
            'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500:border-green-500:ring-green-500'
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
          on: 'shadow-sm',
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
          gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500:border-blue-500:ring-blue-500',
          info: 'border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500:border-blue-500:ring-blue-500',
          failure:
            'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500:border-red-500:ring-red-500',
          warning:
            'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500:border-yellow-500:ring-yellow-500',
          success:
            'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500:border-green-500:ring-green-500'
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
        off: 'border-gray-200 bg-gray-200'
      }
    },
    label: 'ml-3 text-sm font-medium text-gray-900'
  },
  textarea: {
    base: 'block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50',
    colors: {
      gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500:border-blue-500:ring-blue-500',
      info: 'border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500:border-blue-500:ring-blue-500',
      failure:
        'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500:border-red-500:ring-red-500',
      warning:
        'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500:border-yellow-500:ring-yellow-500',
      success:
        'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500:border-green-500:ring-green-500'
    },
    withShadow: {
      on: 'shadow-sm',
      off: ''
    }
  },
  select: {
    base: 'flex',
    addon:
      'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900',
    field: {
      base: 'relative w-full',
      icon: {
        base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
        svg: 'h-5 w-5 text-gray-500'
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
          on: 'shadow-sm',
          off: ''
        },
        sizes: {
          sm: 'p-2 sm:text-xs',
          md: 'p-2.5 text-sm',
          lg: 'sm:text-md p-4'
        },
        colors: {
          gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500:border-blue-500:ring-blue-500',
          info: 'border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500:border-blue-500:ring-blue-500',
          failure:
            'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500:border-red-500:ring-red-500',
          warning:
            'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500:border-yellow-500:ring-yellow-500',
          success:
            'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500:border-green-500:ring-green-500'
        }
      }
    }
  }
};
