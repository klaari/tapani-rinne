import PropTypes from "prop-types";
import Head from "next/head";
import Image from "next/legacy/image";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import { saveAs } from "file-saver";

const saveFile = (path, name) => {
    saveAs(path, name);
};

function DownloadButton({ handleClick }) {
    return (
        <a
            style={{ paddingLeft: "12px", cursor: "pointer" }}
            onClick={handleClick}
        >
            ↓ Download
        </a>
    );
}
DownloadButton.propTypes = {
    handleClick: PropTypes.func,
};

export default function Press() {
    return (
        <div>
            <Head>
                <title>Tapani Rinne | Press</title>
            </Head>
            <Header />
            <main>
                <div className="breadcrumb-container">
                    <a href="/press">Press</a>
                    <div className="breadcrumb-container"></div>
                </div>{" "}
                <article className="images">
                    <div className="image-container">
                        <Image
                            layout="intrinsic"
                            className="image"
                            alt="© Mika Toivanen"
                            src="/assets/TR_MikaToivanen_vsuvfa.jpg"
                            width="1200"
                            height="900"
                        />
                    </div>
                    <figcaption className="image-text">
                        © Mika Toivanen
                        <DownloadButton
                            handleClick={() =>
                                saveFile(
                                    "/assets/TR_MikaToivanen.jpg",
                                    "TapaniRinne-MikaToivanen"
                                )
                            }
                        />
                    </figcaption>
                    <div className="image-container">
                        <Image
                            layout="intrinsic"
                            className="image"
                            alt="© Pentti Hokkanen"
                            src="/assets/TR_PenttiHokkanen_xgt5fs.jpg"
                            width="1012"
                            height="675"
                        />
                    </div>
                    <figcaption className="image-text">
                        © Pentti Hokkanen
                        <DownloadButton
                            handleClick={() =>
                                saveFile(
                                    "/assets/TR_PenttiHokkanen.jpg",
                                    "TapaniRinne-PenttiHokkanen"
                                )
                            }
                        />
                    </figcaption>
                    <div className="image-container">
                        <Image
                            layout="intrinsic"
                            className="image"
                            alt="© Jouko Vatanen"
                            src="/assets/TR_JoukoVatanen_mmpwuz.jpg"
                            width="1016"
                            height="675"
                        />
                    </div>
                    <figcaption className="image-text">
                        © Jouko Vatanen
                        <DownloadButton
                            handleClick={() =>
                                saveFile(
                                    "/assets/TR_JoukoVatanen.jpg",
                                    "TapaniRinne-JoukoVatanen"
                                )
                            }
                        />
                    </figcaption>
                    <div className="image-container">
                        <Image
                            layout="intrinsic"
                            className="image"
                            alt="© Tero Vuorinen"
                            src="/assets/TeroVuorinen1_1600.jpg"
                            width="1600"
                            height="1054"
                        />
                    </div>
                    <figcaption className="image-text">
                        © Tero Vuorinen
                        <DownloadButton
                            handleClick={() =>
                                saveFile(
                                    "/assets/TeroVuorinen1.jpg",
                                    "TapaniRinne-TeroVuorinen1"
                                )
                            }
                        />
                    </figcaption>
                    <div className="image-container">
                        <Image
                            layout="intrinsic"
                            className="image"
                            alt="Flowers of Life © Ira Aaltonen"
                            src="/assets/radioton/PHOTOS_files/25813764758_44329e70ae_k.jpg"
                            width="2048"
                            height="1367"
                        />
                    </div>
                    <figcaption className="image-text">
                        © Ira Aaltonen
                        <DownloadButton
                            handleClick={() =>
                                saveFile(
                                    "/assets/radioton/PHOTOS_files/25813764758_44329e70ae_k.jpg",
                                    "TapaniRinne-IraAaltonen"
                                )
                            }
                        />
                    </figcaption>
                    <div className="image-container">
                        <Image
                            layout="intrinsic"
                            className="image"
                            alt="Arboria © Mikko Koistinen"
                            src="/assets/radioton/PHOTOS_files/IMG_9820_rbvai9.jpg"
                            width="500"
                            height="500"
                        />
                    </div>
                    <figcaption className="image-text">
                        Arboria © Mikko Koistinen
                        <DownloadButton
                            handleClick={() =>
                                saveFile(
                                    "/assets/radioton/PHOTOS_files/IMG_9820_rbvai9.jpg",
                                    "TapaniRinne-MikkoKoistinen"
                                )
                            }
                        />
                    </figcaption>
                </article>
            </main>
            <Sidebar />
            <Footer />
        </div>
    );
}
