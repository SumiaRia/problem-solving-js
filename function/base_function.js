function is_power(base, power){
    for(i = 1; i < power; i++){
        base = n * base
        // console.log(`${base}`)
    }
    return base
}
function print_power(result){
    console.log(`${result}`)
}
n = 2
result = is_power(2, 5)
print_power(result)