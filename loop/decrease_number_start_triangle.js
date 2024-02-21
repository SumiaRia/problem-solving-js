//decrease number to make triangle
// *****
// ****
// ***
// **
// *

let number = 1
for(let count = 5; number <= count; count--){
    for (let j = 1; j <= count; j++){
        process.stdout.write("*")
    }
    process.stdout.write("\n")
}
