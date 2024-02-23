async function add(x, y, z) {
  return new Promise((resolve,rej)=>{
    setTimeout(()=>{
        resolve( x+y+z);
    },1000)
  })
}

async function getData() {
  add(1, 5, 25)
    .then((data) => {
      console.log(data + " Inside resolve");
    })
    .catch((err) => {
      console.log(err);
    });
}
getData();
  