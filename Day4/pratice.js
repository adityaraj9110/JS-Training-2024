function getAfterDelay(x, y, z) {
  setTimeout(() => {
    const ans = x + y + z;
    return ans;
  }, 1000);
}
async function getAdd(x, y, z) {
    const res = await getAfterDelay(x,y,z);
    return res;
}

getAdd(20, 30, 40).then((res) => {
  console.log(res,"inside resolve");
});
