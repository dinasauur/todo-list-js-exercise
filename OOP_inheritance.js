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
  /*
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
  */
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

  // identical! Smells of code duplication
  /*
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
  */
}

// To instantiate a student object ->
const student1 = new Student('Dina', 'bbt fanatic', 'iAmBBT@gmail.com');
student1.enroll('March 6 POD A East')
console.log(student1); // HOW DO I GET BIO TO SHOW UP

const mentor1 = new Mentor('Jan', 'cat-dad', 'iActuallyWantToBeACatMom@gmail.com')
mentor1.goOnShift;
console.log(mentor1);

// GO TO MENTOR FOR THIS: Change your version of the Person class so that it contains another method. Can this method be called on in each of the two subclasses? Give it a go!

/**** NOTES ON INHERITANCE and the example
* Inheritance is a concept introduced in OOP in order to further organize behaviour that is common among multiple classes.
* As we start to create different types of objects, inevitably we start to notice some code duplication.
* In the example, the student and Mentor classes have identical constructor and bio methods. They also share some properties (name and quirkyFact) but not all of them.
* We have two classes that share the same behaviour and state information.
**  SOLUTION: Perhaps we could remove this duplication by moving the shared code from two classes into yet another class. We are going to use a technique in OOP known as inheritance.
** With inheritance, we can build a new class based on an existing class.
** In the example, now there is a general Person class that contains the shared code. Student and Mentor inherit behaviour and state information from Person using the keyword ~`extends`~.
** They also have their own code that reflects behaviour and information only pertaining to themselves.
** Student and Mentor are ~subclasses~ of the Person class, since they are extensions of that class. Person is the ~superclass~ in this relationship.
****/
