class Pizza {

  // To add a method to a class with the following syntax: (For notes involving constructor(), see below.)
  constructor(size, crust) {
      // To add properties to a class, simply use the 'this' keyword followed by the property name, then assign it a value:
    this.toppings = ['cheese'];
    this.sauce = ['tomato'];
    this.size = size;
    this.crust = crust;
  }

  addTopping(topping) {
    this.toppings.push(topping)
  }
};

// This will **NOT** work.
// That's because addTopping is a method only available to actual instances of Pizza
// Since a class is just a blueprint for creating objects, methods like addTopping will exist on the instances created from the class, but not on the class itself.
//// Pizza.addTopping();


let pizza1 = new Pizza('medium', 'chicago');
console.log(pizza1);
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1);
// delete the sauce property
delete pizza1.sauce;
console.log(pizza1);

let pizza2 = new Pizza('small', 'cheese-stuff');
console.log(pizza2);
pizza2.addTopping('more cheese');
// assign new value to sauce
pizza2.sauce = 'alfredo';
console.log(pizza2);

let pizza3 = new Pizza('large', 'thin');
console.log(pizza3);


/****
* NOTES ON CLASSES:
* The class pattern allows us to DRY up our code by defining the default state and behaviour for all pizzas in one place instead.
* In OOP, classes are blueprints (templates) that we use to create instances of objects.
* A class describes what the object is going to be and we can create new objects using the class.
* To declare a class, you use the class keyword with the name of the class.
* We can use any name for the class but a class name should always be a noun, and the first letter should always be capitalized.
* To create a new object from a class, we use the new keyword:
* In this example, pizza1 and pizza2 are pizza objects. When you create an object using a class, it is an instance of that class.
* So pizza1 and pizza2 are instances of the Pizza class.
****/

/****
* NOTES ON CONSTRUCTOR:
* constructor() is a special kind of method that gets executed when an object instance is created from a class.
* This is a great place to setup default state for new instances.
* In other words, the constructor is for setting default values for any new object's properties.
* In this example, w are currently using the Pizza's constructor to setup the toppings array and add "cheese" as the first topping.
* A class may only hvae one constructor() that will get called when an instance of that class is created
* To add more properties, just list them under the contructor() method and it will create the property. Those properties can be accessed as usual.
* Since it's a method, we can also pass in values to the constructor method. Take a look at example pizza3
****/

/****
* NOTES ON OBJECT-ORIENTED PROGRAMMING - OOP
* OOP's goals are to help us with code organization, re-use and modularity
* Object orientation proposed to do this by encapsulating state (properties) and behaviours (methods) that are similar into these things called objects.
* We saw an example of this with the Todo List app exercise. We created a function called newTask which would return a new task object each time it was called.
* In this activity, we wrote code that lets us create new pizza objects using the class-based syntax. It allowed us to call new Pizza().
* Upon reflection, you will see that it does the same thing but in a different way.
* In class-based languages that are more strict (Ruby, Java, etc.), we are only able to use classes to solve this issue. In JavaScript we have both options.
****/

/****
* NOTES ON PRIMITIVES AS OBJECTS
* Each primitive in JavaScript (excluding symbol which has weird rules) has a corresponding object constructor;
* An object constructor can be invoked with the word new, as seen below.
* Note that when we call object constructors we create new, unique instances of the objects requested.
* When we use the object constructor to create a primitive, we run into issues when we try to compare two different strings, for instance.
* We see above that despite having the same string content, the primitive string is not the exact same as an object string.
* However, using == allows JS to convert one of them so that their types match (type-coercion vulnerable). To avoid these kinds of issues, it's generally considered bad practice to use object constructors when you're creating primitives,
* but object constructors are extremely useful for instantiating the complex objects that you'll be defining with your classes in the future.
*
*
* Example below:
const greeting = "Hello, world!";
console.log(typeof greeting) // string

const greetingObj = new String('Hello, world!');
console.log(typeof greetingObj) // object

console.log(greeting == greetingObj); // true
console.log(greeting === greetingObj); // false
****/

/****
* CONCLUSION
* In this section, you learned about how to use classes as a way of simplifying the creation of objects that share the same set of behaviour and properties. You also became familiar with:
* The class syntax.
* The purpose of the new keyword and the concept of constructor functions.
* The difference between classes and instances.
* How we are able to create new object instances with and without class.
****/





