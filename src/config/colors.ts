/**
 * Color configuration for the application
 * Centralized color definitions using Tailwind CSS classes
 * Enhanced with richer palette and design tokens
 */

export const colors = {
  // Text colors
  text: {
    primary: {
      50: 'text-green-50',
      100: 'text-green-100',
      400: 'text-green-400',
      500: 'text-green-500',
      600: 'text-green-600',
      700: 'text-green-700',
      800: 'text-green-800',
      900: 'text-green-900',
    },
    gray: {
      300: 'text-gray-300',
      400: 'text-gray-400',
      500: 'text-gray-500',
      600: 'text-gray-600',
      700: 'text-gray-700',
      800: 'text-gray-800',
      900: 'text-gray-900',
    },
    red: {
      700: 'text-red-700',
    },
    white: 'text-white',
  },
  
  // Background colors
  background: {
    primary: {
      50: 'bg-green-50',
      100: 'bg-green-100',
      500: 'bg-green-500',
      600: 'bg-green-600',
      700: 'bg-green-700',
      800: 'bg-green-800',
    },
    gray: {
      50: 'bg-gray-50',
      100: 'bg-gray-100',
      800: 'bg-gray-800',
      900: 'bg-gray-900',
    },
    red: {
      50: 'bg-red-50',
      600: 'bg-red-600',
      700: 'bg-red-700',
    },
    white: 'bg-white',
    transparent: 'bg-transparent',
  },
  
  // Border colors
  border: {
    primary: {
      200: 'border-green-200',
      300: 'border-green-300',
      600: 'border-green-600',
    },
    gray: {
      100: 'border-gray-100',
      200: 'border-gray-200',
      300: 'border-gray-300',
      800: 'border-gray-800',
    },
  },
  
  // Hover states
  hover: {
    text: {
      primary: {
        400: 'hover:text-green-400',
        600: 'hover:text-green-600',
        700: 'hover:text-green-700',
      },
      gray: {
        900: 'hover:text-gray-900',
      },
    },
    background: {
      primary: {
        50: 'hover:bg-green-50',
        100: 'hover:bg-green-100',
        700: 'hover:bg-green-700',
        800: 'hover:bg-green-800',
      },
      gray: {
        50: 'hover:bg-gray-50',
        100: 'hover:bg-gray-100',
      },
      red: {
        700: 'hover:bg-red-700',
      },
    },
    border: {
      primary: {
        600: 'hover:border-green-600',
      },
    },
  },
  
  // Focus states
  focus: {
    ring: {
      primary: {
        500: 'focus:ring-green-500',
        600: 'focus:ring-green-600',
      },
    },
  },
  
  // Brand palette (tokens defined in globals.css @theme)
  brand: {
    text: {
      ink: 'text-ink',
      inkSoft: 'text-ink-soft',
      inkMuted: 'text-ink-muted',
      inkFaint: 'text-ink-faint',
      cream: 'text-cream',
      mist: 'text-mist',
      forest: 'text-forest',
      ember: 'text-ember',
      emberDark: 'text-ember-dark',
      alert: 'text-alert-text',
      insurer: 'text-insurer',
    },
    background: {
      cream: 'bg-cream',
      creamTranslucent: 'bg-cream/95',
      sand: 'bg-sand',
      sandDark: 'bg-sand-dark',
      paper: 'bg-paper',
      white: 'bg-white',
      ink: 'bg-ink',
      forest: 'bg-forest',
      ember: 'bg-ember',
      alert: 'bg-alert',
    },
    border: {
      ink: 'border-ink',
      inkSubtle: 'border-ink/15',
      cream: 'border-cream',
      creamSubtle: 'border-cream/15',
      field: 'border-field-border',
    },
    hover: {
      text: {
        ink: 'hover:text-ink',
        cream: 'hover:text-cream',
        emberDark: 'hover:text-ember-dark',
      },
      background: {
        ink: 'hover:bg-ink',
        cream: 'hover:bg-cream',
        emberLight: 'hover:bg-ember-light',
      },
    },
    focus: {
      outline: 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember',
    },
  },

  // Shadow utilities
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  },
} as const
