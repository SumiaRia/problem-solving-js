let number = 1234
let mul = 1
while(number != 0 ){
    mul = mul * (number%10)
    number = parseInt( number/10 )
}
console.log(mul)
