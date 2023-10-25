// here is only one Governor in the state, add static methods and properties you'd expect a Governor to have - log the properties and test the methods (don't instantiate)
//============================================

class Governor {
  static slogan = 'Vote for a Governor that truly cares';
  static suit  = 'black suit ';
  static waves() {
      console.log('waves at crowd');
  }
  static greeting() {
      console.log('Hello people, Its time to make a change');
  }
}
// console.log(Governor.slogan);
// console.log(Governor.suit);
// Governor.waves();
// Governor.greeting();
//================================================
//Think of three properties all people share, set them with the constructor
//Think of three methods all people share

class Person {
  constructor(name, hairColor, age,) {
      this.name = name
      this.hairColor = hairColor
      this.age = age
  }
  
  eat() {
    console.log("Munch Munch")
  }
  laugh() {
    console.log("HAHAHA")
  }
  cry() {
    console.log("Boohoo")
  }
  
}
// const person1 = new Person("Steph","brown","25")
// console.log(person1)
// person1.eat();
// person1.laugh();
// person1.cry();

//===============================================
// Create a PostalWorker class that inherits from person, add some methods

class PostalWorker extends Person {
  constructor(name, hairColor, age) {
     super (name, hairColor, age)
     
  }
  deliverMail() {
   console.log("You're mail is here!");
  }
  greeting() {
  console.log("Have a blessed day");
  }
  walk() {
    console.log("Stroll from house to house")
  }
  petsDog() {
    console.log("Hey Bella!, *sits and pets the dog*")
  }
//===============================================
// Create 2 PostalWorkers

} const pworker1 = new PostalWorker("TJ Watt", "black","29")
// console.log(pworker1)
// pworker1.deliverMail()
// // pworker1.greeting()

const pworker2 = new PostalWorker("Kevin Love", "brown", 35);
// console.log(pworker2)
// pworker2.walk();
// pworker2.petsDog();

//===============================================
// Create a Chef class that inherits from person, add some methods


class Chef extends Person {
  constructor(name, hairColor, age, newRecipe) {
      super (name, hairColor, age)
      this.newRecipe = newRecipe
  }
     tastetest() {
      console.log("Mmm delicioso!");
     }
     setTimer() {
     console.log("I'll set timer for 45 mins, then take casserole out oven.");
     }
     readInstructions() {
      console.log("I never made homemade pizza, I would need to follow instruction.")
     }
     smell() {
      console.log("This aroma is everlasting!")
     }
}
// Create 2 chefs

const bigChef = new Chef ("George", "blonde", 24, "Cheesy Crack Chicken Casserole")
// console.log(bigChef)
// console.log(bigChef.newRecipe)
// bigChef.tastetest()
// bigChef.setTimer()
const lilChef = new Chef ("Naudia", "red", 24, "Taco Noodle Casserole")
// console.log(lilChef)
// console.log(lilChef.newRecipe)
// lilChef.readInstructions()
// lilChef.smell()
//===============================================================