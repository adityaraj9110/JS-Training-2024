(function getName() {
  var private = 20;
  console.log("Aditya");
  getPrivateNumber = () => {
    return private;
  };
  setPrivateNumber = (number) => {
    private = number;
  };
})();

setPrivateNumber(90);
console.log(getPrivateNumber());
