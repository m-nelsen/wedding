import { FC } from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  useFieldArray,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import FormStub from "./_children/FormStub";

type Inputs = {
  rsvpForm: {
    firstName: string;
    lastName: string;
    email: string;
    attendanceStatus: boolean;
    preferredEntree: string;
    dietaryRestrictions: string;
  }[];
};

const RsvpForm: FC = () => {
  const formValues = {
    firstName: "",
    lastName: "",
    email: "",
    attendanceStatus: true,
    preferredEntree: "",
    dietaryRestrictions: "",
  };

  const { register, handleSubmit, formState, reset, control, trigger } =
    useForm<Inputs>({
      defaultValues: { rsvpForm: [formValues] },
      mode: "onSubmit",
      reValidateMode: "onSubmit",
    });

  const { errors, isSubmitting } = formState;

  const { fields, append, remove, update } = useFieldArray<any>({
    name: "rsvpForm",
    control,
  });

  const onSubmit: SubmitHandler<Inputs> = (data: FieldValues) => {
    console.log("Starting submission...");

    const jsonData = JSON.stringify(data.rsvpForm);

    console.log("JSON Data: ", jsonData);

    fetch("/api/registrants", {
      method: "POST",
      body: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          if (fields.length > 1 && index < fields.length - 1) {
            return <FormStub key={field.id} {...field} />;
          }

          return (
            <div key={field.id}>
              <input
                {...register(`rsvpForm.${index}.firstName` as const, {
                  required: "First name is required",
                })}
                className="form-control d-inline w-50 rounded-1"
                placeholder="First name"
              />
              <input
                {...register(`rsvpForm.${index}.lastName` as const, {
                  required: "Last name is required",
                })}
                className="form-control d-inline w-50 rounded-1"
                placeholder="Last name"
              />

              <ErrorMessage
                errors={errors}
                name={`rsvpForm.${index}.firstName`}
                message="First name is required"
                as={
                  <div className="invalid-feedback d-inline-block w-50"></div>
                }
              />
              <ErrorMessage
                errors={errors}
                name={`rsvpForm.${index}.lastName`}
                message="Last name is required"
                as={
                  <div className="invalid-feedback d-inline-block w-50"></div>
                }
              />

              <input
                {...register(`rsvpForm.${index}.email` as const, {
                  required: "Email is required",
                })}
                className="form-control mt-4 rounded-1"
                type="email"
                placeholder="Email"
              />

              <ErrorMessage
                errors={errors}
                name={`rsvpForm.${index}.email`}
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
                  {...register(`rsvpForm.${index}.attendanceStatus` as const, {
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
                  {...register(`rsvpForm.${index}.attendanceStatus` as const, {
                    required: "Response is required",
                  })}
                  value="false"
                />
                <label className="form-check-label" htmlFor="declineRadio">
                  No
                </label>
              </div>
              <div className="form-check">
                <input type="number" />
              </div>

              <ErrorMessage
                errors={errors}
                name={`rsvpForm.${index}.attendanceStatus`}
                message="Attendence response is required"
                as={<div className="invalid-feedback d-inline-block"></div>}
              />

              <label className="mt-4 d-block">
                What is your preferred entree?
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="primeRibRadio"
                  {...register(`rsvpForm.${index}.preferredEntree` as const, {
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
                  {...register(`rsvpForm.${index}.preferredEntree` as const, {
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
                {...register(`rsvpForm.${index}.dietaryRestrictions` as const, {
                  required: false,
                })}
              ></textarea>
            </div>
          );
        })}

        <p className="mt-4">
          Registering a family member or guest? Click the button below to add.
        </p>
        <button
          className="btn border border-black rounded-1 d-block"
          type="button"
          onClick={async () => {
            const output = await trigger("rsvpForm");

            if (output) {
              append(formValues);
            }
          }}
        >
          Add More Guests
        </button>

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
