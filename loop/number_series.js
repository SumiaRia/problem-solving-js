// Write a program in JavaScript(NodeJS) to find the sum of the series 
// [ 1-X^2/2!+X^4/4!- .........].
// Test Data :
// Input the Value of x :2
// Input the number of terms : 5
// Expected Output :
// the sum = -0.415873
// Number of terms = 5
// value of x = 2.000000

let x = 2
let number = 5
let power = 2
let i = 2
let fact = -1
let sum = 0
let new_fact 


//base
process.stdout.write(`${1}`)
while(i <= number){
    power = x * power 
    fact = fact * i 
    if(i%2==0){
        x = -x //-2
        div = power / fact //-2 //-2.6
        sum = div - sum //-2 
        // console.log(x)
        if(x < 0) { 
            process.stdout.write(`-`)
        }
        else{ 
            process.stdout.write(`+`)
        }
        process.stdout.write(`x^${i}/${i}!`) 
        if(i == number || i == (number - 1)){
            if(x < 0) { 
                process.stdout.write(`+`)
            }
            else{ 
                process.stdout.write(`-`)
            }
        }
    }
    i++
}
console.log(`\nvalue of x = ${x.toFixed(6)}`)
console.log(`\nvalue of sum = ${1-sum}`)
console.log(`\nNumber of terms = ${number}`)


//factorial
// while(j <= number){
//     fact = fact * j
//     if(j%2==0){
//         console.log("fact", fact)
//         process.stdout.write(`${j}!`)
//     }
//     // console.log("fact", fact)
//     j++
//     // console.log("j", j)
// }

