import PropTypes from "prop-types";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import Event from "@components/Event";
import Api from "@lib/Api";

export default function Home({ events }) {
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
                                {events.map((event) => (
                                    <Event key={event.id} event={event} />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="intro-image">
                        <Image
                            layout="responsive"
                            alt="Tapani & Juha"
                            src="/assets/JuhaTapani_JuhaTapani_ER_00107_Square.jpg"
                            width="1600"
                            height="1600"
                            priority
                        />
                    </div>
                </article>
            </main>
            <Sidebar />
            <Footer />
        </div>
    );
}

Home.propTypes = {
    events: PropTypes.array,
};

export async function getStaticProps() {
    const events = await Api.getEvents();
    return {
        props: {
            events: events || [],
        },
        revalidate: 10, // In seconds
    };
}
