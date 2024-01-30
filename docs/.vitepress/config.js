module.exports = {
    base: '/boat-wiki/',
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
            {
                text: 'Language Reference',
                collapsed: true,
                items: [
                    {
                        text: 'Types',
                        collapsed: true,
                        items: [
                            { text: 'Integer Numeric Types', link: '/language-reference/types/integer-numeric-types' },
                            { text: 'Real Numeric Types', link: '/language-reference/types/real-numeric-types' },
                            { text: 'Boolean', link: '/language-reference/types/bool' },
                            { text: 'Character', link: '/language-reference/types/char' },
                            { text: 'String', link: '/language-reference/types/string' },
                            { text: 'Tuple', link: '/language-reference/types/tuple' },
                            { text: 'Structure', link: '/language-reference/types/struct' },
                            { text: 'Enumeration', link: '/language-reference/types/enum' },
                            { text: 'Interface', link: '/language-reference/types/interface' },
                            { text: 'Array', link: '/language-reference/types/array' },
                        ]
                    }
                ]
            }
        ]
    },
    markdown: {
        math: true
    },
}