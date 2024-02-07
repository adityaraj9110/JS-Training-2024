import data from "./subscriptionList.js";
import routeData from "./routesList.js";

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
mappingOfRoute(routeData, data);

// for (let key in mapping) {
//   console.log(key, ":", mapping[key]);
//   //   console.log(mapping[key].subMod);
// }
// console.log(mapping["M15"]);

export default mapping;
// 1 2