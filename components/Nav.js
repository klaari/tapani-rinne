import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <details className="Solo">
                        <summary>
                            <Link href="/solo">Solo</Link>
                        </summary>
                        <ul>
                            <li>
                                <Link href="/solo#foghornia">Foghornia</Link>
                            </li>
                            <li>
                                <Link href="/solo#radioton">Radioton</Link>
                            </li>
                            <li>
                                <Link href="/solo#silent_night">
                                    Silent Night
                                </Link>
                            </li>
                            <li>
                                <Link href="/solo#nectic">Nectic</Link>
                            </li>
                            <li>
                                <Link href="/solo#insider">Insider</Link>
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
                                    RinneRadio
                                </Link>
                            </li>
                            <li>
                                <Link href="https://wimme-rinne.com">
                                    Wimme &amp; Rinne
                                </Link>
                            </li>
                            <li>
                                <Link href="/rinnemajamaki">
                                    Rinne &amp; Majamäki
                                </Link>
                            </li>
                            <li>
                                <Link href="https://slowhill.com">
                                    SlowHill
                                </Link>
                            </li>
                            <li>
                                <Link href="https://hushhushrecords.bandcamp.com/album/open">
                                    Tapani Rinne &amp; Juha Mäki-Patola
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/press">Press</Link>
                </li>
            </ul>
        </nav>
    );
}
