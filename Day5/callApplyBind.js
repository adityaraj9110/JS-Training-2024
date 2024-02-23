const userDetails = {
  name: "Aditya",
  roll: 50,
  age: 150,
  getInfo: function (...args) {
    console.log(`${this.name} ${this.age} ${this.age}`);
    console.log(args);
  },
};

let user1 = {
  name: "Ayush",
  age: 20,
  roll: 1,
};

userDetails.getInfo();
userDetails.getInfo.call(user1);
userDetails.getInfo.apply(user1, ["car", "bike"]);

