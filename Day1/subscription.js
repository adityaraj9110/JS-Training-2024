import data from "./subscriptionList.js";
// import mapping from "./mappingOfData.js";

let subscriptionData = data;
let mapping = new Map();

function mappingOfRoute(routeData,data) {
    for(let i = 0;i<routeData.length;i++) {
        let moduleNameInRoute = routeData[i].name;
        mapping[moduleNameInRoute] = false;
        for(let j=0;j<data.length;j++){
            let subscribeName = data[i].name; 
            if(subscribeName===moduleNameInRoute){
                mapping[moduleNameInRoute] = true;
                break;
            }
        }

        if(routeData[i].subComp){
            mappingOfRoute(routeData[i].subComp,data[i].subMod)
        }


    }
}

let index = 0;
function genrateRoutes(subscriptionData) {
  let ans = [];
  subscriptionData.forEach((data, index) => {
    let moduleName = data.name;
    let isSubscription = data.isSub;
    let subModeOfSubscription = data.subMod;
    if (mapping[moduleName]===true) {
      if (subModeOfSubscription === undefined) {
        if (isSubscription) {
          ans.push({ redirectTo: moduleName });
        } else {
          ans.push({ name: moduleName, comp: "UN" });
        }
      } else {
        if (!isSubscription) {
          ans.push({ name: moduleName, comp: "UN" });
        } else {
          ans.push({
            name: moduleName,
            subComp: genrateRoutes(subModeOfSubscription),
          });
        }
      }
    } else {
      if (mapping[moduleName] === false) {
        ans.push({ name: moduleName, comp: "UN" });
      }
    }
  });
  return ans;
}

let res = genrateRoutes(subscriptionData);
for (let key in res) {
  console.log(res[key]);
}
