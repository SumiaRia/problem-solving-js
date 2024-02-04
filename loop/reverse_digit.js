let value = 1234;
let rev = 0
while( value != 0){
    rem = value%10; //4  3  2 1
    rev = ( rev * 10 ) + rem
    value = parseInt(value/10); //123 12 1 
}
console.log(rev);


