import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <details className="Solo">
                        <summary>
                            <a href="solo">Solo</a>
                        </summary>
                        <ul>
                            <li>
                                <Link href="/solo#foghornia">
                                    <a>Foghornia</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/solo#radioton">
                                    <a>Radioton</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/solo#silent_night">
                                    <a>Silent Night</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/solo#nectic">
                                    <a>Nectic</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/solo#insider">
                                    <a>Insider</a>
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details className="Bands &amp; Projects">
                        <summary data-name="Bands &amp; Projects"></summary>
                        <ul>
                            <li>
                                <Link href="https://rinneradio.com">
                                    <a>RinneRadio</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://wimme-rinne.com">
                                    <a>Wimme &amp; Rinne</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://rinnemajamaki.com">
                                    <a>Rinne &amp; Majamäki</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://slowhill.com">
                                    <a>SlowHill</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://hushhushrecords.bandcamp.com/album/open">
                                    <a>Tapani Rinne &amp; Juha Mäki-Patola</a>
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/press">
                        <a>Press</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
