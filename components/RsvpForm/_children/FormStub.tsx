import { FC } from "react";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  attendance: boolean;
  preferredEntree: string;
  dietaryRestrictions: string;
};

const svgCheck = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-check-circle"
    viewBox="0 0 16 16"
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
  </svg>
);

const FormStub: FC<any> = ({
  firstName,
  lastName,
  email,
  attendance,
  preferredEntree,
  dietaryRestrictions,
}) => {
  return (
    <div className="card text-bg-info rounded-1 my-4">
      <div className="card-body">
        <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
        <p className="card-text">{`${email} | ${attendance} | ${preferredEntree} | ${dietaryRestrictions}`}</p>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        {svgCheck}
      </div>
    </div>
  );
};

export default FormStub;
