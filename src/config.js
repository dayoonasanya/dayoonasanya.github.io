module.exports = {
  siteTitle: 'Adedayo Onasanya',
  siteDescription:
    'Adedayo Onasanya is Software Engineer|Cloud Expert, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Adedayo Onasanya, software engineer, web developer, javascript, python, java, svvv, MaryLand',
  siteUrl: 'https://github.com/dayoonasanya.github.io/myPortfolio/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Adedayo Onasanya',
  location: 'MaryLand, USA',
  email: 'dayo.onasanya@icloud.com',
  github: 'https://github.com/dayoonasanya',
  twitterHandle: '@dayo0629',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/dayoonasanya',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dayo0629/',
    },
    {
      name: 'Codepen',
      url: '',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/aao0629/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/dayo0629',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Blog',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
