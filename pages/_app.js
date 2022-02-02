import PropTypes from "prop-types"; // ES6
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        // Initialize Fathom when the app loads
        // Example: yourdomain.com
        //  - Do not include https://
        //  - This must be an exact match of your domain.
        //  - If you're using www. for your domain, make sure you include that here.
        Fathom.load("YCWZMGUQ", {
            includedDomains: ["tapanirinne.com"],
        });

        function onRouteChangeComplete() {
            Fathom.trackPageview();
        }
        // Record a pageview when route changes
        router.events.on("routeChangeComplete", onRouteChangeComplete);

        // Unassign event listener
        return () => {
            router.events.off("routeChangeComplete", onRouteChangeComplete);
        };
    }, []);
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
    Component: PropTypes.func,
    pageProps: PropTypes.object,
};

export default MyApp;
