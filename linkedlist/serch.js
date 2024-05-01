function a(a,b){
    let c=[]
    for(let i=0;i<a.length;i++){
        let count=0
        for(let j=0;j<b.length;j++){

            if(a[i]===b[j]){
                count++
            }
        }
        if(count<1){
            c.push(a[i])
            c.push(b[i])
        }
    }
    console.log(c)
    return 
}
function check(array,target,target2){
    
}

const array=["K","j","l","b"]
const array2=["K","J","l","B"]
const target="K"
const target2="B"
a(array,array2,target,target2)