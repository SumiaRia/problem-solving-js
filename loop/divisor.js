// Factors of a number. / Divisors of a number.
// input = 12
// output 
// Divisors are:
// 1
// 2
// 3
// 4
// 6
// 12

let number = 12
for (let i = 1; i <= number; i++){
    if(number % i == 0){
        console.log(i)
    }
}
