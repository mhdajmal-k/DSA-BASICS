function insertion(array,index,value){
    console.log("called")
    for(let i=array.length-1;i>=index-1;i--){
        array[i+1]=array[i]
    }
    array[index-1]=value
    return array

}

const array=[1,2,4,5,6]
index=3
value=3
console.log(insertion(array,index,value))




const a={
 name:"muhmmade",
 age:22
}

console.log(a.age)
console.log(a["name"])
