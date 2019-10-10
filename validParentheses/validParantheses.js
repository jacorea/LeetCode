// Problem:20. Valid Parentheses 
    //Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//Parameters
    //Parameter 1: Open brackets must be closed by the same type of brackets.
    //Parameter 2: Open brackets must be closed in the correct order.


//Pseudo Code 
    //can get string, almost like DNA complementary pairs and see if it matches.
    

    //Convert string to array
    //check to see if adjacent element or far end element in array matches.
    //If does, remove those elements from the array and keep checking.
    //If doesn't, then string does not meet requirements.

let varOne = "({}";

var isValid = function(s) {
    
    let closeMap = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };
    let charStack = [];
    
    // validate input
    if(s===null || s===undefined)
        return false;
    
    for(var i = 0; i<s.length; i++){
        let curChar = s.charAt(i);
        let topElement;
        if(closeMap[curChar] !== undefined){
            topElement = (charStack.length===0) ? '#' : charStack.pop();
            if(topElement !== closeMap[curChar])
                return false;
        }else{
            charStack.push(curChar);
        }
    }
    return charStack.length === 0;
};

//     const isValid = (specialStr) => {
    
//         let parentMatch = {
//         '}': '{' ,
//         ')': '(' ,
//         ']': '[' 
//     }

//     console.log(parentMatch);
//     let compareMatch = [];

//     const specialStrArr = specialStr.split('');
//     console.log(specialStrArr)

    
//     for (let i=0; i < specialStrArr.length; i++) {
//         let curChar = specialStrArr[i]
//         let topElem
      
//         if(parentMatch[curChar] !==undefined) {
//             topElem = (compareMatch.length === 0) ? '#' : compareMatch.pop();
//             console.log('compare match pop: ', compareMatch);
//             console.log('top elem: ', topElem)
//             if(curChar !== parentMatch[curChar]) {
//                 console.log('matching pair: ', parentMatch[curChar]);
//                 return false
//             }
//         } 
//         else {
//             compareMatch.push(curChar)
//             console.log('compareMatch array: ' , compareMatch);
//         }
//     }
//     return compareMatch.length === 0;
// }

console.log(isValid(varOne));
