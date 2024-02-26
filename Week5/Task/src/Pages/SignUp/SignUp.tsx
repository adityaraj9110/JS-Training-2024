import { useNavigate } from "react-router-dom";
import "./signUp.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP } from "../../shared/redux/Constants";
import { signupSelector } from "../../shared/redux/reducers/signupReducer";
import Input from "../../shared/SharedInput/Input";
import signup from "../../assests/signup.png";
import Navbar from "../../shared/components/navbar/Navbar";
import Footer from "../../shared/components/footer/Footer";

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

const SignUp = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      contact: "",
      email: "",
      pin: "",
      state: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  });

  const { register, formState, handleSubmit, watch } = form;
  const { isValid, errors } = formState;
  const password = watch("password");
  const navigate = useNavigate();
  const disPatch = useDispatch();
  const savedRegisterUsers = useSelector(signupSelector);

  const isSameUser = (savedRegisterUsers: FormValues[], data: FormValues) => {
    return savedRegisterUsers.some((user) => {
      return user.email === data.email;
    });
  };

  const handleSignUp = (data: FormValues) => {
    if (isValid) {
      if (savedRegisterUsers) {
        if (!isSameUser(savedRegisterUsers, data)) {
          disPatch({
            type: SIGNUP,
            payload: data,
          });
          alert("SignUp Successfully");
          navigate("/login");
        } else {
          alert("user already registered !!!");
        }
      } else {
        disPatch({
          type: SIGNUP,
          payload: data,
        });
        navigate("/login");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="user-info">
        <div className="signup-img">
          <img src={signup} alt="signup" />
        </div>
        <form className="user-info-form" onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control">
            <Input
              type="text"
              id="username"
              className="username"
              register={register}
              validationOptions={{
                required: {
                  value: true,
                  message: "username is required",
                },
              }}
              error={errors.username?.message}
            />
          </div>

          <div className="form-control">
            <Input
              type="number"
              id="contact"
              className="number"
              register={register}
              validationOptions={{
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
                  message: "Phone number is required",
                },
              }}
              error={errors.contact?.message}
            />
          </div>

          <div className="form-control">
            <Input
              type="email"
              id="email"
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
              type="number"
              id="pin"
              className="number"
              register={register}
              validationOptions={{
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
              }}
              error={errors.pin?.message}
            />
          </div>

          <div className="form-control">
            <Input
              type="text"
              id="address"
              className="address"
              register={register}
              validationOptions={{
                required: {
                  value: true,
                  message: "Address is required",
                },
              }}
              error={errors.address?.message}
            />
          </div>

          <div className="form-control">
            <Input
              type="text"
              id="state"
              className="state"
              register={register}
              validationOptions={{
                required: {
                  value: true,
                  message: "State is required",
                },
              }}
              error={errors.state?.message}
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

          <div className="form-control">
            <Input
              type="password"
              id="confirmPassword"
              className="confirmPassword"
              register={register}
              validationOptions={{
                required: {
                  value: true,
                  message: "confirm password is required",
                },
                validate: (value: string) =>
                  value === password || "The passwords do not match",
              }}
              error={errors.confirmPassword?.message}
            />
          </div>

          <div className="button-family-1">
            <button type="submit" className="btn">
              SignUp
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
