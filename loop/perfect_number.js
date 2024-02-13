let number = 8122
let i = 0
let total = 0
let temp_num = number
while(i < number){
    rem = number % i
    if( rem == 0){
        total = i + total
    }
    i++
}
if(total == temp_num){
    console.log(`${temp_num} is perfect number`)
}
else{
    console.log(`${temp_num} is not perfect number`)
}

