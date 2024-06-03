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

