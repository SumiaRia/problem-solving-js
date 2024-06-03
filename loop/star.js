let number = 5

//     *
//    **
//   ***
//  ****
// *****
// for(let j = 0; j < number; j++){
//     for(let i = 1; i <= number; i++){ 
//         if(i < number - j ){ //5
//             process.stdout.write(` `)
//         }
//         else{
//             process.stdout.write(`*`)
//         }
//     }
//     process.stdout.write(`\n`)
//  }

// *****
//  ****
//   ***
//    **
//     *
// for(let j = 5; (number-4) <= j; j--){
//     for(i = 1; i <= number; i++){
//         if(i <= (number -j)){
//             process.stdout.write(` `)
//         }
//         else{
//             process.stdout.write(`*`)
//         }
//     }
//     process.stdout.write(`\n`)
// }


//     *
//    **
//   ***
//  ****
// *****

// for(let j = 0; j < number; j++){
//     for(let i = 1; i <= number; i++){
//         if(i < (number - j)){
//             process.stdout.write(` `)
//         }
//         else{
//             process.stdout.write(`*`)
//         }
//     }
//     process.stdout.write(`\n`)
// }

//     *
//    ***
//   *****
//  *******
// *********
// let number = 5
for(let j = 0; j < number; j++){
    for(let i = 1; i <= number; i++){
        if(i < (number - j)){
            process.stdout.write(` `)
        }
        else{
            process.stdout.write(`*`)
        }
    }
    for(let i = 1; i <= j; i++){
        process.stdout.write(`*`)
    }
    process.stdout.write(`\n`)
}


// for(let j = number; j > 0; j-- ){
//     for(let i = 0; i < j; i++){
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n")
// }
// for(let j = number; j > 0; j-- ){
//     for(let i = 0; i < j; i++){
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n")
// }



// for(let j= number; j > 0; j--){
//     for(let i = 0; i < number; i++){
//         if(i<=(number-j)){
//             process.stdout.write(` `)
//         }
//         else{

//             process.stdout.write(`*`)
//         }
//     }
//     for(let i = 1; i < j; i++){
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n")

// }














