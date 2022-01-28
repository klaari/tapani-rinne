import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Solo() {
    return (
        <div>
            <Head>
                <title>Tapani Rinne | Solo</title>
            </Head>
            <Header />
            <main>
                <div className="breadcrumb-container">
                    <a href="/solo">Solo</a>
                    <div className="breadcrumb-container"></div>
                </div>{" "}
                <article>
                    <div id="foghornia" className="album">
                        <p>
                            <a href="https://tapanirinne.bandcamp.com/album/foghornia">
                                Foghornia
                            </a>
                        </p>
                        <div className="album-cover">
                            <img
                                alt="Graphic Design by Juuso Koponen"
                                src="./assets/Foghornia.jpg"
                            />
                            <figcaption className="image-text">
                                Graphic Design by Juuso Koponen
                            </figcaption>
                        </div>
                        <ol>
                            <li>Foghornia</li>
                            <li>A Chant</li>
                            <li>Kirjurinluoto</li>
                            <li>Erottaja</li>
                            <li>Ode to Helsinki</li>
                            <li>Polar</li>
                            <li>Confirmation</li>
                        </ol>
                        <p>
                            Tapani Rinne: bass clarinet, effect pedals, tenor
                            saxophone (5) Tuomas Norvio: electronics, live
                            sampling and mixing (3, 4, 5) Konsta Mikkonen:
                            electronics, live mixing (4, 5) Aleksi Myllykoski:
                            effects (7)
                        </p>
                        <p>
                            Written by Tapani Rinne, except 3 and 4 written by
                            Tapani Rinne and Tuomas Norvio
                        </p>
                        <p>
                            Post produced, mixed and mastered by Pauli
                            Saastamoinen Artwork by Random Doctors Graphic
                            Design by Juuso Koponen
                        </p>
                    </div>
                    <div id="radioton" className="album">
                        <p>
                            <a href="https://tapanirinne.com/radioton">
                                Radioton
                            </a>
                        </p>
                        <div className="album-cover">
                            <img
                                alt="Visual Design by Ilkka Kärkkäinen"
                                src="./assets/Radioton.jpg"
                            />
                            <figcaption className="image-text">
                                Visual Design by Ilkka Kärkkäinen
                            </figcaption>
                        </div>
                        <p>A</p>
                        <ol>
                            <li>Installation 07:04</li>
                            <li>Fire Garden 06:42</li>
                            <li>Nyt 05:02</li>
                        </ol>
                        <p>
                            B<br />
                            4. Meditation 05:38 5. Iris 05:09 6. Here 06:26
                        </p>
                        <p>
                            Tapani Rinne: bass clarinet, effect pedals, alto
                            saxophone (A3) Tuomas Norvio: electronics, live
                            sampling and mixing (A1, B1, B2, B3) Konsta
                            Mikkonnen: electronics, live mixing (A2, A3)
                        </p>
                        <p>
                            Written by Tapani Rinne, except B3 written by Tapani
                            Rinne and Tuomas Norvio Mastered by Pauli
                            Saastamoinen Vinyl master cut by Sami Kantelinen at
                            Timmion Cutting Lab Visual design by Ilkka
                            Kärkkäinen
                        </p>
                        <p>Tapani Rinne: Radioton AA-X-033 Aani Records 2019</p>
                    </div>
                    <div id="silent_night" className="album">
                        <p>
                            <a href="https://open.spotify.com/album/4EzacuNtDvBthpgpgcnyKV">
                                Silent Night
                            </a>
                        </p>
                        <div className="album-cover">
                            <img
                                alt="Drawings & Design by Christer Nuutinen"
                                src="./assets/SilentNight.jpg"
                            />
                            <figcaption className="image-text">
                                Drawings & Design by Christer Nuutinen
                            </figcaption>
                        </div>
                        <ol>
                            <li>Heinillä härkien 3:29</li>
                            <li>Silent Night 2:48</li>
                            <li>We Wish You a Merry Christmas 3:01</li>
                            <li>Rudolph the Red Nosed Reindeer 4:06</li>
                            <li>Snowflakes 2:37</li>
                            <li>November 2:25</li>
                            <li>Adventtilaulu 4:40</li>
                            <li>Tammi 6:57</li>
                            <li>Enkeli taivaan 5:29</li>
                            <li>Maa on niin kaunis 3:03</li>
                            <li>Mary&#39;s Boy Child 7:55</li>
                        </ol>
                        <p>
                            Tapani Rinne: soprano saxophone, bass clarinet, alto
                            clarinet, e-flat clarinet, keyboards, percussion
                            Verneri Lumi: electronics (3, 4, 8, 9, 10) Juusonik:
                            percussion (5, 7, 8) Pekka Kuusisto: violin (6)
                            Veikka Erkola: keyboards and programming (5) Jari
                            Kokkonen: keyboards and programming (1) Tommi
                            Lindell: keyboards (2) Kajasto: programming (2)
                        </p>
                        <p>
                            Mixed by Pauli Saastamoinen (1, 2, 4, 7, 8, 10, 11),
                            Verneri Lumi (3, 9), Veikka Erkola (5) and T-mu
                            Korpipää (6) Mastered by Pauli Saastamoinen Tracks 1
                            and 2 previously released on RinneRadio single Joulu
                            (AAX-004) Design by Leena Kouhia Drawings &amp;
                            design by Christer Nuutinen
                        </p>
                    </div>
                    <div id="nectic" className="album">
                        <p>
                            <a href="https://open.spotify.com/album/2qjFqiwuVj60k458Bzl3ej?uri=spotify%253Aplaylist%253A0P4JpcjiMCNBetOYoF0hNT&amp;color=white&amp;style=list&amp;utm_source=embed_v2&amp;go=1&amp;play=1&amp;nd=1">
                                Nectic
                            </a>
                        </p>
                        <div className="album-cover">
                            <img
                                alt="Cover Design & green photo by Leena Kouhia and red photo by Pablo Nublado"
                                src="./assets/Nectic.jpg"
                            />
                            <figcaption className="image-text">
                                Cover Design & green photo by Leena Kouhia and
                                red photo by Pablo Nublado
                            </figcaption>
                        </div>
                        <ol>
                            <li>No One, Just Your Friend</li>
                            <li>Playing North</li>
                            <li>Babolat</li>
                            <li>Nele</li>
                            <li>Huhu</li>
                            <li>Black Snow</li>
                            <li>Elo</li>
                            <li>Nanos</li>
                            <li>Grey/Green</li>
                        </ol>
                        <p>
                            Tracks 1 &amp; 3 originally created for dance pieces
                            by choreographer Susanna Leinonen Written and
                            performed by Tapani Rinne Programmed, recorded,
                            mixed and mastered by Pauli Saastamoinen Piano by
                            Iro Haarla, recorded at Finnvox by Risto Hemmi Cover
                            design and the green photo by Leena Kouhia The red
                            photo by Pablo Nublado DA Simo Rouhiainen
                        </p>
                    </div>
                    <div id="insider" className="album">
                        <p>
                            <a href="https://open.spotify.com/album/6HEdtqrNYWHBaawxH618yU">
                                Insider
                            </a>
                        </p>
                        <div className="album-cover">
                            <img
                                alt="Cover Design & photos by Leena Kouhia"
                                src="./assets/Insider.jpg"
                            />
                            <figcaption className="image-text">
                                Cover Design & photos by Leena Kouhia
                            </figcaption>
                        </div>
                        <ol>
                            <li>Field</li>
                            <li>Observer</li>
                            <li>Balance?</li>
                            <li>Wireless</li>
                            <li>Isolation</li>
                            <li>Anna&#39;s Theme</li>
                            <li>Arrival</li>
                            <li>Northern Electric</li>
                            <li>Out</li>
                        </ol>
                        <p>
                            Music for the television film Insider, directed by
                            Anders Engström, produced by SVT Drama Music
                            composed and produced by Tapani Rinne Co-producer
                            Pauli Saastamoinen Tapani Rinne: soprano saxophone,
                            clarinets, wood flutes, keyboards Pauli
                            Saastamoinen: programming, keyboards Jouko Laivuori:
                            piano Marko Ahtisaari: sampling Recorded and mixed
                            by Pauli Saastamoinen at Aanittamo and Finnvox
                            Studios Mastered by Pauli Saastamoinen at Finnvox
                            Cover design and photos: Leena Kouhia Dtp-works:
                            Marko von Konow
                        </p>
                    </div>
                </article>
            </main>
            <aside className="sidebar-container"></aside>
            <Footer />
        </div>
    );
}
