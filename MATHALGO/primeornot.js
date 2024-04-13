function checkPrimeOrNot(n){
    if(n==1){
        return false
    }else{
        
        for(let i=2;i<n;i++){
    
            return n%i==0?true :false
        }
    }

}

console.log(checkPrimeOrNot(9000000000000000000000000000000000000000000000000000000000000000000000))