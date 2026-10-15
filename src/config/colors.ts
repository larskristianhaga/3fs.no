/**
 * Color configuration for the application.
 * Tailwind class references for the brand palette; the tokens themselves
 * are defined in src/app/globals.css (@theme).
 */

export const colors = {
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
      border: {
        ink: 'hover:border-ink',
      },
    },
    focus: {
      outline: 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember',
    },
  },
} as const
