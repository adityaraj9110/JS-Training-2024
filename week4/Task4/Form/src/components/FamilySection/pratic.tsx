import { useFieldArray, useForm } from "react-hook-form";
import "./familySection.css";
import { Button } from "@mui/material";
import { useMultiContext } from "../../Context/MultiStepContext";
type UserInfo = {
  memberName: string;
  relationship: string;
  phoneNumberOfMember: string;
  emailOfMember: string;
  dateOfBirth: Date;
};

export type FormValuesForFamilySection = {
  familyMembers: UserInfo[];
};

const FamilySection = () => {
  const { handleNext, handlePrevious, familyInfo, setFamilyInfo } =
    useMultiContext();

  const form = useForm<FormValuesForFamilySection>({
    defaultValues: {
      familyMembers: familyInfo.familyMembers, // Set default values to existing family members
    },
    mode: "onTouched",
  });

  const { register, control, formState, handleSubmit } = form;
  const { isValid, errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "familyMembers",
    control,
  });

  const handleNextBtn = (data: FormValuesForFamilySection[]) => {
    setFamilyInfo(data);
    console.log(data);
    handleNext();
  };

  return (
    <div className="user-info">
      <form className="user-info-form" onSubmit={handleSubmit(handleNextBtn)}>
        {fields.map((field, index) => (
          <>
            <div className="form-control" key={field.id}>
              <label htmlFor="name">Name Of Family Member</label>
              <input
                type="text"
                id="name"
                {...register(`familyMembers.${index}.memberName`, {
                  required: {
                    value: true,
                    message: "Name of family member is must",
                  },
                })}
              />
              <p className="error">
                {errors.familyMembers?.[index]?.memberName?.message}
              </p>
            </div>

            <div className="form-control">
              <label htmlFor="relationship">Relation With Member</label>
              <input
                type="text"
                id="relationship"
                {...register(`familyMembers.${index}.relationship`, {
                  required: {
                    value: true,
                    message: "Relationship is must with your family member",
                  },
                })}
              />
              <p className="error">
                {errors.familyMembers?.[index]?.relationship?.message}
              </p>
            </div>

            <div className="form-control">
              <label htmlFor="number">Phone Number</label>
              <input
                type="text"
                id="number"
                {...register(`familyMembers.${index}.phoneNumberOfMember`, {
                  maxLength: {
                    value: 10,
                    message: "Phone number must be of 10 digit",
                  },
                  minLength: {
                    value: 10,
                    message: "phone number must be of atleast 10 digit",
                  },
                  required: {
                    value: true,
                    message: "Phone Number is must",
                  },
                })}
              />
              <p className="error">
                {errors.familyMembers?.[index]?.phoneNumberOfMember?.message}
              </p>
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register(`familyMembers.${index}.emailOfMember`, {
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Provide valid format",
                  },
                })}
              />
              <p className="error">
                {errors.familyMembers?.[index]?.emailOfMember?.message}
              </p>
            </div>

            <div className="form-control">
              <label htmlFor="dateOfBirth">Date Of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                {...register(`familyMembers.${index}.dateOfBirth`, {
                  required: {
                    value: true,
                    message: "Please provide date of birth",
                  },
                })}
              />
              <p className="error">
                {errors.familyMembers?.[index]?.dateOfBirth?.message}
              </p>
            </div>

            {index > 0 && (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  //   ;
                  const updatedFamilyInfo = familyInfo.familyMembers.filter(
                    (fam, ind) => {
                      return ind != index;
                    }
                  );
                  console.log(updatedFamilyInfo);
                  setFamilyInfo({ familyMembers: updatedFamilyInfo });
                  // setFamilyInfo()
                  remove(index);
                }}
                style={{ marginRight: "50px" }}
              >
                Remove
              </Button>
            )}
          </>
        ))}
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            append({
              memberName: "",
              relationship: "",
              phoneNumberOfMember: "",
              emailOfMember: "",
              dateOfBirth: new Date(),
            })
          }
        >
          Add Family Member
        </Button>

        <div className="button-family">
          <Button
            variant="contained"
            color="secondary"
            onClick={handlePrevious}
          >
            Back
          </Button>
          <Button
            disabled={!isValid}
            variant="contained"
            color="primary"
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FamilySection;
