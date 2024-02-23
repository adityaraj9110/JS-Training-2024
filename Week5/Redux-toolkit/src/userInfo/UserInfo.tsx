import { useForm } from "react-hook-form";
import "./userInfo.css";
import { Button } from "@mui/material";
import { DevTool } from "@hookform/devtools";
import { Input } from "../shared/Constants";

export type FormValues = {
  name: string
};

const UserInfo = () => {
  const form = useForm<FormValues>({
    defaultValues:{
      name: "",
    }
  });

  const { register, control, formState, handleSubmit } = form;
  const { isValid, errors } = formState;

  const handleNextBtn = (data: FormValues) => {
    if (isValid) {
      alert("Congrats");
      alert(data);
    }
  };

  return (
    <div className="user-info">
      <form className="user-info-form" onSubmit={handleSubmit(handleNextBtn)}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          {/* <input
            type="text"
            id="firstName"
            {...register("name.firstName", {
              required: {
                value: true,
                message: "First name is required",
              },
            })}
          />
          <p className="error">{errors.name?.firstName?.message}</p> */}
          
            <Input
              type="text"
              name="name"
              register={register}
              errors={errors}
              
            />
          
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
