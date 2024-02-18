let count = 5
let number = count
// let i = 1

for(let i = 1; i <= number; i++ ){
    for (let j = 1; j <= count; j++){
        process.stdout.write("*")
    }
    process.stdout.write("\n")
}
