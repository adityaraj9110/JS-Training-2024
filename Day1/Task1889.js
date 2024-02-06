const calculator = (operation, a, b = 0) => {
  let ans = 0;
  switch (operation) {
    case "square":
      ans = a * a;
      break;
    case "power":
      ans = Math.pow(a, b);
      break;
    case "square root":
      ans = Math.sqrt(a, b);
      break;
    case "log":
      ans = Math.log(a);
      break;
    case "sin":
      ans = Math.sin(a);
      break;
    case "tan":
      ans = Math.tan(a);
      break;
    case "cos":
      ans = Math.cos(a);
      break;
    case "area":
      ans = Math.PI * (a * a);
      break;
    default:
      console.log("Provide Valid Case");
  }
  return ans;
};

const mainFuntion = () => {
  // here we will build the main funtion
  let operation = "square";
  let a = 5;
  let b = 10;
  let ans = calculator(operation, a);
  console.log(ans);
};
mainFuntion();
