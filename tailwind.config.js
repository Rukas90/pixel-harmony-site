/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      screens: {
        'xs': '480px', // @media (min-width: 480px)
        'sm': '640px', // @media (min-width: 640px)
        'md': '768px', // @media (min-width: 768px)
        'lg': '1024px', // @media (min-width: 1024px)
        'xl': '1280px', // @media (min-width: 1280px)
        '2xl': '1536px' // @media (min-width: 1536px)
      },
      height: {
        'content': 'calc(100dvh - 122px)'
      },
      minHeight: {
        'content': 'calc(100dvh - 122px)'
      },
      width: {
        "docpage": 'calc(100% - 288px)'
      },
      maxWidth: {
        'constraint': '90rem'
      },
      colors: {
        custom: {
          750: '#383431',
          775: '#2f2b28',
          850: '#221f1d',
          875: '#191613',
          925: "#13110f",
          975: '#070605' 
        }
      },
      backgroundColor: {
        custom: {
          750: '#383431',
          775: '#2f2b28',
          850: '#221f1d',
          875: '#191613',
          925: "#13110f",
          975: '#070605' 
        }
      },
      fontSize: {
        'md': ['1.0625rem', '1.625rem']
      }
    },
  },
  plugins: [],
}

