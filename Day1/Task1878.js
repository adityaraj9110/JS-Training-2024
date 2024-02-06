const sourceData = [
  {
    batch_id: "123",
    name: "Tony",
    contact: "9872276210",
  },
  {
    batch_id: "231",
    name: "Steve",
    contact: "7876543210",
  },
  {
    batch_id: "123",
    name: "Bruce",
    contact: "6776543210",
  },
  {
    batch_id: "321",
    name: "Clint",
    contact: "8954643210",
  },
  {
    batch_id: "123",
    name: "Peter",
    contact: "7666543210",
  },
  {
    batch_id: "231",
    name: "Phil",
    contact: "8896543210",
  },
  {
    batch_id: "321",
    name: "Nick",
    contact: "9876521210",
  },
];

function mergeObjectsByBatchId(data) {
  const result = {};

  data.forEach((obj) => {
    const batchId = obj.batch_id;
    //   if there is no batch id then simply make that id key and value as empty array
    if (!result[batchId]) {
      result[batchId] = [];
    }
    //   theen push object in that array
    result[batchId].push({ name: obj.name, contact: obj.contact });
  });
  return result;
}
//   calling the funtion
const resultData = mergeObjectsByBatchId(sourceData);
console.log(resultData);
