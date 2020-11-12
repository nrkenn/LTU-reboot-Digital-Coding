function percentageCalculator( number, percentage ) {

    var percentageOf = ( number * percentage ) / 100;


    return percentageOf;

}

console.log( percentageCalculator( 300, 25 ) );

var twentyFivePercentOfHundred = percentageCalculator( 100, 25);

console.log ( twentyFivePercentOfHundred );
