let number = 40585
let tem_num = number
let total = 0
let mul = 1
let i = 1


while(number != 0){
    rem = number % 10
    while(i <= rem){
        mul = mul * i
        i++
    }
    total = total + mul
    mul = 1
    i = 1
    number = parseInt( number / 10)
}
if(tem_num == total){
    console.log(`${tem_num} is a strong number`)
}
else{
    console.log(`${tem_num} is not a strong number`)

}
