import { ReactNode, createContext, useContext, useState } from "react";

import { FormValues } from "../components/UserInfo/UserInfo";
import { FormValuesForFamilySection } from "../components/FamilySection/FamilySection";

interface MultiStepContextType {
  currentStep: number;

  userData: FormValues;
  setUserData: (data: FormValues) => void;

  familyInfo: FormValuesForFamilySection[];
  setFamilyInfo: (data: FormValuesForFamilySection[]) => void;

  userImg: Array<string | ArrayBuffer | null | undefined>;
  setUserImg: (data: (string | ArrayBuffer | undefined | null)[]) => void;

  handleNext: () => void;
  handlePrevious: () => void;

  finalData: [];
  setFinalData: () => void;
}

const MultiStepContext = createContext<MultiStepContextType>({
  currentStep: 1,
  userData: {
    name: {
      firstName: "",
      lastName: "",
    },
    parentName: "",
    phoneNumber: "",
    email: "",
    pin: "",
    address: "",
    state: "",
  },
  familyInfo: [
    {
      familyMembers: [
        {
          memberName: "",
          relationship: "",
          phoneNumberOfMember: "",
          emailOfMember: "",
          dateOfBirth: new Date(),
        },
      ],
    },
  ],

  userImg: [""],
  setUserImg: () => {},

  setFamilyInfo: () => {},
  setUserData: () => {},
  handleNext: () => {},
  handlePrevious: () => {},
  finalData: [],
  setFinalData: () => {},
});

export const useMultiContext = (): MultiStepContextType => {
  return useContext(MultiStepContext);
};

interface MultiStepProviderProps {
  children: ReactNode;
}

export const MultiStepProvider = ({ children }: MultiStepProviderProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [finalData,setFinalData] = useState([]);
  const [userData, setUserData] = useState<FormValues>({
    name: {
      firstName: "",
      lastName: "",
    },
    parentName: "",
    phoneNumber: "",
    email: "",
    pin: "",
    address: "",
    state: "",
  });

  const [familyInfo, setFamilyInfo] = useState<FormValuesForFamilySection>({
    familyMembers: [
      {
        memberName: "",
        relationship: "",
        phoneNumberOfMember: "",
        emailOfMember: "",
        dateOfBirth: new Date(),
      },
    ],
  });

  const [userImg, setUserImg] = useState<
    Array<string | ArrayBuffer | null | undefined>
  >([]);

  const handleNext = (data:string="notComplete") => {
    if(data === "complete"){
      setCurrentStep(1);
    }
    if (currentStep + 1 <= 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep - 1 >= 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <MultiStepContext.Provider
      value={{
        currentStep,
        handleNext,
        handlePrevious,
        userData,
        setUserData,
        userImg,
        setUserImg,
        finalData,
        setFinalData,
        familyInfo,
        setFamilyInfo,
      }}
    >
      {children}
    </MultiStepContext.Provider>
  );
};

// Improve UIs