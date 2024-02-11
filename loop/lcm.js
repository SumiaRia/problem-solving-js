let first_num = 330
let temp_first_num = first_num
let last_num = 75
let temp_last_num = last_num
let lcm

if(first_num > last_num){
    while(last_num != 0){
        rem = first_num % last_num
        first_num = last_num
        last_num = rem
    }
    
    lcm = (temp_first_num * temp_last_num) / first_num
    console.log(lcm)
}
else{
    while(first_num != 0){
        rem = last_num % first_num
        last_num = first_num
        first_num = rem
    }
    lcm = (temp_first_num * temp_last_num) / last_num
    console.log(lcm)
}


