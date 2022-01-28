import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import main from './assets/main'

export default function Home() {
  return (
    <div>
      <Head>
      <title>Tapani Rinne</title>
        <meta name="description" content="Tapani Rinne, finnish musician, composer and record producer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    <header>
      <a href="/" className="site-name">Tapani Rinne</a>
      <input name="toggle" type="checkbox" />
      <label htmlFor="toggle"></label>
      <nav>
        <ul>
                <li>
                  <details className="Solo">
                      <summary>
                        <a href="solo">Solo</a>
                      </summary>
                    <ul>
                            <li><a href="solo#foghornia">Foghornia</a></li>
                            <li><a href="solo#radioton">Radioton</a></li>
                            <li><a href="solo#silent_night">Silent Night</a></li>
                            <li><a href="solo#nectic">Nectic</a></li>
                            <li><a href="solo#insider">Insider</a></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details className="Bands &amp; Projects">
                      <summary data-name="Bands &amp; Projects">
                      </summary>
                    <ul>
                            <li><a href="https://rinneradio.com">RinneRadio</a></li>
                            <li><a href="https://wimme-rinne.com">Wimme &amp; Rinne</a></li>
                            <li><a href="https://rinnemajamaki.com">Rinne &amp; Majamäki</a></li>
                            <li><a href="https://slowhill.com">SlowHill</a></li>
                            <li><a href="https://hushhushrecords.bandcamp.com/album/open">Tapani Rinne &amp;
                       Juha Mäki-Patola</a></li>
                    </ul>
                  </details>
                </li>
                <li><a href="about">About</a></li>
                <li><a href="press">Press</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
           <div className="intro-text">
<p><em>Finnish musician, composer and record producer, who is known for his experimental and innovative style with the clarinet and saxophone</em></p>
</div>
<div className="gigs-container">
<div className="gigs">
<ul>
<li>
<p><strong>27.01.</strong>
Wimme &amp; Rinne, Loviisa</p>
</li>
<li>
<p><strong>05.02.</strong>
Wimme &amp; Rinne, Helsinki</p>
</li>
<li>
<p><strong>21.05.</strong>
Wimme &amp; Rinne, Oulu</p>
</li>
</ul>
</div>
</div>
<div className="intro-image">
  <img alt="Kuva" src="./assets/JuhaTapani_JuhaTapani_ER_00107_Square_FullRes.jpg" />
</div>
      </article>
</main>
<aside className="sidebar-container"> </aside>
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
          <a href="mailto:aani@welho.com">aani@welho.com</a><br />
        </p>
      </address>
    </footer>
    </div>
  )
}
