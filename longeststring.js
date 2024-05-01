function longestString(a){
    let b=[]
    for (let i = 0; i < a.length; i++) {
    b.push(a[i].length)     
    }
    let d=Math.max(...b)
    const index=b.indexOf(d)
    console.log(index);
    return a[index]
}
a=['ajmal','bilal','yaseen','this is logest']
console.log(longestString(a))