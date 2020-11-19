let shoppingCart = [
    {
    name:"loaf of bread",
    type:"food",
    quantity:1,
    price:.85
    },
    {
    name:"multipack beans",
    type:"food",
    quantity:1,
    price:1
    },
    {
    name:"mushrooms",
    type:"food",
    quantity:10,
    price:.1
    },
    {
    name:"can of beer",
    type:"alcohol",
    quantity:4,
    price:1.1
    },
    {
    name:"prosecco",
    type:"alcohol",
    quantity:1,
    price:8.99
    },
    {
    name:"steak",
    type:"food",
    quantity:2,
    price:3.99
    },
    {
    name:"blue cheese",
    type:"food",
    quantity:1,
    price:2.99
    },
    {
    name:"candles",
    type:"home",
    quantity:3,
    price:1.99
    },
    {
    name:"cheesecake",
    type:"food",
    quantity:1,
    price:4.99
    },
    {
    name:"onions",
    type:"food",
    quantity:3,
    price:.4
    }];

    function discountForFood (arr ) { // 1. Create a function that takes one argument (the array)

        var totalPrice = 0; // 2. Creat a variable inside the function called 'totalPrice'

        // 3. Loop through each item in the array and add the array and add the value of the item to the total price, remember to account for the quantity.
        for( var index = 0; index < arr.length; index++ ) {

            // 4. If the item has a type of "food" the total price is 20% less
        if ( arr[index].type === "food" ) {

            var discount = ( arr[index].price * 20) / 100;

        totalPrice = totalPrice + (arr[index].price - discount ) * arr[index].quantity;

        } else {

            totalPrice = totalPrice + ( arr[index].price * arr[index].quantity)}
        }

        // 5. Return the totalPrice varirable
        return totalPrice.toFixed(2);

    }

    console.log( discountForFood( shoppingCart )
    );
