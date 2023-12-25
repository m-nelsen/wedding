import { FC, Fragment, useState } from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  useFieldArray,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  attendanceStatus: boolean;
  preferredEntree: string;
  dietaryRestrictions: string;
};

const trashIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-trash"
    viewBox="0 0 16 16"
  >
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
  </svg>
);

const alertIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </symbol>
    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </symbol>
    <symbol
      id="exclamation-triangle-fill"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </symbol>
  </svg>
);

const RsvpForm: FC = () => {
  const [formSubmitStatus, setFormSubmitStatus] = useState<number | null>(null);

  const formValues = {
    firstName: "",
    lastName: "",
    email: "",
    attendanceStatus: true,
    preferredEntree: "",
    dietaryRestrictions: "",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { register, handleSubmit, formState, control } = useForm<any>({
    defaultValues: formValues,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { errors, isSubmitting, isSubmitSuccessful } = formState;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { fields, append, remove } = useFieldArray<any>({
    name: "guests",
    control,
  });

  const onSubmit: SubmitHandler<Inputs> = (data: FieldValues) => {
    fetch(import.meta.env.VITE_API_BASE_ROUTE, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setFormSubmitStatus(response.status || 401);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register(`firstName`, {
              required: "First name is required",
            })}
            className="form-control d-inline w-50 rounded-1"
            placeholder="First name"
          />
          <input
            {...register(`lastName`, {
              required: "Last name is required",
            })}
            className="form-control d-inline w-50 rounded-1"
            placeholder="Last name"
          />

          <ErrorMessage
            errors={errors}
            name={`firstName`}
            message="First name is required"
            as={<div className="invalid-feedback d-inline-block w-50"></div>}
          />
          <ErrorMessage
            errors={errors}
            name={`lastName`}
            message="Last name is required"
            as={<div className="invalid-feedback d-inline-block w-50"></div>}
          />

          <input
            {...register(`email`, {
              required: "Email is required",
            })}
            className="form-control mt-4 rounded-1"
            type="email"
            placeholder="Email"
          />

          <ErrorMessage
            errors={errors}
            name={`email`}
            message="Email is required"
            as={<div className="invalid-feedback d-inline-block"></div>}
          />

          <label className="mt-4 d-block">
            Will you be attending the wedding?
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="acceptRadio"
              {...register(`attendanceStatus`, {
                required: "Selection is required",
              })}
              value="true"
            />
            <label className="form-check-label" htmlFor="acceptRadio">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="declineRadio"
              {...register(`attendanceStatus`, {
                required: "Selection is required",
              })}
              value="false"
            />
            <label className="form-check-label" htmlFor="declineRadio">
              No
            </label>
          </div>

          <ErrorMessage
            errors={errors}
            name={`attendanceStatus`}
            message="Selection is required"
            as={<div className="invalid-feedback d-inline-block"></div>}
          />

          <label className="mt-4 d-block">What is your preferred entree?</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="primeRibRadio"
              {...register(`preferredEntree`, {
                required: "Selection is required",
              })}
              value="Prime Rib"
            />
            <label className="form-check-label" htmlFor="primeRibRadio">
              Prime Rib
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="bbqChickenRadio"
              {...register(`preferredEntree`, {
                required: "Selection is required",
              })}
              value="BBQ Chicken"
            />
            <label className="form-check-label" htmlFor="bbqChickenRadio">
              BBQ Chicken
            </label>
          </div>

          <ErrorMessage
            errors={errors}
            name={`preferredEntree`}
            message="Selection is required"
            as={<div className="invalid-feedback d-inline-block"></div>}
          />

          <label className="mt-4">Please list any dietary restrictions:</label>
          <textarea
            className="form-control rounded-1"
            id="dietaryRestrictionsTextArea"
            rows={3}
            {...register(`dietaryRestrictions`, {
              required: false,
            })}
          ></textarea>

          {fields.map((field, index) => {
            return (
              <Fragment key={field.id}>
                <hr className="my-4" />
                <div className="d-flex align-items-center justify-content-between my-2">
                  <h3 className="fs-5 m-0">{`Guest ${index + 1}`}</h3>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    {trashIcon}
                  </div>
                </div>
                <input
                  {...register(`guests.${index}.firstName`, {
                    required: "First name is required",
                  })}
                  className="form-control d-inline w-50 rounded-1"
                  placeholder="First name"
                />
                <input
                  {...register(`guests.${index}.lastName`, {
                    required: "Last name is required",
                  })}
                  className="form-control d-inline w-50 rounded-1"
                  placeholder="Last name"
                />

                <ErrorMessage
                  errors={errors}
                  name={`guests.${index}.firstName`}
                  message="First name is required"
                  as={
                    <div className="invalid-feedback d-inline-block w-50"></div>
                  }
                />
                <ErrorMessage
                  errors={errors}
                  name={`guests.${index}.lastName`}
                  message="Last name is required"
                  as={
                    <div className="invalid-feedback d-inline-block w-50"></div>
                  }
                />
                <label className="mt-4 d-block">
                  What is their preferred entree?
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id={`primeRibRadio-${index}`}
                    {...register(`guests.${index}.preferredEntree`, {
                      required: "Selection is required",
                    })}
                    value="Prime Rib"
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`primeRibRadio-${index}`}
                  >
                    Prime Rib
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id={`bbqChickenRadio-${index}`}
                    {...register(`guests.${index}.preferredEntree`, {
                      required: "Selection is required",
                    })}
                    value="BBQ Chicken"
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`bbqChickenRadio-${index}`}
                  >
                    BBQ Chicken
                  </label>
                </div>

                <ErrorMessage
                  errors={errors}
                  name={`guests.${index}.preferredEntree`}
                  message="Selection is required"
                  as={
                    <div className="invalid-feedback d-inline-block w-50"></div>
                  }
                />

                <label className="mt-4 w-100">
                  Please list any dietary restrictions:
                </label>
                <textarea
                  className="form-control rounded-1"
                  id="dietaryRestrictionsTextArea"
                  rows={3}
                  {...register(`guests.${index}.dietaryRestrictions`, {
                    required: false,
                  })}
                ></textarea>
              </Fragment>
            );
          })}
        </div>

        <div>
          <p className="mt-4 mb-1">
            Please limit uninvited guests to one person, but feel free to RSVP
            invited family members as additional guests.
          </p>
          <button
            className="btn border border-black rounded-1"
            disabled={isSubmitSuccessful && formSubmitStatus === 201}
            type="button"
            onClick={() => {
              append({
                firstName: "",
                lastName: "",
                preferredEntree: "",
                dietaryRestrictions: "",
              });
            }}
          >
            Add Guest
          </button>
        </div>

        <button
          className="btn border border-black rounded-1 mt-4"
          disabled={isSubmitSuccessful && formSubmitStatus === 201}
          type="submit"
        >
          <span role="status">Submit</span>
          {isSubmitting && (
            <span
              className="spinner-grow spinner-grow-sm ms-2"
              aria-hidden="true"
            ></span>
          )}
        </button>

        {formSubmitStatus === 201 && (
          <>
            {alertIcon}
            <div
              className="alert alert-success d-flex align-items-center mt-4"
              role="alert"
            >
              <svg
                className="bi flex-shrink-0 me-2"
                width="24"
                height="24"
                role="img"
                aria-label="Success:"
              >
                <use xlinkHref="#check-circle-fill" />
              </svg>
              <div>Success! Thanks for the RSVP. </div>
            </div>
          </>
        )}
        {formSubmitStatus !== null && formSubmitStatus !== 201 && (
          <>
            {alertIcon}
            <div
              className="alert alert-danger d-flex align-items-center mt-4"
              role="alert"
            >
              <svg
                className="bi flex-shrink-0 me-2"
                width="24"
                height="24"
                role="img"
                aria-label="Danger:"
              >
                <use xlinkHref="#exclamation-triangle-fill" />
              </svg>
              <div>Error. Could not submit form.</div>
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default RsvpForm;
