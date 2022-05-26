import React from 'react';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
    React.useEffect(() => {
        const handler = (e) => {
            const update = e.detail;
            const { currentUrl } = update;
            console.log(update);
            if (currentUrl === '/faq/') {
                e.preventDefault();
            } else if (currentUrl === '/careers/') {
                e.preventDefault();
                window.location.reload();
            }
        };
        window.addEventListener('stackbitObjectsChanged', handler);
        return () => {
            window.removeEventListener('stackbitObjectsChanged', handler);
        }
    }, []);
    return <Component {...pageProps} />;
}