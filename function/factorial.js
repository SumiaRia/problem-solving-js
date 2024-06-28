let arr_num = [4, 5, 2]
let total_fact
function is_fact(num){
    for(j = 0; j < num.length; j++){
        let i = 1
        let fact = 1
        while(i <= num[j]){
            fact= fact * i
            i++
        }
        total_fact = fact
        is_print(total_fact)
    }   
}
function is_print(total){
    console.log(`${total}`)
}

is_fact(arr_num)


