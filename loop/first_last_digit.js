let value = 123
let virgin = true
let initial = value
while(value != 0 ){
    if(virgin){
        last = initial%10
        virgin = false
    }
    // if(value == initial){
    //     last = initial%10 
    // }
    temp = value
    // temp = ( last * 10 ) + value   //31
    // temp = ( value * 10 ) + last  //13
    value = parseInt( value/10 ) 
    if( value == 0){
        console.log(temp)
        console.log(last)
    }

} 
