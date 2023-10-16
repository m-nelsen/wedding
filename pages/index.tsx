import Head from "next/head";
import RsvpForm from "../components/RsvpForm/index";
import Image from "next/image";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import windmillPic from "../public/windmill.jpg";
import dualRingsPic from "../public/dual-rings.jpg";
import daysInnHotelPic from "../public/days-inn-by-wyndham-chino-valley.jpg";
import primroseHotelPic from "../public/primrose-inn-and-suites.jpg";
import hassayampaHotelPic from "../public/hassayampa-inn.jpg";
import stMichealHotelPic from "../public/hotel-st-micheal.jpg";
// import { signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const Countdown = dynamic(() => import("../components/Countdown/index"), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>M&M Wedding</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <button onClick={() => signOut()}>Sign out</button> */}

        <section className="min-vh-100 h-100 w-100 d-flex flex-column justify-content-between">
          <div
            className="position-absolute h-100 w-100"
            style={{ zIndex: "-1" }}
          >
            <Image
              src="/holding-hands-ring-bright.png"
              style={{ objectFit: "cover", objectPosition: "60% 50%" }}
              fill={true}
              priority
              alt="Picture of a windmill next to a pond"
            />
          </div>
          <div></div>
          <div className="text-center container">
            <div className="row pb-5">
              <div className="col">
                <p className="fs-3">M & M</p>
              </div>
            </div>
            <div className="row py-5">
              <div className="col">
                <h1 className="display-1">Matthew & Madelyne</h1>
                <h2 className="display-4">
                  We&apos;re Saying &quot;I Do&quot;
                </h2>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 pt-5">
              <div className="col">
                <p className="fs-3">May 11, 2024 at 3:00 PM</p>
              </div>
              <div className="col">
                <p className="fs-3">Windmill House Chino Valley, AZ</p>
              </div>
            </div>
          </div>
          <Countdown />
        </section>

        <section className="bg-primary">
          <div className="container py-5">
            <div className="row row-cols-1 row-cols-lg-2 g-5">
              <div
                className="col position-relative"
                style={{ minHeight: "40vh" }}
              >
                <Image
                  src={windmillPic}
                  className="rounded-3"
                  style={{ objectPosition: "30% 50%" }}
                  fill={true}
                  objectFit="cover"
                  alt="Large windmill near a pond"
                />
              </div>
              <div className="col text-center">
                <h2 className="display-2 pb-5">Join us on our special day</h2>
                <p className="fs-2">Date:</p>
                <p className="fs-4">May 11, 2024 at 3:00 PM</p>
                <p className="fs-2 pt-5">Venue:</p>
                <p className="fs-4">Windmill House</p>
                <p className="fs-2 pt-5">Dress Code:</p>
                <p className="fs-4">Formal Attire</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="row">
            <div className="col">
              <h2 className="display-2 text-center pb-5">Nearby Hotels</h2>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-5">
            <div className="col">
              <div className="card">
                <div className="ratio ratio-1x1">
                  <Image
                    src={daysInnHotelPic}
                    className=""
                    objectFit="cover"
                    alt="Large windmill near a pond"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Days Inn by Wyndham Chino Valley
                  </h5>
                  <a
                    href="https://www.wyndhamhotels.com/days-inn/chino-valley-arizona/days-inn-chino-valley/overview"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Image
                  src={primroseHotelPic}
                  className="w-100 h-100 card-img-top"
                  objectFit="cover"
                  alt="Large windmill near a pond"
                />
                <div className="card-body">
                  <h5 className="card-title">Primrose Inn & Suites</h5>
                  <a
                    href="https://primroseinnandsuites.com/"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Image
                  src={hassayampaHotelPic}
                  className="w-100 h-100 card-img-top"
                  objectFit="cover"
                  alt="Large windmill near a pond"
                />
                <div className="card-body">
                  <h5 className="card-title">Hassayampa Inn</h5>
                  <a
                    href="https://www.hassayampainn.com/"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Image
                  src={stMichealHotelPic}
                  className="w-100 h-100 card-img-top"
                  objectFit="cover"
                  alt="Large windmill near a pond"
                />
                <div className="card-body">
                  <h5 className="card-title">Hotel St. Micheal</h5>
                  <a
                    href="https://www.stmichaelhotel.com/"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary">
          <div className="row row-cols-1 row-cols-lg-2 pt-5 g-0 mx-auto">
            <div className="col container">
              <h2 className="display-2 mb-5">
                Your presence at our wedding is the only present we require.
              </h2>
            </div>
            <div className="col d-flex align-items-center container">
              <p className="fs-4 mb-5">
                However, if you wish to furthers bless our special day with a
                gift, we have created an online registry at&nbsp;
                <a href="#" className="text-black">
                  reallygreatesite.com
                </a>
                .
              </p>
            </div>
          </div>
          <div
            className="position-relative w-100 g-0"
            style={{ minHeight: "45vh" }}
          >
            <Image
              src={dualRingsPic}
              style={{ objectPosition: "70% 70%" }}
              fill={true}
              quality={100}
              objectFit="cover"
              alt="Large windmill near a pond"
            />
          </div>
        </section>

        <section className="container">
          <div className="row py-5 px-2">
            <div className="col">
              <h2 className="display-2 text-center">RSVP</h2>
              <p className="fs-4 text-center mb-5">
                Please RSVP by March 1st, 2024
              </p>
              <RsvpForm />
            </div>
          </div>
        </section>

        <section className="bg-primary py-4">
          <p className="text-center m-0">2024 M&M Wedding</p>
        </section>
      </main>
    </>
  );
}
