//right to left and increase to decrease star triangle
//     *
//    **
//   ***
//  ****
// *****

let number = 5

for(let j = 0; j < number; j++){
    for(let i = 1; i <= number; i++){ 
        if(i < number - j ){ //5
            process.stdout.write(` `)
        }
        else{
            process.stdout.write(`*`)
        }
    }
    process.stdout.write(`\n`)
}
