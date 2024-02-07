import mapping from "./mappingOfData.js";

const genrateRoute = (mapping) => {
  let ans = [];
  for (let key in mapping) {
    let moduleName = mapping[key].name;
    let isSubscribe = mapping[key].isSub;
    let subscribeMode = mapping[key].subMode;
    // console.log(isSubscribe)
    if (moduleName != undefined) {
      if (subscribeMode === undefined) {
        if (!isSubscribe) {
          ans.push({ name: moduleName, comp: "UN" });
        } else {
          //   console.log("Hello");
          ans.push({ redirectTo: moduleName });
        }
      } else {
        if (!isSubscribe) {
          ans.push({ name: moduleName, comp: "UN" });
        } else {
          ans.push({
            name: moduleName,
            subComp: genrateRoute(subscribeMode),
          });
        }
      }
    }
  }
  return ans;
};

console.log(genrateRoute(mapping));
