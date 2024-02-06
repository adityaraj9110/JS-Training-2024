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
c;
console.log(obj.hasOwnProperty("name"));

console.log(obj["name"]);
console.log(Object.values(obj));
console.log(2 ** 4);
