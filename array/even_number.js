// Show all the even numbers in an array.

// Array: 1, 2, 5, 16, 8, 51, 98, 3

// Output: 2 is even

const arr = [1, 2, 5, 16, 8, 51, 98, 3]
let length = arr.length
for(let i = 0; i < length; i++){
    if(arr[i]%2 == 0){
        process.stdout.write(`${arr[i]} is even number \n`)
    }
}
