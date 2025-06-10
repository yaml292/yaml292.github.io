/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            hyphens: 'auto',
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
          },
        },
      }),
    },
  },
}
