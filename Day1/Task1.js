// defing the main funtion

// this is the test case which we have in question
// (arr) => [-1, 9, 8,-3,4];
// value of sum => 5

// this is the recursion funtion which takes array and index as 0 and target sum and return the ways
function findOutCount(array, index, targetSum) {
    // sum=0 and we reach to the end of array then we need to return 1 since we have find our one way
    if(targetSum===0 && index==array.length) return 1;
    // if we have exceeded array but we have not find our target yet then return 0
    if(index==array.length) return 0;
    
    // we have three option either we take an element or not take the element
    // when we don't take element
    let notTake = findOutCount(array, index + 1, targetSum);
    // when we take the element but since we have other 2 option in it one is addition and other is substration
    let letTake = findOutCount(array,index+1,targetSum-array[index]) + findOutCount(array,index+1,targetSum+array[index]);

    return notTake + letTake;
}

const countWays = (array, sizeOfArray, targetSum) => {
    // calling recursive question
    let count = findOutCount(array, sizeOfArray - 1, targetSum);
    return count;
};

const mainFuntion = () => {
  let array = [-1, 9, 8, -3 ,4];
  let valueOfSum = 5;
  
  const numberOfWays = countWays(array, 0, valueOfSum);
  console.log(numberOfWays);
};
// calling main funtion
mainFuntion();
