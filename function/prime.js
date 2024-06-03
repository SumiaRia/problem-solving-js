let count = 0
function arr(ar1){
    for(let i = 0; i < ar1.length; i++){
        for(let j = 2; j < ar1[i]; j++){
            if(ar1[i] % j == 0){
                count++
                break
            }
        }
        if(count == 0){
            result =  ar1[i]
            // process.stdout.write(`${ar1[i]} \n`)
        }
        count = 0
    }
    return result
}
arr([2, 5, 4])
process.stdout.write(`${result} \n`)
arr([3,9,13])
arr([15,16,17,18,25,11])
