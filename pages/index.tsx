import Head from "next/head";
import RsvpForm from "../components/RsvpForm/index";
// import Countdown from "../components/Countdown/index";
import Image from "next/image";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

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
        <section className="position-relative" style={{ height: "90vh" }}>
          <Image
            src="/holding-hands-ring-bright.png"
            style={{ objectFit: "cover", objectPosition: "60% 50%" }}
            fill={true}
            alt="Picture of a windmill next to a pond"
          />
          <div className="position-absolute top-50 start-50 translate-middle container text-center">
            <div className="row pb-5">
              <div className="col">
                <p className="fs-5">M & M</p>
              </div>
            </div>
            <div className="row py-5">
              <div className="col">
                <h1>Matthew & Madelyne</h1>
                <h2>We&apos;re Saying &quot;I Do&quot;</h2>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 pt-5">
              <div className="col">
                <p className="fs-4">May 11, 2024 at 3:00 PM</p>
              </div>
              <div className="col">
                <p className="fs-4">Windmill House Chino Valley, AZ</p>
              </div>
            </div>
          </div>
        </section>

        <Countdown />

        <section className="bg-primary">
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 py-5">
              <div className="col align-items-center d-flex">
                <img
                  className="img-fluid rounded"
                  src="windmill.webp"
                  alt="Large windmill near a pond"
                />
              </div>
              <div className="col text-center">
                <p className="fs-1 pb-5">Join us on our special day</p>
                <p className="fs-2">Date:</p>
                <p className="fs-4">May 11, 2024 at 3:00 PM</p>
                <p className="fs-4 pt-5">Venue:</p>
                <p className="fs-2">Windmill House</p>
                <p className="fs-4 pt-5">Dress Code:</p>
                <p className="fs-2">Formal Attire</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="row">
            <div className="col">
              <p className="text-center fs-1">Nearby Hotels</p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-4">
            <div className="col">
              <div className="card">
                <img
                  src="dual-rings.png"
                  alt="Two wedding rings stock image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Best Western in Chino Valley</h5>
                  <p className="card-text">
                    Description of the Best Western in Chino Valley. Dual king
                    beds and a spacious bathroom.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="dual-rings.png"
                  alt="Two wedding rings stock image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Best Western in Chino Valley</h5>
                  <p className="card-text">
                    Description of the Best Western in Chino Valley. Dual king
                    beds and a spacious bathroom.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="dual-rings.png"
                  alt="Two wedding rings stock image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Best Western in Chino Valley</h5>
                  <p className="card-text">
                    Description of the Best Western in Chino Valley. Dual king
                    beds and a spacious bathroom.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="dual-rings.png"
                  alt="Two wedding rings stock image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Best Western in Chino Valley</h5>
                  <p className="card-text">
                    Description of the Best Western in Chino Valley. Dual king
                    beds and a spacious bathroom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-primary">
          <div className="row row-cols-1 row-cols-lg-2 p-5">
            <div className="col">
              <p className="fs-1">
                Your presence at our wedding is the only present we require.
              </p>
            </div>
            <div className="col">
              <p className="fs-4">
                However, if you wish to furthers bless our special day with a
                gift, we have created an online registry at&nbsp;
                <a href="#" className="text-black">
                  www.reallygreatesite.com
                </a>
                .
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src="dual-rings.png"
                alt="Two wedding rings stock image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row p-5">
            <div className="col">
              <p className="fs-1 text-center">RSVP</p>
              <RsvpForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
