import '../styles/globals.css';

import '../styles/notion.css';

import 'tailwindcss/tailwind.css';

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css';

// used for collection views (optional)
import 'rc-dropdown/assets/index.css';

// used for rendering equations (optional)
import 'katex/dist/katex.min.css';

import { appWithTranslation } from 'next-i18next';

import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute='class'>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default appWithTranslation(MyApp);
