// Function to calculate the total price based on the number of pizzas ordered
function checkQuantity() 
    {
    // Get the input value for the number of pizzas
    var numberOfPizzas = parseFloat(document.getElementById("quantity").value);

    // Initialize constants for pizza prices
    var priceOf1LargePizza = 6.45;
    var priceOf2LargePizzas = 12;
    var priceOf3LargePizzas = 14;

    // Initialize variables for calculation
    var totalPrice = 0;
    var packsOf3LargePizzas = 0;
    var packsOf2LargePizzas = 0;
    var remainderOf2LargePizzas = 0;

    // Check if the input is valid
    if (numberOfPizzas <= 0 || isNaN(numberOfPizzas)) 
        {
        // Display validation error message
        document.getElementById("message").innerHTML = "Validation error: Number of pizzas must be greater than zero.";
        } 
    else 
        {
        // Round to the nearest integer
        numberOfPizzas = Math.round(numberOfPizzas);

        // Calculate number of packs of 3 large pizzas
        packsOf3LargePizzas = Math.floor(numberOfPizzas / 3);

        // Calculate the remainder of pizzas after packing 3 large pizzas
        var remainderOf3LargePizzas = numberOfPizzas % 3;

        // If there's a remainder, check if it's more economical to pack them in 2 large pizzas
        if (remainderOf3LargePizzas > 0) 
            {
            packsOf2LargePizzas = Math.floor(remainderOf3LargePizzas / 2);
            remainderOf2LargePizzas = remainderOf3LargePizzas % 2;
            }

        // Calculate total price
        totalPrice = (priceOf3LargePizzas * packsOf3LargePizzas) +
                     (priceOf2LargePizzas * packsOf2LargePizzas) +
                     (remainderOf2LargePizzas * priceOf1LargePizza);

        // Display the total price
        document.getElementById("message").innerHTML = "Total price for " + numberOfPizzas + " pizzas is $" + totalPrice.toFixed(2);
        }

    // Prevent form submission
    return false;
    }