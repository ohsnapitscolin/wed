import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Colin & Lian</title>
        <meta property="og:title" content="Colin & Lian" key="title" />
        <meta
          property="og:image"
          content="https://colinandlian.com/images/seo.jpg"
        />
        <link rel="shortcut icon" href="/icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
