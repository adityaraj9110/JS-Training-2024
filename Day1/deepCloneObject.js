const object = {
  name: "Aditya",
  roll: 12,
  sub: ["Maths", "Science", "SST"],
  fatherName: {
    firstName: "Vijay",
    lastName: "Kumar",
    hobbies: ["cricket", "jogging"],
    bankDetails: {
      typeOfAcc: "saving",
      card: {
        debitCard: true,
        creditCard: false,
      },
      branchName: ["mithanpura", "mohali", "nodia"],
      accountInfo: {
        name: "saving",
        id: 1,
      },
    },
  },
};

function deepCloner(object) {
  let ans = new Object();
  for (let key in object) {
    if (!Array.isArray(object[key])) {
      let value = object[key];
      ans[key] = value;
    } else if (Array.isArray(object[key])) {
      ans[key] = object[key];
    } else if (typeof object[key] === "object") {
      ans[key] = deepCloner(object.key);
    }
  }
  return ans;
}

const obj1 = deepCloner(object);
obj1.name = "Kishu";
obj1.fatherName.bankDetails.card.debitCard = "yes";

for (let key in obj1) {
  console.log(key, ":", obj1[key]);
}
for (let ke in object) {
  console.log(ke, ":", object[ke]);
}

const obj2 = {
  name: "Ayus",
  age: 12,
};
// const obj3 = {};
// obj3.name = obj2.name;
// obj3.age = obj2.age;
// obj2.name = "Kislay";
// console.log(obj2);
// console.log(obj3);

const arr = [1, 2];
console.log(Array.isArray(arr));
