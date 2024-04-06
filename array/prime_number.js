let arr = [2, 3, 5, 8, 7]
let length = arr.length

for(let i = 0; i < length; i++){
    if(arr[i] > 1){
        let count = 0
        for(let j = 2; j < arr[i]; j++){
            if(arr[i]%j ==0){
                count++
                break
            } 
        }
        if(count == 0){
            process.stdout.write(`${arr[i]} is prime number \n`)
        }   
    }
}

