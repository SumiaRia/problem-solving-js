//print the count number
// 1
// 22
// 333
// 4444
// 55555

let number = 5

for(let count = 1; count <= number; count++){
    for(let i = 1; i <= count; i++){
        process.stdout.write(`${count}`)
    }
    process.stdout.write("\n")
}
