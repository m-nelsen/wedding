import Countdown from "./components/Countdown";
import RsvpForm from "./components/RsvpForm";
import "./scss/main.scss";

function App() {
  return (
    <main>
      <section
        className="container-md position-relative g-0 landing"
        style={{
          minHeight: "600px",
          marginTop: "2rem",
        }}
      >
        <div className="position-absolute h-100 w-100" style={{ zIndex: "-1" }}>
          <img
            src="/holding-hands.webp"
            style={{
              objectFit: "cover",
              objectPosition: "60% 30%",
            }}
            className="w-100 h-100 rounded"
            alt="Matt and Madelyne holding hands with engagement ring in view"
          />
        </div>
        <div
          className="text-center d-flex flex-column justify-content-center align-items-center"
          style={{ height: "600px" }}
        >
          <h1 className="display-3">Matthew & Madelyne</h1>
          <p className="text-uppercase middle-line w-50">Save the date</p>
          <p className="display-6 mb-4">May 11, 2024</p>
          <a
            className="btn btn-secondary px-5 py-2 rounded-1 bg-light fs-4"
            href="#rsvp"
          >
            RSVP
          </a>
          <div
            className="position-absolute sm-width-100"
            style={{
              top: "91%",
              margin: "auto",
              zIndex: "10",
            }}
          >
            <Countdown />

            <img
              src="/hanging-leaves.webp"
              className="px-2 w-100 hanging-leaves"
              alt="Leaves hanging beneath the wedding countdown clock"
            />
          </div>
        </div>
      </section>

      <section className="container-md position-relative join-us">
        <div className="row bg-primary m-0 w-100">
          <div className="col-12 col-md-4 p-0 m-0 mr-md-2">
            <img
              src="/windmill.webp"
              alt="Matt and Madelyne holding hands with engagement ring in view"
              className="w-100 h-100 rounded"
              style={{
                objectFit: "cover",
                objectPosition: "18% 0",
              }}
            />
          </div>
          <div className="col-12 col-md-8 p-0 m-0 p-md-1 position-relative">
            <div className="location-info g-0">
              <div
                className="position-absolute w-100 dual-rings"
                style={{ top: "-90px" }}
              >
                <img
                  src="/dual-rings.webp"
                  className="mx-auto"
                  style={{ height: "auto", width: "250px" }}
                  alt="Two intertwined wedding rings"
                />
              </div>
              <div className="text-center bg-light border border-secondary border-1 h-100 rounded py-5 px-1 d-flex flex-column justify-content-center join-us-info">
                <h2 className="mt-3">Join us at Windmill House</h2>
                <p className="fs-5 mb-2">Saturday May 11th, 2024 at 3:00pm</p>
                <p className="fs-5">1460 W Rd 4 N, Chino Valley, AZ 86323</p>
              </div>
            </div>
            <div className="row g-0 location-bottom-row">
              <img
                src="/ceremony.webp"
                alt="Arch and chairs decorated for wedding ceremony"
                className="h-100 rounded"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="container position-relative"
        style={{ marginBottom: "12rem" }}
      >
        <div className="position-absolute h-100 w-100" style={{ zIndex: "-1" }}>
          <img
            src="/heart-and-leaves.webp"
            style={{
              objectFit: "cover",
              objectPosition: "60% 50%",
              opacity: "6%",
            }}
            className="w-100 h-100 rounded"
            alt="Hearts and leaves"
          />
        </div>
        <div className="text-center">
          <h2>Registry</h2>
          <p className="m-0">
            If you want to donate to our honeymoon fund, please visit our
            registry.
          </p>
          <a
            href="https://withjoy.com/madelyne-and-matthew/registry"
            className="text-info"
          >
            https://withjoy.com/madelyne-and-matthew/registry
          </a>
          <p className="mt-4">
            There will be a donation box at our wedding too.
          </p>
        </div>
      </section>

      <section
        id="rsvp"
        className="container bg-light shadow rounded mt-5 p-2"
        style={{ marginBottom: "10rem" }}
      >
        <div
          className="position-relative w-75 h-75"
          style={{ left: "-9rem", top: "-8rem", zIndex: "-10" }}
        >
          <img
            src="/curved-branch.webp"
            style={{
              objectFit: "cover",
              transform: "scale(-1, 1)",
              position: "absolute",
              height: "300px",
              width: "300px",
            }}
            alt="Branch of leaves curving around the RSVP form"
          />
        </div>
        <div className="border border-secondary border-1 rounded p-3">
          <h2 className="text-center">RSVP</h2>
          <RsvpForm />
        </div>
        <div
          className="position-relative w-50 h-50"
          style={{
            right: "-92%",
            top: "-8rem",
            zIndex: "10",
          }}
        >
          <img
            src="/flower.webp"
            style={{
              objectFit: "cover",
              position: "absolute",
              height: "200px",
              width: "200px",
            }}
            alt="Flower in the bottom-right corner of the RSVP form"
          />
        </div>
      </section>

      <section className="container d-flex justify-content-center">
        <p>2024 M&amp;M Wedding</p>
      </section>
    </main>
  );
}

export default App;
