import { hanseok } from "@/libs/fonts";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={hanseok.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
