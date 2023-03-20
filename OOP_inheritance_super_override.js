class Person {
  constructor(name, quirkyFact, email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }

}

class Student extends Person {
  /*
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }
  */

  enroll(cohort) {
    this.cohort = cohort;
  }

  bio() {
    return `I'm a student at Lighthouse Labs. ${super.bio()}`;
  }

}

class Mentor extends Person {
  // this constructor is identical to that of a student!
  /*
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }
  */

  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }

  // identical! Smells of code duplication / was in person but now overriding the person bio becasue we want a different bio.
  // Completely re-define the bio method since it has more to say

  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`; // must put the () after ${super.bio()}, otherwise it will just print the function itself and not the value.
  }
}

// The Student class doesn't need to define bio since it can just use the one from Person

// DRIVER CODE
// To instantiate a student object ->
const student1 = new Student('Dina', 'bbt fanatic', 'iAmBBT@gmail.com');
student1.enroll('March 6 POD A East')
console.log(student1);
console.log(student1.bio()); // To access superclass's methods


const mentor1 = new Mentor('Jan', 'cat-dad', 'iActuallyWantToBeACatMom@gmail.com')
mentor1.goOnShift;
console.log(mentor1);
console.log(mentor1.bio());


// GO TO MENTOR FOR THIS: Change your version of the Person class so that it contains another method. Can this method be called on in each of the two subclasses? Give it a go!

/**** NOTES ON INHERITANCE and the example
* Inheritance is a concept introduced in OOP in order to further organize behaviour that is common among multiple classes.
* As we start to create different types of objects, inevitably we start to notice some code duplication.
* In the example, the student and Mentor classes have identical constructor and bio methods. They also share some properties (name and quirkyFact) but not all of them.
* We have two classes that share the same behaviour and state information.
*
**** INHERITANCE TECHNIQUE
**  SOLUTION: Perhaps we could remove this duplication by moving the shared code from two classes into yet another class. We are going to use a technique in OOP known as inheritance.
** With inheritance, we can build a new class based on an existing class.
*
**** EXTENDS
** In the example, now there is a general Person class that contains the shared code. Student and Mentor inherit behaviour and state information from Person using the keyword ~`extends`~.
** They also have their own code that reflects behaviour and information only pertaining to themselves.
*
**** SUBCLASS / SUPERCLASS
** Student and Mentor are ~subclasses~ of the Person class, since they are extensions of that class. Person is the ~superclass~ in this relationship.
**Sometimes you want a subclass to have similar but slightly different behaviour to its superclass.
*
**** Solution 1: OVERRIDE
** A simple way to solve it is to simply override the bio method in the subclass! Take a look at the bio change for mentor.
** When a subclass implements a method that already exists in the superclass, it is called method overriding.
** Although we solved the issue, it still isn't ideal because we are repeating the logic to display `my name...` in both sub and super class.
** To DRY this up, we could define a shared method in the parent class called sharedBio which only returns this common/shared string.
*
**** Solution 2: Use SUPER!
** The mentor's (subclass's) bio method could just call the person's (superclass's) bio method
** OOP languages allow subclasses to have a reference on the parent class. This is usually done via the ~`super`~ keyword. Take a look at the mentor bio.
** Using super allows us to access the superclass, plain and simple.
****/

/**** CONCLUSION
* Using inheritance to reduce duplicate code.
* Create a subclass of another class using the extends keyword. This gives the subclass all the state and behavior of the class it inherits from, its superclass.
* Overriding methods in subclasses to change their behaviour. Sometimes this is all you need, but other times we end up repeating some things in the overriding methods. That brings us to point 2 below.
* Using super in the overriding methods in order to avoid repeating code that's already present in the superclass.
****/



