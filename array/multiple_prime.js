let ar1 = [2,5,7]
let ar2 = [3,9,13]
let ar3 = [15,16,17,18,25]
let count = 0
for(let i = 0; i < ar1.length; i++){
    // console.log(ar1[i])
    for(let j = 2; j < ar1[i]; j++){
        if(ar1[i] % j == 0){
            count++
            break
        }
    }
    if(count == 0){
        process.stdout.write(`${ar1[i]} \n`)
    }
    count = 0
}
for(let i = 0; i < ar2.length; i++){
    // console.log(ar1[i])
    for(let j = 2; j < ar2[i]; j++){
        if(ar2[i] % j == 0){
            count++
            break
        }
    }
    if(count == 0){
        process.stdout.write(`${ar2[i]}\n`)
    }
    count = 0
}
for(let i = 0; i < ar3.length; i++){
    // console.log(ar1[i])
    for(let j = 2; j < ar3[i]; j++){
        if(ar3[i] % j == 0){
            count++
            break
        }
    }
    if(count == 0){
        process.stdout.write(`${ar3[i]}\n`)
    }
    count = 0
}