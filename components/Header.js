import Link from "next/link";
import Nav from "@components/Nav";

export default function Header() {
    return (
        <header>
            <Link href="/">
                <a className="site-name">Tapani Rinne</a>
            </Link>
            <input name="toggle" type="checkbox" />
            <label htmlFor="toggle"></label>
            <Nav />
        </header>
    );
}
