// this is the funtion which tells the both boject are equal or not
const assertObjectEqual = (actualObject, expectedObject) => {
  // firstly we need to check if the both object have same number of key
  // object.keys method gives us an arrray so we can apply length property on this
  let numberOfKeysInActual = Object.keys(actualObject).length;
  let numberOfKeysInExpected = Object.keys(expectedObject).length;
  if (numberOfKeysInActual !== numberOfKeysInExpected) return false;

  // now we need to iterate in one object check in other that if other as also same value or not

  for (let actualObj in actualObject) {
    if (actualObject[actualObj] !== expectedObject[actualObj]) {
      return false;
    }
  }
  return true;
};

// this is main funtion the program starts from here
const mainFuntion = () => {
  let actualObject = { foo: "Adi", age: 23 };
  let expectedObject = { foo: "Adi", age: "23" };
  let parametricString = "object are equal";
  const isEqual = assertObjectEqual(
    actualObject,
    expectedObject,
    parametricString
  );
  console.log(isEqual);
};
// here we can main funtion
mainFuntion();
