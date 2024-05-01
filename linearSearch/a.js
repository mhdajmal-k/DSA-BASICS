function search(array,elm1,elm2){
    for(let i=0;i<array.length;i++){
        if(array[i]==elm1){
            st1 = true;
        }
        if(array[i]==elm2){
            str2=true
        }    
    }
    if(st1&&str2){
        return true
    }else{
        return false
    }
    return true
}

const array=[1,2,3,4,5,6]

console.log(search(array,1,3))