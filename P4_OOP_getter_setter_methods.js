// Will use the pizza example in part 1 to introduce getter and setter methods
class Pizza {
  constructor(size, crust) {
    this.toppings = ['cheese'];
    this.sauce = ['tomato'];
    this.size = size;
    this.crust = crust;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }

  get size() {
    return this._size;
  }


}

// DRIVER CODE
/*
// Scenario 1
const pizza = new Pizza('large', 'thick');
console.log(pizza);
pizza.setSize('s'); // This might seem kind of pointless. Why don't we just access pizza.size directly? Read notes for reasons.
pizza.getSize() // m
// See that even though I've explicitly put in 'large' as the argument for size in the constructor method, when you print pizza, the size is 'm' because it was SET to 'm'.
// Read below under notes for further explanation.

// Scenario 2
// Now that we have added a conditional statement to setSize() method, if we have 'large' passed as argument directly in Pizza and the setSize is anything that is not defined in the conditional statement
// ie. const pizza = new Pizza ('large', 'thick');
// pizza.setSize('super large'); ->  will print out 'large', it will use the argument as default because 'super large' went through the validation and did not pass

// Scenario 3
// If there was no argument passed in, and the setSize is being set to something else not defined
// ie. const pizza = new Pizza();
// pizza.setSize('super large'); -> will print out 'undefined' because size value is not defined.

*/

/*
// New Scenario with set keyword
const pizza = new Pizza(null, 'thick');
pizza.size = 'm'
console.log(pizza)
// Simiarly, in Scenario 1 from above, this will print out 's' for size
// Scerario 2 - argument is passed in but size is set to something else. It will not default to argument. It will not show the size property at all.
// Scenario 3 - no argument is given, but size is set to something else. It will not show any size property at all.
// IN THESE CASES, do we still need the size parameter and size property in the contructor method?? ASK MENTOR.
*/


////GETTER - COMPUTED DATA
// The first round - without using the get keyword
/*
console.log(pizza.getPrice()); // 12
pizza.addTopping('green pepper');
pizza.addTopping('sausage');
console.log(pizza.getPrice()); // 16
*/

// The second round - using the get keyword
/*
let pizza = new Pizza();
console.log(pizza.price);
*/






/**** NOTES ON GETTER & SETTER METHODS
* There are many reasons you might want to use getters and setters in your app. Reasons:
* 1. Validating data before assigning it to a property
* 2. Computing a value on the fly instead of simply pulling it out of a property
*
**** SETTER - VALIDATING DATA
** If our pizzas can only have one of the following sizes: 's', 'm', 'l'; then it would be bad if someone set the size of their pizza to '🤗'
** Using a setter method instead of setting the size property directly, we can have the object validate the value before it gets set.
*
**** GETTER - COMPUTED VALUE
** We could create a property to keep track of the price of a pizza. Every time the size or toppings change, we could just update this price property.
** But that involves constantly keeping track of the price. It would be easier to just compute the price of the pizza when it's needed.
*
**** GET AND SET KEYWORDS
* pizza.price;      // instead of getPrice()
* pizza.size = 's'; // instead of setSize(size)
** Is it a function or a value? It's both?! This may seem confusing at first because price and size are defined as functions, not values
** Behind the scenes, The get and set syntax binds an object's property to a function that will be called when that value is looked up
** Often times, it's nice to create an interface to a class's properties like this, where a method appears as a value. It creates a more simple interface
****/

/**** CONCLUSION
* Setters allow us to validate data before assigning it to a property
* Getters allow us to compute a value on the fly instead of simply pulling it out of a property
* The get and set keywords just make our object's interface more simple.
****/

 
