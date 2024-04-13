function isPowerOfTwo(n){
    for(let i=0;i<=n;i++){
        if(n==Math.pow(2,i)){
            return true
        }
    }
    return false

}
console.log(isPowerOfTwo(2))