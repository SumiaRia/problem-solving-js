let number = 1235
let sum = 0
while(number != 0){
    rem = number%10 //3   2
    sum = sum + rem //0+3=3   3+2=5
    number = parseInt( number/10 ) //12.3     1.2
}
console.log(sum)