import "./login.css";
import { useForm } from "react-hook-form";
import login from "../../assets/Login.png";
import { FormValues, FormValuesForLogin } from "../../shared/DataTypes/FormType";
import Input from "../../shared/sharedComponents/Input";
import { registerSelector } from "../../redux/reducers/RegisterReducer";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../../redux/Constants";
import { useNavigate } from "react-router-dom";
import { validationRules } from "../../shared/sharedComponents/ValidationRules";

const Login = () => {


  const form = useForm<FormValuesForLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

    const navigate = useNavigate();
    const { formState, handleSubmit, control } = form;
    const { isValid, errors } = formState;
    const dispatch = useDispatch();
    const registeredUsers = useSelector(registerSelector);

    const isUserExist = (
      registeredUsers: FormValues[],
      data: FormValuesForLogin
    ) => {
      return registeredUsers.some((user) => {
        return user.email === data.email;
      });
    };

    const isPasswordCorrect = (
      registeredUsers: FormValues[],
      data: FormValuesForLogin
    ) => {
      return registeredUsers.some((user) => {
        return user.password === data.password;
      });
    };

    const handleSubmitBtn = (data: FormValuesForLogin) => {
      console.log(data);
      if (isValid) {
        if (registeredUsers) {
          if (!isUserExist(registeredUsers, data)) {
            alert("user or email does not exist!!");
          } else if (!isPasswordCorrect(registeredUsers, data)) {
            alert("password do not match");
          } else {
            dispatch({
              type: LOGIN,
              payload: data,
            });
            navigate("/");
             
          }
        }
      }
    };

  return (

    <div className="user-info">
      <div className="signup-img">
        <img src={login} alt="login" />
      </div>
      <form
        className="user-info-form-login"
        onSubmit={handleSubmit(handleSubmitBtn)}
      >
        <div className="form-control">
          <Input
            name="email"
            type="email"
            id="email"
            className="email"
            control={control}
            validationOptions={{
              required: validationRules<boolean>({value: true,message: "Email is required"}),
              pattern: validationRules<RegExp>({value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,message: "Invalid Email Formate"}),
            }}
            error={errors.email?.message}
          />
        </div>

        <div className="form-control">
          <Input
            name="password"
            type="password"
            id="password"
            className="password"
            control={control}
            validationOptions={{
              required: validationRules<boolean>({value: true,message: "password is required"}),
              minLength: validationRules<number>({value: 6,message: "Password must be at least 6 characters"}),
            }}
            error={errors.password?.message}
          />
        </div>

        <div className="button-family-1">
          <button type="submit" className="btn">
            Login
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => navigate("/signup")}
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
