import { FC } from "react";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  attendance: boolean;
  preferredEntree: string;
  dietaryRestrictions: string;
};

const FormStub: FC<any> = ({
  firstName,
  lastName,
  email,
  attendance,
  preferredEntree,
  dietaryRestrictions,
}) => {
  return (
    <div className="card text-bg-warning my-4">
      <div className="card-body">
        <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
        <p className="card-text">{`${email} | ${attendance} | ${preferredEntree} | ${dietaryRestrictions}`}</p>
      </div>
    </div>
  );
};

export default FormStub;
