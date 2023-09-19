import { FC } from "react";

const RsvpForm: FC = () => {
  const validateFormSubmission = (e: any) => {
    e.preventDefault();

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form: any) => {
      form.classList.add("was-validated");

      if (!form.checkValidity()) {
        e.stopPropagation();
      } else {
        const formData = new FormData(e.target);
        const formJson: any = Object.fromEntries(formData.entries());

        fetch("/api/registrants", {
          method: "POST",
          body: JSON.stringify(formJson),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    });
  };

  return (
    <form
      className="form needs-validation"
      noValidate
      onSubmit={(e) => {
        validateFormSubmission(e);
      }}
    >
      <div className="d-flex justify-content-evenly">
        <div className="form-floating flex-grow-1">
          <input
            type="text"
            className="form-control"
            id="firstNameInput"
            name="firstName"
            placeholder="First Name"
            required
          />
          <label htmlFor="firstNameInput" className="form-label text-white">
            First Name
          </label>
          <div className="invalid-feedback">Please enter your first name.</div>
        </div>
        <div className="form-floating flex-grow-1">
          <input
            type="text"
            className="form-control"
            id="lastNameInput"
            name="lastName"
            placeholder="Last Name"
            required
          />
          <label htmlFor="lastNameInput" className="form-label text-white">
            Last Name
          </label>
          <div className="invalid-feedback">Please enter your last name.</div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center my-3">
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="attendanceStatus"
              id="acceptRadio"
              value="true"
            />
            <label className="form-check-label" htmlFor="acceptRadio">
              Yes, I will be attending
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="attendanceStatus"
              id="declineRadio"
              value="false"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="declineRadio">
              No, I cannot make it
            </label>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <p>
          <u>Preferred Entree?</u>
        </p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="preferredEntree"
            id="primeRibRadio"
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
            name="preferredEntree"
            id="bbqChickenRadio"
            value="BBQ Chicken"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="bbqChickenRadio">
            BBQ Chicken
          </label>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="dietaryRestrictionsTextArea" className="form-label">
          <u>Please list any dietary restrictions:</u>
        </label>
        <textarea
          className="form-control"
          id="dietaryRestrictionsTextArea"
          name="dietaryRestrictions"
          rows={3}
        ></textarea>
      </div>
      <div className="d-flex flex-column align-items-end">
        <div className="d-flex flex-column align-items-start">
          <button
            className="btn border border-white rounded-0 my-2"
            type="button"
          >
            Add Another Guest
          </button>
          <button className="btn border border-white rounded-0" type="submit">
            Submit form
          </button>
        </div>
      </div>
    </form>
  );
};

export default RsvpForm;
