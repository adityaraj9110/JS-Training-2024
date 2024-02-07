const getData = async () => {
  const res = await fetch("https://api.restful-api.dev/objects");
  const data = await res.json();
  console.log(data);
};
getData();
console.log("Hello")
