// Before you make changes to this document, please read https://docs.okis.dev/docs/notion-blog-react#change-the-site-configuration

module.exports = {
    global: {
        author: {
            name: 'Anirudha Brahma',
            github: 'https://github.com/anirbrhm',
            email: 'anirbrhm06@gmail.com',
        },
        site: {
            name: 'The ani-mation',
            description: 'A humble blog by Anirudha Brahma',
            url: 'anirbrhm.github.io',
            banner_img: `https://cdn.harrly.com/project/GitHub/Notion-Blog-React/img/Notion-Blog-React.Banner.png`,
            language: [
                { name: 'British English', code: 'en-GB' },
                { name: 'Simplified Chinese', code: 'zh-CN' },
            ],
        },
        content: {
            header: {
                description: `Blog built with <a href='https://notion.so/' class='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>Notion</a>, <a href='https://reactjs.org/' class='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>React</a>, <a href='https://nextjs.org/' class='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>Next.js</a>, <a href='https://tailwindcss.com/' class='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>tailwindcss</a>, <a href='https://www.typescriptlang.org/' class='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>TypeScript</a>, <a href='https://github.com/splitbee/notion-api-worker' class='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>Notion-Api-Worker</a> and more. (Find more on <a href='https://github.com/Harry-Yep/Notion-Blog-React' class='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>GitHub</a>)`,
                image_url: 'https://cdn.harrly.com/global/assets/icon/android-chrome-192x192.png',
            },
            license: {
                name: 'CC BY-NC-SA 4.0',
                url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
            },
        },
        analytics: {
            google: '',
            splitbee: 'O1KKIQNSGP18',
        },
    },
};
