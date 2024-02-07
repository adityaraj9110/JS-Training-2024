const object = {
  name: "Aditya",
  roll: 12,
  sub: ["Maths", "Science", "SST"],
  fatherName: {
    firstName: "Vijay",
    lastName: "Kumar",
    hobbies: [
      {game:"Hockey"},{readding:"Horror"}
    ],
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

const deepCloner = (object) => {
  if (object === null || typeof object !== "object") {
    return object;
  }
  if(Array.isArray(object)) {
    let tempArray = [];
    return object.reduce((acc,element)=>{
        acc.push(element);
        return acc;
    },tempArray)
  }
  const returnedObject = {};

  return Object.keys(object).reduce((acc, key) => {
    acc[key] = deepCloner(object[key]);
    return acc;
  }, returnedObject);
};
const obj1 = deepCloner(object);
obj1.name = "ayush";
object.fatherName.bankDetails.card.debitCard = "yes";

object.fatherName.hobbies[0]="cricket";


for (let key in obj1) {
  console.log(key, ":", obj1[key]);
}
for (let key in object) {
  console.log(key, ":", object[key]);
}
