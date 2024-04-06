// Find an element from an array.

// Array: 1, 3, 5, 17, 51, 6, 9, 21 [or Any numbers you want]
// Item to find: 17 [or Any number you want]

// Output: Found on index 3 

const arr = [1, 3, 5, 17, 51, 6, 9, 21]
n = arr.length
let find_number = 15
let count = 0
for (let i = 0; i < n; i++){
    if(arr[i] == find_number){
        process.stdout.write(`found on index ${i} \n`)
        count = count+1
    }
}
if( count == 0 ){
    process.stdout.write(` the element is not found on index `)
}




