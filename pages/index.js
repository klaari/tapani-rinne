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
