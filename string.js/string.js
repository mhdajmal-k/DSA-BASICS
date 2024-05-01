function reverseString(string){
    reversString=''

    for(let i=string.length-1;i>=0;i--){
        reversString +=string[i]
    }
    return reversString
}
let string="apple"
console.log(reverseString(string))



// function reverseString(a) {
//     if (a === '') {
//         return '';
//     } else {
//         return reverseString(a.substr(1)) + a.charAt(0);
//     }
// }

// let a='recertion'
// console.log(reverseString(a))







// function youare(b){
//     if(b=="") {
//         return " "
//     }
//         else{
//             return youare(b.substr(1))+ b.charAt(0)
//         }
// }
// let b='you'
// console.log(youare(b))