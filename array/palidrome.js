function checkPalindrome(b){
    console.log("called")

    for(let i=0;i<b.length;i++){
       if(b[i]!==b[b.length-i-1]){
return false;
       }
    }
    return true
}

let a ='MaLayaLaM'
console.log(checkPalindrome(a));





function checkPalindrome(string,start,end){
    if(start>=end){
        return true
    }
    if(string[start]!==string[end]){
        return false
    }
    return checkPalindrome(string,start+1,end-1)
}


function palindrome(c){
    const toSmall=c.toLowerCase()
    console.log(toSmall);
    
    return checkPalindrome(toSmall,0,toSmall.length-1)
}

let c='malayalam'
console.log(palindrome(c))




// function checkPalindromeRecursive(str, start, end) {
//     // Base case: if start index crosses end index, return true (indicating palindrome)
//     if (start >= end) {
//         return true;
//     }

//     // Check if characters at start and end positions are equal
//     if (str[start] !== str[end]) {
//         return false;
//     }

//     // Recur for substring by incrementing start and decrementing end
//     return checkPalindromeRecursive(str, start + 1, end - 1);
// }

// function checkPalindrome(str) {
//     // Convert the string to lowercase if you want case-insensitive comparison
//     str = str.toLowerCase();
//     return checkPalindromeRecursive(str, 0, str.length - 1);
// }

// let b = 'MaLayaLaM';
// console.log(checkPalindrome(b)); // Output: true

