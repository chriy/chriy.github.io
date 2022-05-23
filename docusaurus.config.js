// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/nightOwl');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Chris · A back-end develop engineer',
    tagline: '',
    url: 'https://chriy.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'chriy', // Usually your GitHub org/user name.
    projectName: 'chriy.github.io', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/chriy/chriy.github.io',
                },
                blog: {
                    blogSidebarTitle: 'All Posts',
                    blogSidebarCount: 'ALL',
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/chriy/chriy.github.io',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Chris Yang',
                logo: {
                    alt: '',
                    src: 'img/logo.jpg',
                },
                items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Document',
                },
                    {
                        to: '/blog',
                        label: 'Blog',
                        position: 'left'
                    },
                    {
                        href: 'https://github.com/chriy',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            prism: {
                // Highlight code
                additionalLanguages: ['java', 'go', 'kotlin', 'c'],
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
