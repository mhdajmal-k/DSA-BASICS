function factorial(n){
    let sum=1
    for(let i=2;i<=n;i++){
        sum*=i
    }
    return sum

}

console.log(factorial(3))
  