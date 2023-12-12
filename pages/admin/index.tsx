import Head from "next/head";
import { Fragment, useEffect, useState } from "react";

interface IRegistrant {
  _id: string;
  firstName: string;
  lastName: string;
  attendanceStatus: boolean;
  preferredEntree: string;
  dietaryRestrictions: string;
  guest: [];
  [key: string]: any;
}

export default function Home() {
  const [registrants, setRegistrants] = useState<Array<IRegistrant> | null>(
    null
  );

  useEffect(() => {
    fetch("/api/registrants")
      .then((res) => res.json())
      .then((data) => {
        setRegistrants(data.data);
      });
  }, []);

  const onDelete = (e: any, id: string) => {
    e.preventDefault();
    fetch(`/api/registrants/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.success ? "Deleted!" : "Error: Cannot delete.");
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  };

  console.log("registrants: ", registrants);

  return (
    <>
      <Head>
        <title>M&M Wedding</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p className="fs-1">Admin Page</p>
        {registrants && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Attending?</th>
                <th scope="col">Preferred Entree</th>
                <th scope="col">Dietary Restrictions</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {registrants.map((registrant) => {
                const {
                  _id,
                  firstName,
                  lastName,
                  attendanceStatus,
                  preferredEntree,
                  dietaryRestrictions,
                  guests,
                } = registrant;

                return (
                  <Fragment key={_id}>
                    <tr>
                      <td scope="row">{`${firstName} ${lastName}`}</td>
                      <td>{attendanceStatus ? "Yes" : "No"}</td>
                      <td>{preferredEntree}</td>
                      <td>{dietaryRestrictions}</td>
                      <td>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={(e) => {
                              onDelete(e, _id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                    {guests &&
                      guests.length > 0 &&
                      guests.map((guest: any, index: number) => {
                        return (
                          <tr key={`guest-${index}`}>
                            <td scope="row">{`${guest.firstName} ${guest.lastName}`}</td>
                            <td>Yes - Guest</td>
                            <td>{guest.preferredEntree}</td>
                            <td>{guest.dietaryRestrictions}</td>
                            <td>
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={(e) => {
                                    onDelete(e, _id);
                                  }}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        )}
      </main>
    </>
  );
}
