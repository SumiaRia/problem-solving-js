//right_left_decrease_increase_star_triangle
// *****
//  ****
//   ***
//    **
//     *

let number = 5

for(let j = number; j > 0; j--){
    for(i = 1; i <= number; i++){
        if(i <= (number - j)){
            process.stdout.write(` `)
        }
        else{
            process.stdout.write(`*`)
        }
    }
    process.stdout.write(`\n`)
}
