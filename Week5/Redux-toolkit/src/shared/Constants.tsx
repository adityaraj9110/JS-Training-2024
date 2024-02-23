// export type InputPropType = {isLoading?:boolean} & React.DetailedHTMLProps<
//   React.InputHTMLAttributes<HTMLInputElement>,
//   HTMLInputElement
// >;

// export const Input = ({ isLoading, ...rest }: InputPropType) => {
//   return <div>
//     <input {...rest} />
//     {isLoading && <span>loading....</span>}
//   </div>;
// };

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FormValues } from "../userInfo/UserInfo";

interface CustomInputProps {
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  pattern?: RegExp;
  errors: FieldErrors<FieldValues>;
  name: string;
}

export const Input = ({
  register,
  required,
  name,
  pattern,
  errors,
  ...formState
}: CustomInputProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => {
  return (
    <div className="form-input-control">
      <input
        className="add-quote-input"
        {...formState}
        {...register(name, {
          required: true,
        })}
      />
      {errors[name as keyof FormValues]?.type === "required" && (
        <small className="error">Name is required</small>
      )}
      {errors[name as keyof FormValues]?.type === "minLength" && (
        <small className="error">Min Length should be 5 Characters</small>
      )}
    </div>
  );
};
