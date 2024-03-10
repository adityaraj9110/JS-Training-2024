export type FormValues = {
    username: string;
    contact: string;
    email: string;
    pin: string;
    address: string;
    state: string;
    password: string;
    confirmPassword: string;
  };
  
  export type FormValuesForLogin = {
    email: string;
    password: string;
  };

  export const defaultFormValues: FormValues = {
    username: "",
    contact: "",
    email: "",
    pin: "",
    state: "",
    password: "",
    confirmPassword: "",
    address:""
  };