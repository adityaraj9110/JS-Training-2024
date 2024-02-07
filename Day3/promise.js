const recipe = ["onion","flour","salt","oil"];

const newPromise = new Promise((resolve,reject)=>{
    if(recipe.includes("salt")){
        resolve({ans:"Yes"});
    }else{
        reject({ans:"no"});
    }
})

newPromise.then((resolve)=>{
    console.log(resolve)
}).catch((reject)=>{
    console.log(reject);
})