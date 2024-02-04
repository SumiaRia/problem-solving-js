let number = 1123
let last_number = number%10 //4
let f_num//4
let reverse = 0
let first_time = true

while(number != 0){ //123
    rem = number%10 // 1
    number = parseInt( number / 10 ) //0
    reverse = (reverse*10) + rem 
    if(number == 0){ 
        f_num = rem //1
    }
}
// console.log(reverse) // 4321 
while(reverse != 0){
    rem = reverse%10 // 1
    reverse = parseInt( reverse / 10 ) // 4
    if( first_time ){
        rem = last_number 
        i=false 
    }
    else if( reverse == 0 ){
        rem = f_num
    }
    number =  ( number*10 ) + rem // 4231
}
console.log(number)



