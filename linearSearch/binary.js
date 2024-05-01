// function binary(arr,target){
//      let left=0
//     let right=arr.length-1

//     while(left<=right){
//         const middilIndex=Math.floor((left+right)/2)
//         if(arr[middilIndex]==target){
//             return middilIndex
//         }
//         if(arr[middilIndex]>target){
//             left=middilIndex+1
//         }else{
//             right=middilIndex-1
//         }
//     }
//     return -1
// }


// const arr=[9,6,3,1,0,-1,-2]
// const target=9
// console.log(binary(arr,target))

// function rec(name){
//     if(name==""){

//         return ""
//     }
//     return rec(name.charAt(1))+name.substr(0)
// }

// const name='ajmal'
// console.log(rec(name))



function search(array,searchElemet){
    // if(array.includes(searchElemet)){
    //     return true
    // }else{
    //   return  false
    // }
    for(let i=0;i<array.length;i++){
        for(let j=0;j<searchElemet.length;j++){
            if(array[i]==searchElemet[j]){
                return true
            }
        }
    }
    return false
}

const array=[1,2,3,4,5,6]
const searchValue=[1,3]

console.log(search(array,searchValue))