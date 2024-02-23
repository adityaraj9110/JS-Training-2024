const add = async (x, y, z) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(x + y + z);
    }, 1000);
  });
};

const getData = async () => {
  add(5, 5, 5)
    .then((data) => {
      console.log(data, "inside resolve");
    })
    .catch((error) => {
      console.log(error);
    });
};

getData();
