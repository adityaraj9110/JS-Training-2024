// this funtion flatten the object .and this is recursive also if requireed
const flattenObject = (obj)=>{
    // initiliaze the object
    let result = {};
    // for in loop
    for(let key in obj){
    //   if the value of any key is object itself then we recursively call this funtion
      if(typeof obj[key] === "object" && !Array.isArray(obj[key])){
        let temp = flattenObject(obj[key]);
        // result of it store in temp which we will again traverse throguh for in loop
        for(let nestedKey in temp){
            // we just forming the flatten object
          result[key+"."+nestedKey] = temp[nestedKey];
        }
      }
    //   if value is not an object then simply add add up
      else{
        result[key] = obj[key];
      }
    }
    return result;
  }
  
  const inputData = {
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
    "keyFour": {
      "keyA": true,
      "keyB": false,
      "keyC": {
        "keyCOne": "key C one value",
        "keyCTwo": "key C two value",
        "keyCThree": 1234
      }
    }
  };
  
  const outputData = flattenObject(inputData);
  console.log(outputData);
  