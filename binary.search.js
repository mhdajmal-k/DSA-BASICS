// function palidrom(a){
//     for(let i=0;i<a.length;i++){
//         if(a[i]!==a[a.length-1-i]){
//             return false
//         }
//     }
//     return true
// }

// function recPlidrom(a,start=0,end=a.length-1)
// {
//     if(start>=end){
//         return true
//     }
//     if(a[start]!==a[end]){
//         return false
//     }
//     return recPlidrom(a, start + 1, end -1);

// }

// let a="malayaladm"
// console.log(recPlidrom(a))

// function factorial(n){
//     if(n==0)return 1
    
//         return n*factorial(n-1)
    

// }
// console.log(factorial(5))


// function binary(array,target){
//     let left=0;
//     let right=array.length-1
//     while(left<=right){
//         let middileIndex=Math.floor((left+right)/2)
//         if(array[middileIndex]==target){
//             return middileIndex
//         }
//         if(target>array[middileIndex]){
//             left=middileIndex+1
//         }else{
//             right=middileIndex-1
//         }
//     }
// return -1

// }

function recBinary(array,target,start=0,end=array.length-1){
    if(start>=end){
        return -1
    }
    let middileIndex=Math.floor((start+end)/2)
    if(array[middileIndex]==target){
        return middileIndex
    }
    if(target>array[middileIndex]){
        return recBinary(array,target,middileIndex+1,end=array.length-1)
    }else{
        return recBinary(array,target,start,middileIndex-1)
    }

}

console.log(recBinary([1,2,3,4,5,6,6,7],3))
// console.log(binary([1,2,3,4,5,6,7,8],1));



