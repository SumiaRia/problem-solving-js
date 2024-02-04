let number = 121233266  
// output Frequency of 1 is 2
//Frequency of 2 is 3
// Frequency of 3 is 2
let a = 0
let b = 0
let c = 0
let d = 0
let e = 0
let f = 0
let g = 0
let h = 0
let i = 0
let j = 0
while(number != 0){
    rem = number%10 
    number = parseInt( number/10 )
    switch(rem){
        case 0:
            a++
            break
        case 1:
            b++
            break
        case 2:
            c++
            break
        case 3:
            d++
            break
        case 4:
            e++
            break
        case 5:
            f++
            break
        case 6:
            g++
            break
        case 7:
            h++
            break
        case 8:
            i++
            break
        default:
            j++
            break
    }
    // if( rem == 0 ){
    //     a++
    // }
    // else if( rem == 1 ){
    //     b++
    // }
    // else if( rem == 2 ){
    //     c++
    // }
    // else if( rem == 3 ){
    //     d++
    // }
    // else if( rem == 4 ){
    //     e++
    // }
    // else if( rem == 5 ){
    //     f++
    // }
    // else if( rem == 6 ){
    //     g++
    // }
    // else if( rem == 7 ){
    //     h++
    // }
    // else if( rem == 8 ){
    //     i++
    // }
    // else if( rem == 9 ){
    //     j++
    // }
}
if( a > 0 )
    console.log(`Frequency of 0 is : ${a}`)
if( b > 0 )
    console.log(`Frequency of 1 is : ${b}`)
if( c > 0 )
    console.log(`Frequency of 2 is : ${c}`)
if( d > 0 )
    console.log(`Frequency of 3 is : ${d}`)
if( e > 0 )
    console.log(`Frequency of 4 is : ${e}`)
if( f > 0 )
    console.log(`Frequency of 5 is : ${f}`)
if( g > 0 )
    console.log(`Frequency of 6 is : ${g}`)
if( h > 0 )
    console.log(`Frequency of 7 is : ${h}`)
if( i > 0 )
    console.log(`Frequency of 8 is : ${i}`)
if( j > 0 )
    console.log(`Frequency of 9 is : ${j}`)

