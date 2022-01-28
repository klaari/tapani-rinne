import Link from "next/link";
import Nav from "@components/Nav";
import { useRouter } from "next/router";

export default function Sidebar() {
    const router = useRouter();

    const isHome = router.pathname === "/";

    return (
        <aside className="sidebar-container">
            <Nav />
            {isHome && (
                <div className="gigs">
                    <ul>
                        <li>
                            <p>
                                <strong>05.02.</strong>
                                Wimme &amp; Rinne, Helsinki
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>21.05.</strong>
                                Wimme &amp; Rinne, Oulu
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>03.06.</strong>
                                Tapani Rinne &amp; Sid Hille, Helsinki
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>27.08.</strong>
                                RinneRadio, Kittilä
                            </p>
                        </li>
                    </ul>
                </div>
            )}
        </aside>
    );
}
