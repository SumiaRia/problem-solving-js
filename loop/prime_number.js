// Check if a number is prime or not
let number = 13
let i = 0

while(i <= number){
    if((number % i == 0 && i != 1 && i != number) || number <= 1){ 
        console.log("not prime")
        break
    }
    else if(number == i && 1 < number){
        console.log("prime") 
        break    
    }
    else{
        i++
    }
}






