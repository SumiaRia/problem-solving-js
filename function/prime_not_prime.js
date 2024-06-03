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
            process.stdout.write(`${ar1[i]} \n`)
        }
        count = 0
    }
}
function prime(n){
        for(let j = 2; j < n; j++){
            if(n % j == 0){
                return false
                // process.stdout.write(`${n} is not prime \n`)
            }
        }
        return true
}
function arr(ar1){
        for(let j = 2; j < ar1.length; j++){
            if(ar1.length % j == 0){
                count++
                break
                // process.stdout.write(`${ar1.length} is not prime \n`)
            }
        }
        if(count == 0){
            process.stdout.write(`${ar1.length} is prime \n`) 
        }
        count = 0
    }

let a1 = [2, 5, 4]
arr(a1)
let 
arr([3,9,13])
arr([15,16,17,18,25,11])

let num = 6
let result = prime(num) 
console.log(result)

if(result){
    process.stdout.write(`${num} is prime \n`)
}
else{
    process.stdout.write(`${num} is not prime \n`)
}

