import Script from 'next/script'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script src="./assets/main.js" />
            <Component {...pageProps} />
        </>);
}

export default MyApp
