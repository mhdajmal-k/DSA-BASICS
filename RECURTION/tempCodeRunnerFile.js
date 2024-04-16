function recBinary(arr,target){
//     return search(arr,target,0,arr.length-1)    
// }
// function search(arr,target,lefIndex,rightIndex){
//     if(lefIndex>rightIndex){
//         return -1
//     }
//     let middleIndex=Math.floor((lefIndex+rightIndex)/2)
//     if(target==arr[middleIndex]){
//         return middleIndex
//     }
//     if(target<arr[middleIndex]){
//         return search(arr,target,lefIndex,middleIndex-1)
//     }else{
//         return search(arr,target,middleIndex+1,rightIndex)
//     }
// }

// console.log(recBinary([-5,2,4,6,10],10))
