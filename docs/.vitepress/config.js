module.exports = {
    title: 'BoatLang Wiki',
    themeConfig: {
        nav: [
            { text: 'Documentation', link: '/' },
        ],
        sidebar: [
            { 
                text: 'Get Started',
                collapsed: true,
                items: [
                    { text: 'Types', link: '/get-started/types' },
                ]
            },
        ]
    },
    markdown: {
        config: (md) => {
          md.use(require('markdown-it-katex'));
        },
      },
}