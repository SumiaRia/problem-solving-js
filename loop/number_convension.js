//decimal to octal
let num = 100
let n = 8
let res = 0
let rev = 0

while(num != 0){
    rem = num % n 
    res = (res * 10) + rem 
    num = parseInt(num / n)
}
console.log(res)
while(res != 0){
    rem = res%10
    rev = (rev * 10) + rem
    res = parseInt(res / 10)
}
console.log(rev)

