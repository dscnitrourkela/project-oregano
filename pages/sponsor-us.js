import Head from 'next/head';
import InductionScreen from '../src/screens/InductionScreen/index';

export default function SponsorPage() {
  return (
    <>
      <Head>
        <title>HackNITR 3.0 | Virtual Edition</title>
        <meta name="title" content="HackNITR 3.0 | Virtual Edition" />
        <meta
          name="description"
          content="Annual Hackathon at NIT Rourkela aiming to provide student developers, a platform to transform their ideas into prototypes, alongside amazing workshops, sessions and fun mini-events.  Awaiting awesome hackers like you!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hacknitr.tech/" />
        <meta property="og:title" content="HackNITR 3.0 | Virtual Edition" />
        <meta
          property="og:description"
          content="Annual Hackathon at NIT Rourkela aiming to provide student developers, a platform to transform their ideas into prototypes, alongside amazing workshops, sessions and fun mini-events.  Awaiting awesome hackers like you!"
        />
        <meta property="og:image" content="/images/hacknitr_cover.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hacknitr.tech/" />
        <meta
          property="twitter:title"
          content="HackNITR 3.0 | Virtual Edition"
        />
        <meta
          property="twitter:description"
          content="Annual Hackathon at NIT Rourkela aiming to provide student developers, a platform to transform their ideas into prototypes, alongside amazing workshops, sessions and fun mini-events.  Awaiting awesome hackers like you!"
        />
        <meta property="twitter:image" content="/images/hacknitr_cover.png" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />

        <link
          href="/icons/maskable_icon_x128.png"
          rel="icon"
          type="image/png"
          sizes="128x128"
        />
        <link
          href="/icons/maskable_icon_x144.png"
          rel="icon"
          type="image/png"
          sizes="144x144"
        />
        <link
          href="/icons/maskable_icon_x152.png"
          rel="icon"
          type="image/png"
          sizes="152x152"
        />
        <link
          href="/icons/maskable_icon_x384.png"
          rel="icon"
          type="image/png"
          sizes="384x384"
        />
        <link
          href="/icons/maskable_icon_x512.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />

        <link rel="apple-touch-icon" href="/icons/maskable_icon_x384.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <link href="/manifest.json" rel="manifest" />
        <meta name="theme-color" content="#17171D" />
      </Head>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/8898157.js"
      ></script>

      <InductionScreen code="maI5lJ4t" />
    </>
  );
}
