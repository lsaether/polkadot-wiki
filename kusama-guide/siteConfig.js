const { baseUrlPattern } = require('../scripts/utils');

const isBuilding = process.env.BUILDING;
const isPub = process.env.PUBLISHING;

const siteConfig = {
  title: 'Kusama Guide', // Title for your website.
  tagline: 'One-stop-shop for Kusama information.',
  url: isPub ? "https://lsaether.github.io/" : "", // Your website URL
  baseUrl: isBuilding ? baseUrlPattern : (isPub ? "/test/" : "/"),
  projectName: isPub ? "test" : "",
  organizationName: 'lsaether',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'kusama-index', label: 'Kusama' },
    { search: true },
    { languages: true }
  ],

  /* path to images for header/footer */
  headerIcon: './img/kusama-brand-assets/Kusama_Canary_white.png',
  footerIcon: './img/kusama-brand-assets/Kusama_Canary_white.png',
  favicon: './img/kusama-brand-assets/Kusama_Canary_white.png',

  /* Colors for website */
  colors: {
    primaryColor: '#E6007A',
    secondaryColor: '#000000',
  },

  algolia: {
    apiKey: '8bfa06b56bb8f33e5698c7f40b00b38f',
    indexName: 'polkadot',
    algoliaOptions: {
      facetFilters: ["language:LANGUAGE"]
    } // Optional, if provided by Algolia
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
    'Muli',
    'sans-serif',
    ],
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Web3 Foundation`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://wiki.polkadot.network/js/load.js',
    'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.js',
    './js/custom.js',
    './js/klaro-config.js',
    './js/klaro.js'
  ],

  stylesheets: [
    'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css',
    'https://fonts.googleapis.com/css?family=Muli&display=swap',
    './css/klaro.css'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  
  // No .html extensions for paths.
  cleanUrl: false,

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  markdownPlugins: [
    (md) => {
      md.use(require('remarkable-katex'));
    },
  ],

  editUrl: 'https://github.com/w3f/polkadot-wiki/edit/master/docs/',

  translationRecruitingLink: 'https://crowdin.com/project/polkadot-wiki',

  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },

  repoUrl: 'https://github.com/paritytech/polkadot',
};

module.exports = siteConfig;
