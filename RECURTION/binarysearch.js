// function recBinary(arr,target){
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




// function recBinary(arr,search){
//     return searchBinay(arr,search,0,arr.length-1)
// }
// function searchBinay(arr,target,left,right){
//     if(left>right){
//         return false
//     }
//     const middleIndex=Math.floor((left+right)/2)
//     if(arr[middleIndex]==target){
//         return middleIndex
//     }
//     if(target>arr[middleIndex]){
//         return searchBinay(arr,target,middleIndex+1,right)
//     }else{
//         return searchBinay(arr,target,left,middleIndex-1)
//     }
// }

function recBinary(arr,target){
    let left=0;
let right=arr.length-1
return searchBinaya(arr,target,left,right)
}
 function searchBinaya(arr,target,left,right){
    if(left>right){
        return -1
    }
    middleIndex=Math.floor((left+right)/2)
    if(arr[middleIndex]==target){
        return middleIndex
    }
    if(arr[middleIndex]>target){
        console.log("JJO");
        return searchBinaya(arr,target,left,middleIndex-1)
    }else{
        console.log("HERE");
        return searchBinaya(arr,target,middleIndex+1,right)
    }
 }


console.log(recBinary([2,3,4,5,16],2))




