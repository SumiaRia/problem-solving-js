let first_num = 12
let last_num = 153

if(first_num > last_num){
    while(last_num != 0){
        rem = first_num % last_num
        first_num = last_num
        last_num = rem
    }
console.log(first_num)
}
else{
    while(first_num != 0){
        rem = last_num % first_num
        last_num = first_num
        first_num = rem
    }
console.log(last_num)
}
