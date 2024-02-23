import { Step, StepLabel, Stepper } from "@mui/material";
import { useMultiContext } from "../../Context/MultiStepContext";
import CreativeSection from "../CreativeSection/CreativeSection";
import FamilySection from "../FamilySection/FamilySection";
import ReviewForm from "../ReviewForm/ReviewForm";
import UserInfo from "../UserInfo/UserInfo";
import "./stepper.css";
import { ReactElement } from "react";

const sec2: Record<number, ReactElement> = {
  1: <UserInfo />,
  2: <FamilySection />,
  3: <CreativeSection />,
  4: <ReviewForm />,
};

const StepperForm = () => {
  const { currentStep } = useMultiContext();

  console.log(currentStep);
  return (
    <div className="container">
      <div className="stepper">
        <Stepper activeStep={currentStep - 1} orientation="horizontal">
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      {sec2[currentStep]}
    </div>
  );
};

export default StepperForm;

// please do not use complex ways, try purify code.
// try tp make everything dynamic