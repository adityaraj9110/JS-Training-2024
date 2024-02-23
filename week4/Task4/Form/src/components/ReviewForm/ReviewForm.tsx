import { Button } from "@mui/material";
import { useMultiContext } from "../../Context/MultiStepContext";
import "./reviewForm.css";
const ReviewForm = () => {
  const {
    userData,
    familyInfo,
    userImg,
    handleNext,
    setUserData,
    setFamilyInfo,
    setUserImg,
  } = useMultiContext();
  console.log();

  const handleComplete = () => {
    handleNext("complete");
    setUserData({
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

    setFamilyInfo({
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

    setUserImg([]);
  };

  console.log({ userData, familyInfo, userImg });
  console.log(userImg);
  return (
    <div className="review">
      <div className="userInfo-section">
        <h2>User Information</h2>
        <div className="userInfo">
          <div className="left-part">
            <h3>
              Name:{" "}
              <span>
                {userData.name.firstName} {userData.name.lastName}
              </span>
            </h3>
            <h3>
              Parent Name: <span>{userData.parentName}</span>{" "}
            </h3>
            <h3>
              Phone Number: <span> {userData.phoneNumber}</span>
            </h3>
            <h3>
              Email: <span>{userData.email}</span>{" "}
            </h3>
          </div>
          <div className="right-part">
            <h3>
              Pin: <span>{userData.pin}</span>
            </h3>
            <h3>
              Address: <span>{userData.address}</span>{" "}
            </h3>
            <h3>
              State: <span>{userData.state}</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="familyInfo-section">
        <h2>Family Info</h2>
        <div className="family-info">
          {familyInfo.familyMembers.map((family, index) => (
            <div className="left-part-family" key={family.email}>
              <h3>
                Name Of Family Member: <span>{family.memberName}</span>{" "}
              </h3>
              <h3>
                Relationship: <span>{family.relationship}</span>
              </h3>
              <div className="right-part-family">
                <h3>
                  Contact Number: <span>{family.phoneNumberOfMember}</span>
                </h3>
                <h3>
                  Email:{" "}
                  <span>
                    {family.emailOfMember ? family.emailOfMember : "No Email"}
                  </span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="creativeInfo-section">
        <h2>Creative Section</h2>

        {userImg.length > 0 ? (
          userImg.map((img, index) => (
            <div className="creative-info-family" key={index}>
              <h3>
                Name: <span>{familyInfo.familyMembers[index].memberName}</span>
              </h3>
              <img src={img} alt="" />
            </div>
          ))
        ) : (
          <h2 style={{ marginBottom: "20px" }}>No Images Available!!!</h2>
        )}
      </div>

      <div className="btn-complete">
        <Button
          variant="contained"
          color="primary"
          className="btn-review-section"
          onClick={handleComplete}
        >
          Complete
        </Button>
      </div>
    </div>
  );
};

export default ReviewForm;
