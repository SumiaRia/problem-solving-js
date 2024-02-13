let f_num = 0
let l_num = 1
let n = 8
let i = 1
let total1 = 0
let total2 = 0
// 0 1 1 2 3 5 8 13
while (i <= n){
    if(f_num<=9){

        total1 = (total1 * 10) + f_num  // 0 1 1 2 3 5 8
    }
    else{
        total2 = (total2 * 100) + f_num  // 0 1 1 2 3 5 8
    }
    // console.log("total", total)
    sum = f_num + l_num // 1 2 3 5 8 13 21
    // console.log("sum", sum)
    f_num = l_num // 1 1 2 3 5 8 13
    // console.log("f_num", f_num)
    l_num = sum //1 2 3 5 8 13 21
    // console.log("l_num", l_num)
    i++
}
console.log(`0${total1}${total2}`) 
