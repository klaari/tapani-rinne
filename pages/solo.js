import Head from "next/head";
import Image from "next/legacy/image";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";

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
                </div>
                <article>
                    <div id="grey" className="album">
                        <p>
                            <a href="https://tapanirinne.bandcamp.com/album/grey-2">
                                Grey
                            </a>
                        </p>
                        <div className="album-cover">
                            <div className="image-container">
                                <Image
                                    layout="intrinsic"
                                    alt="Graphic Design by Juuso Koponen"
                                    src="/assets/Tapani-Rinne-Grey.jpg"
                                    width="500"
                                    height="500"
                                />
                            </div>
                            <figcaption className="image-text">
                                Graphic Design by Juuso Koponen
                                <br />
                                Artwork by Aimo Katajamäki
                            </figcaption>
                        </div>
                        <p>
                            1. Blackhorn 5:07
                            <br />
                            2. Population Clock 7:32
                            <br />
                            3. Boson 4:33
                            <br />
                            4. Albedo 6:54
                            <br />
                            5. Dark Beige 7:52
                            <br />
                            6. Out of Tune 11:13
                            <br />
                            7. Tuokio 5:27
                        </p>
                        <p>
                            Bass clarinet and effect pedals by Tapani Rinne
                            <br />
                            Produced and written by Juha Mäki-Patola and Tapani
                            Rinne (1)
                            <br />
                            Produced and written by Tuomas Norvio and Tapani
                            rinne (2,3,4,5)
                            <br />
                            Produced and written by Pauli Saastamoinen and
                            Tapani Rinne (6,7)
                            <br />
                            Mastered by Pauli Saastamoinen at Finnvox Studios
                            <br />
                            Artwork by Aimo Katajamäki
                            <br />
                            Graphic design by Juuso koponen
                            <br />
                            Signature Dark (SD13) 2023
                            <br />
                        </p>
                    </div>
                </article>
                <article>
                    <div id="foghornia" className="album">
                        <p>
                            <a href="https://tapanirinne.bandcamp.com/album/foghornia">
                                Foghornia
                            </a>
                        </p>
                        <div className="album-cover">
                            <div className="image-container">
                                <Image
                                    layout="intrinsic"
                                    alt="Graphic Design by Juuso Koponen"
                                    src="/assets/Foghornia.jpg"
                                    width="500"
                                    height="500"
                                />
                            </div>
                            <figcaption className="image-text">
                                Graphic Design by Juuso Koponen
                            </figcaption>
                        </div>
                        <p>
                            1. Foghornia 8:50
                            <br /> 2. A Chant 4:50
                            <br /> 3. Kirjurinluoto 6:25
                            <br /> 4. Erottaja 3:47
                            <br />
                            5. Ode to Helsinki 4:03
                            <br /> 6. Polar 5:28
                            <br /> 7. Confirmation 5:57
                            <br />
                        </p>
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
                            <div className="image-container">
                                <Image
                                    layout="intrinsic"
                                    alt="Visual Design by Ilkka Kärkkäinen"
                                    src="/assets/Radioton.jpg"
                                    width="500"
                                    height="500"
                                />
                            </div>
                            <figcaption className="image-text">
                                Visual Design by Ilkka Kärkkäinen
                            </figcaption>
                        </div>
                        <p>
                            A
                            <br />
                            1. Installation 07:04
                            <br /> 2. Fire Garden 06:42
                            <br /> 3. Nyt 05:02
                        </p>
                        <p>
                            B
                            <br />
                            4. Meditation 05:38
                            <br /> 5. Iris 05:09
                            <br /> 6. Here 06:26
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
                            <div className="image-container">
                                <Image
                                    layout="intrinsic"
                                    alt="Drawings &amp; Design by Christer Nuutinen"
                                    src="/assets/SilentNight.jpg"
                                    width={500}
                                    height={500}
                                    style={{ maxWidth: "500px" }}
                                />
                            </div>
                            <figcaption className="image-text">
                                Drawings &amp; Design by Christer Nuutinen
                            </figcaption>
                        </div>
                        <p>
                            1. Heinillä härkien 3:29
                            <br /> 2. Silent Night 2:48
                            <br /> 3. We Wish You a Merry Christmas 3:01
                            <br /> 4. Rudolph the Red Nosed Reindeer 4:06
                            <br /> 5. Snowflakes 2:37
                            <br /> 6. November 2:25
                            <br /> 7. Adventtilaulu 4:40
                            <br /> 8. Tammi 6:57
                            <br /> 9. Enkeli taivaan 5:29
                            <br /> 10. Maa on niin kaunis 3:03
                            <br /> 11. Mary&#39;s Boy Child 7:55
                        </p>
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
                            <div className="image-container">
                                <Image
                                    layout="intrinsic"
                                    alt="Cover Design &amp; green photo by Leena Kouhia and red photo by Pablo Nublado"
                                    src="/assets/Nectic.jpg"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <figcaption className="image-text">
                                Cover Design &amp; green photo by Leena Kouhia
                                and red photo by Pablo Nublado
                            </figcaption>
                        </div>
                        <p>
                            1. No One, Just Your Friend
                            <br /> 2. Playing North
                            <br /> 3. Babolat
                            <br /> 4. Nele
                            <br /> 5. Huhu
                            <br /> 6. Black Snow
                            <br /> 7. Elo
                            <br /> 8. Nanos
                            <br /> 9. Grey/Green
                        </p>
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
                            <div className="image-container">
                                <Image
                                    layout="intrinsic"
                                    alt="Cover Design &amp; photos by Leena Kouhia"
                                    src="/assets/Insider.jpg"
                                    width="500"
                                    height="500"
                                />
                            </div>
                            <figcaption className="image-text">
                                Cover Design &amp; photos by Leena Kouhia
                            </figcaption>
                        </div>
                        <p>
                            1. Field
                            <br /> 2. Observer
                            <br /> 3. Balance?
                            <br /> 4. Wireless
                            <br /> 5. Isolation
                            <br /> 6. Anna&#39;s Theme
                            <br /> 7. Arrival
                            <br /> 8. Northern Electric
                            <br /> 9. Out
                            <br />
                        </p>
                        <p>
                            Music for the television film Insider, directed by
                            Anders Engström, produced by SVT Drama <br /> Music
                            composed and produced by Tapani Rinne <br />
                            Co-producer Pauli Saastamoinen <br /> Tapani Rinne:
                            soprano saxophone, clarinets, wood flutes, keyboards
                            <br /> Pauli Saastamoinen: programming, keyboards
                            <br /> Jouko Laivuori: piano <br /> Marko Ahtisaari:
                            sampling <br /> Recorded and mixed by Pauli
                            Saastamoinen at Aanittamo and Finnvox Studios <br />
                            Mastered by Pauli Saastamoinen at Finnvox Cover
                            design and photos: Leena Kouhia <br /> Dtp-works:
                            Marko von Konow
                        </p>
                    </div>
                </article>
            </main>
            <Sidebar />
            <Footer />
        </div>
    );
}
