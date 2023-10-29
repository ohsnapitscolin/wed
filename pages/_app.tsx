import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { LayoutProvider } from "@/context/layout";

const superStudio = localFont({
  src: "./fonts/super-studio.otf",
  variable: "--font-super-studio",
});

const pinDot = localFont({
  src: "./fonts/pin-dot.otf",
  variable: "--font-pin-dot",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <style jsx global>{`
        html {
          --font-super-studio: ${superStudio.style.fontFamily};
          --font-pin-dot: ${pinDot.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}
