import { FC, Fragment } from "react";
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

const RsvpForm: FC = () => {
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

  const { errors, isSubmitting } = formState;

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
                required: true,
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
                required: "Response is required",
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
            message="Attendence response is required"
            as={<div className="invalid-feedback d-inline-block"></div>}
          />

          <label className="mt-4 d-block">What is your preferred entree?</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="primeRibRadio"
              {...register(`preferredEntree`, {
                required: false,
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
                required: false,
              })}
              value="BBQ Chicken"
            />
            <label className="form-check-label" htmlFor="bbqChickenRadio">
              BBQ Chicken
            </label>
          </div>

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
                    id="primeRibRadio"
                    {...register(`guests.${index}.preferredEntree`, {
                      required: false,
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
                    {...register(`guests.${index}.preferredEntree`, {
                      required: false,
                    })}
                    value="BBQ Chicken"
                  />
                  <label className="form-check-label" htmlFor="bbqChickenRadio">
                    BBQ Chicken
                  </label>
                </div>
                <label className="mt-4">
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
          disabled={isSubmitting}
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default RsvpForm;
