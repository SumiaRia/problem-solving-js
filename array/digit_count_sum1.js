// Write a JS program to calculate sum of digits of every number in an array.
// Example:
// ar = [12, 15]
// Result:
// 3
// 6

let arr = [12, 15]
length = arr.length
for(let i = 0 ; i < length; i++ ){
    let sum = 0
    while(arr[i] != 0){
        rem = arr[i]%10 
        sum = sum + rem
        arr[i] = parseInt(arr[i]/10)
    }
    process.stdout.write(`${sum} \n`)
}
//alternative way
let arr = ['12', '19', '231','46']
let length= arr.length
for(let i = 0; i < length; i++){
    let sum = 0
    let break_array = arr[i].split('')
    let sub_length = break_array.length
    for(let j = 0; j < sub_length; j++){
        sum = sum + parseInt(break_array[j])
    }
    process.stdout.write(`${sum} \n`)
}

