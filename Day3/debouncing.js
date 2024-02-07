const input = document.getElementById("search");
// this is for the debouncing funtion
const debouncing = (func, delay) => {
  let timer;
  return function () {
    // main crux of this method
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func();
      console.log(timer);
    }, delay);
  };
};

const getData = () => {
  console.log({
    name: "Aditya",
    roll: 25,
  });
};
const optimised = debouncing(getData, 500);
input.addEventListener("keydown", () => {
  optimised();
});


