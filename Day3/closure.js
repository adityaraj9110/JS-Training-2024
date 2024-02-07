const closure = (func, delay) => {
  let counter = 0;
  return function (...args) {
    counter += 1;
    const res = args.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    console.log(args.length);
    console.log(res);
    console.log(counter);
    setTimeout(() => {
      func();
    }, delay);
  };
};
const getData = () => {
  console.log("Data");
};
const optimised = closure(getData, 500);

optimised(1, 2, 8, 10);
