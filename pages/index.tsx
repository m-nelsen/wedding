import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nelsen.io</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/sun.svg" />
      </Head>
      <main>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh", width: "100vw" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sun.svg" alt="Picture of a sun" />
        </div>
      </main>
    </>
  );
}
