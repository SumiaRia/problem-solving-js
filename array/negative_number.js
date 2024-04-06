let array = ['2', '-3', '-6', '8', '-10']
let length = array.length

for(let i = 0; i < length; i++){
    if(parseInt(array[i]) < 0){
        process.stdout.write(`${array[i]} index is ${i} \n`)
    }
}
