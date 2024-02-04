let number = 123212
let temp = number
let palindrome = 0
while(number != 0){
    rem = number % 10 
    palindrome = (palindrome * 10) + rem // 1
    number = parseInt(number / 10) //1232
}
// console.log(palindrome)
if(temp == palindrome){
    console.log("The number is palindrome")
}
else{
    console.log("The number is not palindrome")
}
