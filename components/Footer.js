import Link from "next/link";

export default function Nav() {
    return (
        <footer>
            <div className="links">
                <a href="https://www.soundcloud.com">
                    <img alt="soundcloud" src="./assets/icons/soundcloud.svg" />
                </a>
                <a href="https://www.spotify.com">
                    <img alt="spotify" src="./assets/icons/spotify.svg" />
                </a>
                <a href="https://www.bandcamp.com">
                    <img alt="bandcamp" src="./assets/icons/bandcamp.svg" />
                </a>
                <a href="https://www.instagram.com">
                    <img alt="instagram" src="./assets/icons/instagram.svg" />
                </a>
                <a href="https://www.facebook.com">
                    <img alt="facebook" src="./assets/icons/facebook.svg" />
                </a>
            </div>
            <address>
                <p>
                    <a href="mailto:aani@welho.com">aani@welho.com</a>
                    <br />
                </p>
            </address>
        </footer>
    );
}
