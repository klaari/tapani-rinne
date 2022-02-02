import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tapani Rinne</title>
                <meta
                    name="description"
                    content="Tapani Rinne, finnish musician, composer and record producer"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <article>
                    <div className="intro-text">
                        <p>
                            <em>
                                Finnish musician, composer and record producer,
                                who is known for his experimental and innovative
                                style with the clarinet and saxophone
                            </em>
                        </p>
                    </div>
                    <div className="gigs-container">
                        <div className="gigs">
                            <ul>
                                <li>
                                    <p>
                                        <strong>05.02.</strong> Wimme &amp;
                                        Rinne, Helsinki
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>21.05.</strong> Wimme &amp;
                                        Rinne, Oulu
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>03.06.</strong> Tapani Rinne
                                        &amp; Sid Hille, Helsinki
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>27.08.</strong> RinneRadio,
                                        Kittilä
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="intro-image">
                        <img
                            alt="Kuva"
                            src="./assets/JuhaTapani_JuhaTapani_ER_00107_Square_FullRes.jpg"
                        />
                    </div>
                </article>
            </main>
            <Sidebar />
            <Footer />
        </div>
    );
}
