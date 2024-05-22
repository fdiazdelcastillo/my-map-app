import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Map from "../components/Map";
require("dotenv").config();

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <div>Hola Mafe</div>
        <Map
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          address="1600 Amphitheatre Parkway, Mountain View, CA"
        />
      </main>
    </>
  );
}
