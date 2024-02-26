import { useNavigate } from "react-router-dom";
import "./login.css";
import { useForm } from "react-hook-form";
import { FormValues } from "../SignUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../../shared/redux/Constants";
import { signupSelector } from "../../shared/redux/reducers/signupReducer";
import Input from "../../shared/SharedInput/Input";
import Navbar from "../../shared/components/navbar/Navbar";
import login from "../../assests/login.png";
import Footer from "../../shared/components/footer/Footer";

export type FormValuesForLogin = {
  email: string;
  password: string;
};

const Login = () => {
  const form = useForm<FormValuesForLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });
  const { register, formState, handleSubmit } = form;
  const { isValid, errors } = formState;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registeredUsers = useSelector(signupSelector);

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
    <>
      <Navbar />
      <div className="user-info">
        <img src={login} alt="login" className="signup-img" />
        <form
          className="user-info-form-login"
          onSubmit={handleSubmit(handleSubmitBtn)}
        >
          <div className="form-control">
            <Input
              type="email"
              id="email" //use contols methods
              className="email"
              register={register}
              validationOptions={{
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid Email Formate",
                },
              }}
              error={errors.email?.message}
            />
          </div>

          <div className="form-control">
            <Input
              type="password"
              id="password"
              className="password"
              register={register}
              validationOptions={{
                required: {
                  value: true,
                  message: "password is required",
                },
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
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
      <Footer />
    </>
  );
};

export default Login;
