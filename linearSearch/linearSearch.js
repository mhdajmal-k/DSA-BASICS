function linearSearch(){


for(let i=0;i<arr.length;i++){
    if(arr[i]==t){
        return i+1
    }

}
return -1
}
const arr=[-5,2,10,6]
t=10
console.log(linearSearch(arr,t));




