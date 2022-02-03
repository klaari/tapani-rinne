import Link from "next/link";
import Nav from "@components/Nav";

export default function Header() {
    return (
        <header>
            <a href="/" className="site-name">
                Tapani Rinne
            </a>
            <input name="toggle" type="checkbox" />
            <label htmlFor="toggle"></label>
            <Nav />
        </header>
    );
}
