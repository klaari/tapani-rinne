import Head from "next/head";
import Image from "next/image";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";

export default function About() {
    return (
        <div>
            <Head>
                <title>Tapani Rinne | About</title>
            </Head>
            <Header />
            <main>
                <div className="breadcrumb-container">
                    <a href="/about">About</a>
                    <div className="breadcrumb-container"></div>
                </div>{" "}
                <article>
                    <div className="float-image">
                        <Image
                            layout="responsive"
                            alt="Tapani Rinne"
                            src="/assets/tapani.jpg"
                            width="200"
                            height="269"
                        />
                        <figcaption className="image-text">
                            © Perttu Saksa
                        </figcaption>
                    </div>
                    <p>
                        Tapani Rinne (b. 1962) is a Finnish musician, composer
                        and record producer, who is known for his experimental
                        and innovative style with the clarinet and saxophone.
                    </p>
                    <p>
                        An avid student of clarinets and saxophones since the
                        age of eight, this man of integrity rightfully belongs
                        in the “Hall of Fame” of the most respected Nordic
                        instrumentalists. As a solo artist, the
                        reedsman/composer has made his mark through close
                        collaborations with fellow Finnish iconoclasts Edward
                        Vesala, Raoul Björkenheim, Kimmo Pohjonen, Wimme Saari,
                        and Iro Haarla.
                    </p>
                    <p>
                        As a leader of the pioneering techno-jazz group
                        RinneRadio whose mix of meditative jazz motifs and
                        electronica has been welcomed with open arms all over
                        the globe — the man has released twelve albums since
                        1988 and operated with vanguardists such as DJ Spooky
                        and Mika Vainio.
                    </p>
                    <p>
                        His experimental and innovative style with the clarinet
                        and saxophone can be heard on three of his ambient-based
                        solo albums and on the “duo albums” with Jimi Tenor
                        (’Suburban Sax’, 1991) and percussionist Teho Majamäki
                        (’Inside the Temple’, 2011).
                    </p>
                    <p>
                        As many youngsters at the time, Tapani began his musical
                        studies in the sax section of the Pori Big Band in 1974,
                        and was to reach the first watershed of his musical
                        career nine years later. After spending the period
                        between 1981 and 1985 studying the clarinet at the
                        renowned Sibelius Academy in Helsinki, he decided to
                        broaden his horizons by participating in
                        composer/drummer Edward Vesala’s controversial Sound
                        &amp; Fury workshops.
                    </p>
                    <div className="image-container">
                        <Image
                            layout="responsive"
                            alt="Vesala"
                            src="/assets/vesala.jpeg"
                            width="373"
                            height="282"
                        />
                    </div>
                    <p>
                        This collaboration, which was to bloom until the guru’s
                        untimely demise in December 1999, commenced with Rinne’s
                        appearance on the legendary 1989 Vesala album ’Lumi’.
                        During the 1980’s Rinne would also continue to hone his
                        trad jazz chops among the ranks of the UMO Jazz
                        Orchestra and the EBU Big Band. He took on a variety of
                        session gigs and performed at the Finnish National
                        Opera, but stayed close to the Sound &amp; Fury circle
                        for the last five years of the decade.
                    </p>
                    <p>
                        Testament to the radical experimenter’s individual style
                        can be found on guitarist/composer Raoul Björkenheim’s
                        debut album ’Ritual’, released in 1988 under the group
                        name Krakatau. Also in 1988, Rinne released the
                        eponymous debut album of his group RinneRadio. This
                        recording was produced by Edward Vesala and consisted
                        mainly of his compositions.
                    </p>
                    <p>
                        The “moral” debut of RinneRadio came two years later in
                        the form of ’Dance and Visions’. For this disc Tapani
                        assembled an eclectic team of front-row musicians and
                        composed all but one of the nine tunes himself. Such was
                        the local enthusiasm that RinneRadio was dispatched to
                        represent Finland at the annual EBU concert. Thus began
                        a long and winding road of numerous tours and concerts
                        abroad.
                    </p>
                    <p>
                        After ’Dance and Visions’, RinneRadio has released ten
                        full-length albums: ’Joik’ (1992), ’Unik’ (1994), ’Rok’
                        (1996), ’G’ (1998), ’Nao’ (2001), ‘Lumix’ (2003), ‘Pan’
                        (2004), ’+’ (2006), ’On’ (2007), and ’Pole Stars’
                        (2009). The discography is completed by the CD singles
                        ’DiorInNera’, ’Joulu’, ’Aromaa Alt’, ’Osaka’, ‘Juju’,
                        ’Affluenza’, ‘Kuvala’, and the remix efforts ’Pfft’
                        (1997) and ’B’ (1999). After being licensed to various
                        compilations at the change of the Millennium, ‘Kuvala’
                        became an overnight sensation on the international club
                        scene. In 2008 RinneRadio released a compilation
                        entitled ’20′ celebrating their 20th anniversary. The
                        album was compiled by asking radio and club DJ’s to list
                        tracks for their dream RinneRadio album.
                    </p>
                    <p>
                        During the years of primary international recognition,
                        i.e. the era from ’Joik’ to ’Rok’, Rinne’s most
                        important collaborators were bassist/synthesist Jari
                        Kokkonen, sampler/sequencer wizard Kimmo Kajasto and
                        studio mastermind Pauli Saastamoinen. The latter remains
                        Tapani’s right-hand-man to this day, but along the way
                        the fluctuating line-up has mostly been embellished by
                        turntable specialists and percussionists. A separate
                        mention must be given to the live remix sessions
                        conducted with Mika Vainio (of Pan Sonic fame) in March
                        1995 and DJ Spooky in July 1997.
                    </p>
                    <p>
                        A new dawn broke for RinneRadio with the release of
                        ‘Pan’ in 2004. With this mostly “live-in-the-studio”
                        album Rinne introduced two new musicians eager to take
                        on the world with their novel vision — this time in the
                        ranks of RinneRadio. Samplerist/synthesist Verneri Lumi
                        (aka Tuomas Norvio) and percussionist Juusonik (aka
                        Juuso Hannukainen) had both cut their teeth with leading
                        Finnish pop and rap teams before bringing their unique
                        flavour to the table. The album also featured the violin
                        virtuoso Pekka Kuusisto in a major role.
                    </p>
                    <p>
                        Even though maintaining a tight focus on RinneRadio,
                        Tapani has also thrived as solo artist and producer. He
                        has written music for theatre, radio readings, cinema,
                        dance and modern circus and created the sonic setting
                        for several art exhibitions.
                    </p>
                    <p>
                        Rinne’s solo debut ’Insider’ came out in 1999 and was
                        followed by ‘Nectic’ in 2002. ’Insider’ was based on the
                        music he composed for the Swedish television series with
                        the same name. Both of these discs present a somewhat
                        subdued side of Rinne as a music maker by concentrating
                        on the atmospheric works he has written for film, TV and
                        various performances and installations. Yet another
                        aspect was revealed by the 2000 collaboration ‘Forces of
                        Light’ with the Russian techno/ambient duo New
                        Composers. Tapani continued his solo excursions in 2005
                        with the ’Silent Night’, which featured new
                        interpretations of traditional Christmas carols.
                    </p>
                    <p>
                        A one of a kind adventure was ignited as percussionist
                        Teho Majamäki told Tapani about his trips to India and
                        the marvelous acoustic spaces he had encountered there.
                        The fellow musicians packed their instruments and set
                        off for India to record in the temples of Maharashtra.
                        The resulting album is something that couldn’t have come
                        to exist anywhere else. The subtle sounds of Rinne’s
                        clarinets and Majamäki’s udu and santoor blend into the
                        atmosphere of the caves, accompanied by the distant
                        howls of wild animals.
                    </p>
                    <p>
                        Another fine, still ongoing, team effort was kickstarted
                        already in 2001 as Rinne joined forces with Vellu
                        Maurola (aka DJ Slow of Pepe Deluxè fame). The duo was
                        named SlowHill, and the debut album ‘FinnDisc’ was
                        released to massive critical acclaim in 2002 by Blue
                        Note Finland. The follow-up, ‘Fennika’ came out in 2005
                        and Summer 2010 saw the release of the third SlowHill
                        album, called Muzak. A totally new avenue for Rinne,
                        SlowHill is best described as downtempo or lounge music.
                    </p>
                    <p>
                        All of the aforementioned aside, Tapani has worked
                        tightly as a band member and producer with Sámi joik
                        singer Wimme Saari on the albums ’Wimme’ (1995),
                        ’Gierran’ (1997), ’Cugu’ (2000) and ’Mun’ (2009). The
                        latter was a world music hit all over Europe, staying on
                        the World Music Charts Europe Top 20 radio chart for a
                        respectable four months in 2010, peaking at number 3.
                        Following the albums success, Wimme and his band had
                        several corcerts abroad in 2010 and a tour of seven
                        performances in China in September.
                    </p>
                    <p>
                        In Arpil 2011 the Wimme album ’Mun’ gained Tapani the
                        grand Teosto Prize, granted by the Finnish copyright
                        collecting society Teosto. “In ’Mun’, consisting of
                        works by Wimme Saari and Tapani Rinne, and arrangements
                        by Tuomas Norvio and Tapani Rinne, the traditional yoik
                        and new sound worlds are combined excitingly. The
                        relationship between the contemporary and the
                        traditional is both joyful and playful,” the jury
                        commended.
                    </p>
                    <p>
                        The Teosto Prize is perhaps Tapani’s most prestigious
                        award to date, but it wasn’t his first. He is the 1992
                        recipient of the Georgie Award (aka “The Jazz Musician
                        of the Year” as awarded by the Finnish Jazz Federation).
                        In 1994 critical merit headed RinneRadio’s way too, as
                        ’Unik’ brought home the Jazz-Emma — aka the Finnish
                        equivalent of the Jazz Grammy.
                    </p>
                    <p>
                        Tapani Rinne performs regularly on the Old and New
                        Continent, Japan and Africa with RinneRadio and Wimme.
                        His work has received rave reviews in such magazines as
                        The Rolling Stone (the USA), Les Inrockuptibles
                        (France), The Wire (the UK) and Orkesterjournalen
                        (Sweden). For example David Rothenberg from the New York
                        Times descibes Tapani Rinne as: “...Finland’s Tapani
                        Rinne, perhaps the world’s only techno bass clarinetist,
                        is hard to stop listening to... There is something to be
                        gained by melding the organic reed with the cool
                        computer, it is a lonely northern forest sound unheard
                        before now.”
                    </p>
                    <p>
                        Eagerly embracing novel inventions, Rinne’s sexy
                        saxophone and solemn bass clarinet regularly recalibrate
                        all meters of self-expression.
                    </p>
                    <div className="image-container">
                        <Image
                            alt="Tapani Rinne"
                            src="/assets/IMG_0793_ps_650.jpg"
                            width="650"
                            height="433"
                        />
                    </div>
                    <figcaption className="image-text">
                        © Jukka Mantere
                    </figcaption>
                </article>
            </main>
            <Sidebar />
            <Footer />
        </div>
    );
}
