
function findVAlue(arr,value){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==value){
            return i
        }
    }
    return -1
}
const arr=[1,2,3,4,5,6]
let value=4
console.log(findVAlue(arr,value))