const obj = {
  name: "Aditya",
  roll: 25,
  id: 1,
};

const arr = Object.entries(obj);
for (let [a, b] of arr) {
  // let  = key;
  console.log(a, b);
  //   console.log(b);
}
console.log(obj.hasOwnProperty("roll"));

console.log(obj["name"]);
console.log(Object.values(obj));
console.log(2 ** 4);

function constructorFactory() {
  (this.name = "Aditya"), (this.age = 23), (this.id = 1);
}

const Aditya = new constructorFactory();
console.log(Aditya);

let array = [1, 2, 3, 4, 5];

function add(array) {
  return array.reduce((a, b) => {
    return a + b;
  }, 0);
}
