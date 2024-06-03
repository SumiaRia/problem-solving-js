function even(a){
    if(a%2 == 0){
        return true
    }
}
//array pass
function print_evens(arr){
    for(let i = 1; i <= arr.length; i++){
        num = even(arr[i])
        if(is_even == true){
            console.log(`${arr[i]}`)
        }
    }
}

// num = even(5)
// console.log(`${num}`)


////using array 
arr = [5,10,12]
for(var i = 0; i<arr.length; i++){
    is_even = even(arr[i])
    if(is_even == true){
        console.log(`${is_even}`)
    }
}

