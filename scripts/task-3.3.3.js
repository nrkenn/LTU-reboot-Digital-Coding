function calculator ( number1, number2, operator ) {

switch ( operator ) {
    case '+' :
        result = number1 + number2;
        console.log ( number1 + ' + ' + number2 + ' = ' + result );
        break;



        case '-':
            console.log( number1 - number2 );
            break;
            
    default:
        // ERROR MESSAGE
        break;
    }








}


// + Addition
// - Subtraction
// / Division
// * Multiply
// % Modulus