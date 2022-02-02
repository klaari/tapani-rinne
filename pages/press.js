import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
                    <Image
                        className="image"
                        alt="© Sami Mannerheimo"
                        src="/assets/Rinne_Maki-Patola_photo_by_Sami_Mannerheimo-8805e.jpg"
                        width="5813"
                        height="3880"
                    />
                    <figcaption className="image-text">
                        © Sami Mannerheimo
                    </figcaption>
                    <Image
                        className="image"
                        alt="© Sami Mannerheimo"
                        src="/assets/Rinne_Maki-Patola_photo_by_Sami_Mannerheimo-8939e.jpg"
                        width="5611"
                        height="3746"
                    />
                    <figcaption className="image-text">
                        © Sami Mannerheimo
                    </figcaption>
                    <Image
                        className="image"
                        alt="Flowers of Life © Ira Aaltonen"
                        src="/assets/radioton/PHOTOS_files/25813764758_44329e70ae_k.jpg"
                        width="2048"
                        height="1367"
                    />
                    <figcaption className="image-text">
                        © Ira Aaltonen
                    </figcaption>
                    <Image
                        className="image"
                        alt="© Ossi Kajas"
                        src="/assets/radioton/PHOTOS_files/Tapani_print_OK-2_960.jpg"
                        width="960"
                        height="960"
                    />
                    <figcaption className="image-text">© Ossi Kajas</figcaption>
                    <Image
                        className="image"
                        alt="© Ossi Kajas"
                        src="/assets/radioton/PHOTOS_files/Tapani_print_OK-6042_960.jpg"
                        width="960"
                        height="960"
                    />
                    <figcaption className="image-text">© Ossi Kajas</figcaption>
                    <Image
                        className="image"
                        alt="© Studio 1851"
                        src="/assets/radioton/PHOTOS_files/IMG_1936_studio_1851_500.jpg"
                        width="500"
                        height="700"
                    />
                    <figcaption className="image-text">
                        © Studio 1851
                    </figcaption>
                    <Image
                        className="image"
                        alt="© Tero Ruukki"
                        src="/assets/radioton/PHOTOS_files/Rinne-3_960.jpg"
                        width="960"
                        height="1280"
                    />
                    <figcaption className="image-text">
                        © Tero Ruukki
                    </figcaption>
                    <Image
                        className="image"
                        alt="Arboria © Mikko Koistinen"
                        src="/assets/radioton/PHOTOS_files/IMG_9820_rbvai9.jpg"
                        width="500"
                        height="500"
                    />
                    <figcaption className="image-text">
                        Arboria © Mikko Koistinen
                    </figcaption>
                    <Image
                        className="image"
                        alt="© Barka Fabianova"
                        src="/assets/radioton/PHOTOS_files/BarkaFabianova.jpg"
                        width="533"
                        height="800"
                    />
                    <figcaption className="image-text">
                        © Barka Fabianova
                    </figcaption>
                </article>
            </main>
            <Sidebar />
            <Footer />
        </div>
    );
}
