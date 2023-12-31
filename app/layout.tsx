import Image from "next/image";
import type { Metadata } from "next";
import "@styles/globals.scss";

//Redux store provider
import StoreProvider from "./storeProvider";

//Assets
import castle from "@assets/icons/castle.svg";
import owl from "@assets/icons/owl.svg";
import wand from "@assets/icons/wand.svg";
import archs from "@assets/icons/archs.svg";
import map from "@assets/icons/map.svg";
import glasses from "@assets/icons/glasses.svg";
import snitch from "@assets/icons/snitch.svg";

//Font
import { merriweather } from "@font/font";

//Components
import Header from "@components/Header/Header";

export const metadata: Metadata = {
  title: "Harry Potter App",
  description: "Get all the Harry Potter character's info. Quiz included",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${merriweather.variable}`}>
        <div className="background">
          <span>
            <Image src={castle} alt="Hogwarts Castle" />
          </span>
          <span>
            <Image src={owl} alt="Hedwig" />
          </span>
          <span>
            <Image src={wand} alt="Magic Wand" />
          </span>
          <span>
            <Image src={archs} alt="Quiditch Archs" />
          </span>
          <span>
            <Image src={map} alt="Marauderers map" />
          </span>
          <span>
            <Image src={glasses} alt="Harry Potter" />
          </span>
          <span>
            <Image src={snitch} alt="Snitch" />
          </span>
          <span>
            <Image src={castle} alt="Hogwarts Castle" />
          </span>
          <span>
            <Image src={owl} alt="Hedwig" />
          </span>
          <span>
            <Image src={wand} alt="Magic Wand" />
          </span>
          <span>
            <Image src={archs} alt="Quiditch Archs" />
          </span>
          <span>
            <Image src={map} alt="Marauderers map" />
          </span>
          <span>
            <Image src={glasses} alt="Harry Potter" />
          </span>
          <span>
            <Image src={snitch} alt="Snitch" />
          </span>
          <span>
            <Image src={castle} alt="Hogwarts Castle" />
          </span>
          <span>
            <Image src={owl} alt="Hedwig" />
          </span>
          <span>
            <Image src={wand} alt="Magic Wand" />
          </span>
          <span>
            <Image src={archs} alt="Quiditch Archs" />
          </span>
          <span>
            <Image src={map} alt="Marauderers map" />
          </span>
          <span>
            <Image src={glasses} alt="Harry Potter" />
          </span>
          <span>
            <Image src={snitch} alt="Snitch" />
          </span>
          <span>
            <Image src={castle} alt="Hogwarts Castle" />
          </span>
          <span>
            <Image src={owl} alt="Hedwig" />
          </span>
          <span>
            <Image src={wand} alt="Magic Wand" />
          </span>
          <span>
            <Image src={archs} alt="Quiditch Archs" />
          </span>
          <span>
            <Image src={map} alt="Marauderers map" />
          </span>
          <span>
            <Image src={glasses} alt="Harry Potter" />
          </span>
          <span>
            <Image src={snitch} alt="Snitch" />
          </span>
        </div>
        <Header />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
