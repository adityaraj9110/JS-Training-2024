/* eslint-disable @typescript-eslint/no-explicit-any */

import { Controller } from 'react-hook-form';

type InputProps = {
  type: string;
  id: string;
  className: string;
  control: any;
  name: string; 
  validationOptions?: Record<string, any>;
  error?: string;
};

const Input = ({
  type,
  id,
  className,
  control,
  name,
  validationOptions,
  error,
}: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <Controller
        control={control}
        name={name} 
        render={({ field }) => (
          <input
            type={type}
            id={id}
            className={className}
            {...field} 
          />
        )}
        rules={validationOptions} 
      />
      {error && <p className="error">{error}</p>}
    </>
  );
};

export default Input;
