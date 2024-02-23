import { useMultiContext } from "../../Context/MultiStepContext";
import { FormValuesForFamilySection } from "../FamilySection/FamilySection";
import "./creativeSection.css";
import { TextField, Button } from "@mui/material";

const CreativeSection = () => {
  const {
    handlePrevious,
    familyInfo,
    userImg,
    setUserImg,
    setFinalData,
    userData,
    handleNext,
    currentStep,
  } = useMultiContext();

  const handleLoad = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const target = e.target as HTMLInputElement;

    const file = target.files?.[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("load", function () {
        const imgData: string | ArrayBuffer | null | undefined =
          fileReader.result;
        const previousImages: (string | ArrayBuffer | undefined | null)[] = [
          ...userImg,
        ];
        previousImages[index] = imgData;
        setUserImg(previousImages);
        console.log(userImg);
      });
    }
  };

  const handleSubmit = () => {
    const finalDataInForm = [userData, familyInfo, userImg];
    setFinalData(finalDataInForm);
    console.log(currentStep);
    handleNext();
    console.log(currentStep);
  };

  return (
    <form className="creative-form">
      <div className="creative-info">
        {familyInfo.familyMembers.map(
          (item: FormValuesForFamilySection, ind: number) => (
            <div className="form-control-creative" key={ind}>
              <div className="img-section">
                <img
                  src={
                    userImg[ind]
                      ? userImg[ind]
                      : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                  }
                  alt=""
                />
              </div>
              <p className="image-name">{item?.memberName}</p>
              <TextField
                margin="normal"
                variant="outlined"
                color="secondary"
                id="imageInput"
                type="file"
                className="photo-upload"
                fullWidth
                onChange={(e) => {
                  handleLoad(e, ind);
                }}
              />
            </div>
          )
        )}
      </div>

      <div className="button-family-creative">
        <Button variant="contained" color="secondary" onClick={handlePrevious}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CreativeSection;
