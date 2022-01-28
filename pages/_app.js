import PropTypes from "prop-types"; // ES6
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Tapani Rinne</title>
                <meta
                    name="description"
                    content="Tapani Rinne, finnish musician, composer and record producer"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Script src="./assets/main.js" />
            <Component {...pageProps} />
        </>
    );
}
MyApp.propTypes = {
    Component: PropTypes.node,
    pageProps: PropTypes.object,
};

export default MyApp;
