// function binarySearch(arr,target){
  
//     let lefIndex=0
//    let rightIndex=arr.length-1
//    while(lefIndex<=rightIndex){
//     let middleIndex = Math.floor((lefIndex + rightIndex) / 2);
//     if(arr[middleIndex]==target){
//         return middleIndex
//     }

//         if(target<arr[middleIndex]){
//             rightIndex=middleIndex-1

//         }else{
//             lefIndex=middleIndex+1
//       }
    
//     }
//     return -1 
// }
// console.log(binarySearch([1,2,3,4,5,6,7,8,9],7))



function binarySearchSet(arr,search){
    lefIndex=0
    rightIndex=arr.length-1
    while(lefIndex<=rightIndex){
        let middleIndex=Math.floor((lefIndex+rightIndex)/2)
        if(arr[middleIndex]==search){
            return middleIndex;
        }
        if(arr[middleIndex]>search){
            rightIndex=middleIndex+1
        }else{
            lefIndex=middleIndex-1
        }
    }
}


console.log(binarySearchSet([1,2,3,4,5,6,7,8,9],2))