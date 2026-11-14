import { Html, Head, Main, NextScript } from "next/document";
import { default as CustomHead } from "next/head";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <CustomHead>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <title>The Movie Database</title>
      </CustomHead>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
