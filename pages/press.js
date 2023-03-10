import Head from "next/head";
import Image from "next/legacy/image";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";

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
                            alt="© Tero Vuorinen"
                            src="/assets/TeroVuorinen1_1600.jpg"
                            width="1600"
                            height="1054"
                        />
                    </div>
                    <figcaption className="image-text">
                        © Tero Vuorinen
                    </figcaption>
                    <div className="image-container">
                        <Image
                            layout="intrinsic"
                            className="image"
                            alt="© Tero Vuorinen"
                            src="/assets/TeroVuorinen2_1600.jpg"
                            width="1600"
                            height="1043"
                        />
                    </div>
                    <figcaption className="image-text">
                        © Tero Vuorinen
                    </figcaption>
                    <div className="image-container">
                        <Image
                            layout="intrinsic"
                            className="image"
                            alt="© Antti Aimo-Koivisto"
                            src="/assets/AnttiAimo-Koivisto_1600.jpg"
                            width="1600"
                            height="1039"
                        />
                    </div>
                    <figcaption className="image-text">
                        © Antti Aimo-Koivisto
                    </figcaption>
                    <div className="image-container">
                        <Image
                            layout="intrinsic"
                            className="image"
                            alt="© Sami Mannerheimo"
                            src="/assets/Rinne_Maki-Patola_photo_by_Sami_Mannerheimo-8805e.jpg"
                            width="5813"
                            height="3880"
                        />
                    </div>
                    <figcaption className="image-text">
                        © Sami Mannerheimo
                    </figcaption>
                    <div className="image-container">
                        <Image
                            layout="intrinsic"
                            className="image"
                            alt="© Sami Mannerheimo"
                            src="/assets/Rinne_Maki-Patola_photo_by_Sami_Mannerheimo-8939e.jpg"
                            width="5611"
                            height="3746"
                        />
                    </div>
                    <figcaption className="image-text">
                        © Sami Mannerheimo
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
                    </figcaption>
                    <div className="image-container">
                        <Image
                            layout="intrinsic"
                            className="image"
                            alt="© Ossi Kajas"
                            src="/assets/radioton/PHOTOS_files/Tapani_print_OK-2_960.jpg"
                            width="960"
                            height="960"
                        />
                    </div>
                    <figcaption className="image-text">© Ossi Kajas</figcaption>
                    <div className="image-container">
                        <Image
                            layout="intrinsic"
                            className="image"
                            alt="© Ossi Kajas"
                            src="/assets/radioton/PHOTOS_files/Tapani_print_OK-6042_960.jpg"
                            width="960"
                            height="960"
                        />
                    </div>
                    <figcaption className="image-text">© Ossi Kajas</figcaption>
                    <div className="image-container">
                        <Image
                            layout="intrinsic"
                            className="image"
                            alt="© Studio 1851"
                            src="/assets/radioton/PHOTOS_files/IMG_1936_studio_1851_500.jpg"
                            width="500"
                            height="700"
                        />
                    </div>
                    <figcaption className="image-text">
                        © Studio 1851
                    </figcaption>
                    <div className="image-container">
                        <Image
                            layout="intrinsic"
                            className="image"
                            alt="© Tero Ruukki"
                            src="/assets/radioton/PHOTOS_files/Rinne-3_960.jpg"
                            width="960"
                            height="1280"
                        />
                    </div>
                    <figcaption className="image-text">
                        © Tero Ruukki
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
                    </figcaption>
                </article>
            </main>
            <Sidebar />
            <Footer />
        </div>
    );
}
