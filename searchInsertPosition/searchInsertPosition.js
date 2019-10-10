//PROBLEM: Search & Insert Position
    // Given a sorted array and target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.     

//Pseudo Code 
    //can use indexOf() javaScript function to determine index for target values already included in the array
    
    //If not present the can use find() function to determine element

//Test Cases
//numbers array  
let numArr1 = [1,3,5,6];

//Target value
let targetPos = 1;
let targetNeg = -1;
let targetWithin = 3;
let targetOutside = 7;
let targetZero = 0;
//function to determine if target is within num array passed in as an argument

const searchInsert = (nums,target) => {
    let searchFind = nums.indexOf(target);
    console.log('searchFind result: ', searchFind)


    if(searchFind <= -1 ) {  
        let found = nums.findIndex((elem) => {
            return target < elem
        }) 
        searchFind = found;
        if(found === -1) {
            searchFind = nums.length;
        };
    } return searchFind;
}














console.log(searchInsert(numArr1,targetOutside));





