

let listOne = [1,2,3]
let listTwo =  [1,2,4]

const mergeTwoList = (l1,l2) => {
    console.log('listOne: ', l1)
    l1.splice(1,0, ...l2).sort();
    console.log('listOne: ', l1.sort())
}

console.log(mergeTwoList(listOne,listTwo));