import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Providers from "@/providers";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <NextNProgress />
      <Component {...pageProps} />
    </Providers>
  );
}
