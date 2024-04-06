// Show all the even / odd numbers in an array.
// Array: 1, 2, 5, 16, 8, 51, 98, 3
// Output: 
// 1 is odd
// 2 is even

let arr = [0, 2, 5, 16, 8, 51, 98, 3]
let length = arr.length

for(let i = 0; i < length; i++){
    if(arr[i]%2 == 0){
        process.stdout.write(`${arr[i]} is even \n`)
    }
    else{
        process.stdout.write(`${arr[i]} is odd \n`)
    }
}