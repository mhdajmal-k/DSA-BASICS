
function findVAlue(array,value,left,right){
   
    if(left<right){
        const middleIndex=Math.floor((left+right)/2)
        if(array[middleIndex]==value){

            index= `${middleIndex} is the index of teh search value`
            return index
        }
        if(value>array[middleIndex]){
            return findVAlue(array,value,middleIndex+1,right)
        }else{
            return findVAlue(array,value,left,middleIndex-1)
        }
    }
}

const array=[1,2,3,4,5,6,7,8]
const searchVAlue=2
console.log(findVAlue(array,searchVAlue,0,array.length-1))