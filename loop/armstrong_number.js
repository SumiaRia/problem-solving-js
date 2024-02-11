let number = 10
let temp = number
let given_number = number
let count = 0
let total = 0
let i = 1
let mul = 1
let j = 0

while(number != 0){
    number = parseInt(number / 10)
    count++
}
while(temp != 0){ 
    rem = temp % 10 // 3 5
    while (i <= count){ 
        mul = (rem * mul)
        i++
    }
    total = total + mul
    temp = parseInt(temp / 10)
    i = 1
    mul = 1
}
if ( given_number == total){
    console.log (`The number ${total} is armstrong number`)
}
else{
    console.log (`The number ${total} is not armstrong number`)
}

