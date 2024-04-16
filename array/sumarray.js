function sum(arr, target) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return "not value found"; 
}

console.log(sum([6, 5, 4, 3, 9, 8, 0], 6)); // Output: [2, 3] (indices of elements [4, 3] that sum up to 6)
