// this the calculator funtion which is used for the calculation
// here we have use rest operator since user can enter multiple value so to hanle that case we have use rest operator
const calculator = (operation, ...argForCalculation) => {
    let ans = 0;
      // here we have use switch operation since it is for faster than if else
    switch (operation) {
      case "+":
        ans = 0;
        argForCalculation.forEach((element, index) => {
          ans += element;
        });
        break;
      case "-":
        ans = 0;
        argForCalculation.forEach((element, index) => {
          ans -= element;
        });
        break;
      case "*":
        ans = 1;
        argForCalculation.forEach((element, index) => {
          ans *= element;
        });
        break;
      case "/":
        ans = 0;
        for (let i = 1; i < argForCalculation.length; i++) {
          ans = argForCalculation[i - 1] / argForCalculation[i];
        }
        break;
      case "%":
        ans = 0;
        for (let i = 1; i < argForCalculation.length; i++) {
          ans = argForCalculation[i - 1] % argForCalculation[i];
        }
        break;
      default:
          console.log("Enter valid operation");
  
    }
  
    return ans;
  };
  
  // this is main funtion the program starts from here
  const mainFuntion = () => {
      let ans = calculator("*",1,2,3);
      console.log(ans);
  };
  // here we can main funtion
  mainFuntion();
  