// this is the funtion which will evaluate on the basis of borderImageSlice: 
const calculateExperssion = (exp)=>{
    return eval(exp);
}
// this is main funtion from where the flow o fcode started
const mainFuntion = () => {
  let expression = "1+(2+3)*4-10/2";
  const result = calculateExperssion(expression);
  console.log(result);
};
// calling main funtion
mainFuntion();
