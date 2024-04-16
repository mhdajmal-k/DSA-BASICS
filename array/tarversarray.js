function traverse(arr, target) {
    console.log("j");
    let count = 0; // Count the number of occurrences of the target
    
    // Iterate over the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is equal to the target, move it to the end of the array
        if (arr[i] === target) {
            // Remove the current element from its current position
            arr.splice(i, 1);
            // Add the target element at the end of the array
            arr.push(target);
            // Decrement i to re-check the element moved to the end
            i--;
            // Increment the count
            count++;
        }
    }
    
    return arr; 
}
console.log("hi");
console.log(traverse([6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6], 6));
