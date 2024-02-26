/* eslint-disable @typescript-eslint/no-explicit-any */
import { Path, UseFormRegister } from "react-hook-form";
import { FormValues } from "../../Pages/SignUp/SignUp";
import { FormValuesForLogin } from "../../Pages/Login/Login";

type InputProps<T extends FormValues | FormValuesForLogin> = {
  type: string;
  id: string;
  className: string;
  register: UseFormRegister<T>;
  validationOptions?: Record<string, any>;
  error?: string;
};

const Input = <T extends FormValues | FormValuesForLogin>({
  type,
  id,
  className,
  register,
  validationOptions,
  error,
}: InputProps<T>) => {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input
        type={type}
        id={id}
        className={className}
        {...register(id as Path<T>, validationOptions)}
      />
      {error && <p className="error">{error}</p>}
    </>
  );
};

export default Input;
