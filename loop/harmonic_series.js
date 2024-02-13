// Write a program in JavaScript (NodeJS) to display the n terms of a harmonic series and their sum.
// 1 + 1/2 + 1/3 + 1/4 + 1/5 ... 1/n terms
// Test Data :
// Input the number of terms : 5
// Expected Output :
// 1/1 + 1/2 + 1/3 + 1/4 + 1/5 = 2.283334

let n = 5
let i = 1
let res = 0

while (i <= n){
    sum = 1/i
    res= res + sum
    process.stdout.write(`1/${i}`)
    if(i != n){
       process.stdout.write(` + `)
    }
    else{
        process.stdout.write(` = `)
    }
    i++
}
process.stdout.write(`${res}`);
