// output required : https://localhost:400?keyOne=value one&keyTwo=value Two&keyThree=value Three

// this is the funtion which takes two parameter oone is object and other string url
const generateUrl = (inputObject, inputUrl) => {
  let newUrl = new String(inputUrl);
  newUrl += "?";
  let lengthofObject = Object.keys(inputObject).length;
  for (let obj in inputObject) {
    newUrl += obj;
    newUrl += "=";
    newUrl += inputObject[obj];
    lengthofObject--;
    if (lengthofObject !== 0) {
      newUrl += "&";
    }
  }
  return newUrl;
};

// this is main funtion the program starts from here
const mainFuntion = () => {
  let inputObject = {
    keyOne: "value One",
    keyTwo: "value Two",
    keyThree: "value Three",
  };
  let inputUrl = "https://localhost:400";
  //  calling funtion to find the desired url
  let newUrl = generateUrl(inputObject, inputUrl);
  console.log(newUrl);
};
// here we can main funtion
mainFuntion();
