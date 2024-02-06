const findMinimumReversalRequired = (brakets) => {
  let length = brakets.length;
  //   if length is odd then return -1 since no way is possible
  if (length % 2 != 0) return -1;
  // to store the invalid patter/bracket
  let tempArray = [];

  for (let i = 0; i < length; i++) {
    // this algorith stores all the invalid pattern in tempArray
    let char = brakets[i];
    if (char == "{") {
      tempArray.push(char);
    } else if (char == "}") {
      if (tempArray.length > 0 && tempArray[tempArray.length - 1] == "{") {
        tempArray.pop();
      } else {
        tempArray.push(char);
      }
    }
  }
  // now we need to count the two type of brakets
  let a = 0;
  let b = 0;
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] == "{") {
      a++;
    } else {
      b++;
    }
  }
//   returning the addition of floor value
  return Math.floor((a + 1) / 2) + Math.floor((b + 1) / 2);
};

const mainFuntion = () => {
  let brakets = "{{{{}}";
  //   this funtion will find minimum reversals
  const minimumReversalRequired = findMinimumReversalRequired(brakets);
  console.log(minimumReversalRequired);
};
mainFuntion();
