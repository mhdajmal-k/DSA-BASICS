function linearSearch(){

const arr=[-5,2,10,6]
t=10
for(let i=0;i<arr.length;i++){
    if(arr[i]==t){
        return i+1
    }

}
return -1
}
console.log(linearSearch());
