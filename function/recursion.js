let arr_num = 5
let total_fact
function factorial(num){ 
    if(num == 1){
        return 1
    } 
    return num * factorial(num - 1) 
}  

// 5! 
// 5 * 4!
// 5 * 4 * 3!
// 5 * 4 * 3 * 2!
// 5 * 4 * 3 * 2 * 1!


result = factorial(arr_num) 
console.log(result)
