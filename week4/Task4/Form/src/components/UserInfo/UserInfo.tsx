import { useForm } from "react-hook-form";
import "./userInfo.css";
import { Button } from "@mui/material";
import { useMultiContext } from "../../Context/MultiStepContext";
import { DevTool } from "@hookform/devtools";

export type FormValues = {
  name: {
    firstName: string;
    lastName: string;
  };
  parentName: string;
  phoneNumber: string;
  email: string;
  pin: string;
  address: string;
  state: string;
};

const UserInfo = () => {
  const { handleNext, setUserData, userData } = useMultiContext();

  const form = useForm<FormValues>({
    defaultValues: userData,
    mode: "onTouched",
  });

  const { register, control, formState, handleSubmit } = form;
  const { isValid, errors } = formState;

  const handleNextBtn = (data: FormValues) => {
    if (isValid) {
      setUserData(data);
      handleNext();
    }
  };

  return (
    <div className="user-info">
      <form className="user-info-form" onSubmit={handleSubmit(handleNextBtn)}>
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            {...register("name.firstName", {
              required: {
                value: true,
                message: "First name is required",
              },
            })}
          />
          <p className="error">{errors.name?.firstName?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            {...register("name.lastName", {
              required: {
                value: true,
                message: "First name is required",
              },
            })}
          />
          <p className="error">{errors.name?.lastName?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="parentName">Parent Name</label>
          <input
            type="text"
            id="parentName"
            {...register("parentName", {
              required: {
                value: true,
                message: "Parent name is required",
              },
            })}
          />
          <p className="error">{errors.parentName?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="number">Phone Number</label>
          <input
            type="number"
            id="number"
            {...register("phoneNumber", {
              minLength: {
                value: 10,
                message: "Number is less than 10",
              },
              maxLength: {
                value: 10,
                message: "Phone number can't exceed more than 10",
              },
              required: {
                value: true,
                message: "Phone name is required",
              },
            })}
          />
          <p className="error">{errors.phoneNumber?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid Email Formate",
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="pin">Pin</label>
          <input
            type="number"
            id="pin"
            {...register("pin", {
              minLength: {
                value: 6,
                message: "Pin can't be less than 6",
              },
              maxLength: {
                value: 6,
                message: "Pin should be of only 6 digits",
              },
              required: {
                value: true,
                message: "Pin is required",
              },
            })}
          />
          <p className="error">{errors.pin?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            {...register("address", {
              required: {
                value: true,
                message: "Address is required",
              },
            })}
          />
          <p className="error">{errors.address?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            {...register("state", {
              required: {
                value: true,
                message: "State is required",
              },
            })}
          />
          <p className="error">{errors.state?.message}</p>
        </div>

        <div className="button-family-1">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="btn"
          >
            Next
          </Button>
        </div>
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default UserInfo;
