/* eslint-disable functional/no-let */
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-throw-statement */
/* eslint-disable functional/no-this-expression */
/* eslint-disable functional/no-class */
// OOP: Abstraction, Inheritance, Encapsulation, Polymorphism, DI
// Abstraction: to model only the relevant parts of the real object (now: petrolAmount only)

class Car {
  #petrolAmount = 0; // Private member!

  constructor() {
    // Abstract class - only for inheritance!
    if (this.constructor == Car) {
      throw new Error("Abstract class can't be instantiated!");
    }
  }

  // Setter
  set petrolAmount(amount) {
    this.#petrolAmount = amount;
  }

  // Getter
  get petrolAmount() {
    return this.#petrolAmount;
  }
}

// Child with own constructor, with default value (when no value or undefined)
class Honda extends Car {
  constructor(petrolAmount = 20) {
    super();
    this.petrolAmount = petrolAmount;
  }
}

// Child with own constructor
class Mercedes extends Car {
  constructor(petrolAmount) {
    super();
    this.petrolAmount = petrolAmount ?? this.petrolAmount; // If no param, use the parent's default!
  }
}

// Uses the getter/setter functions, and the private member variable can be used ONLY via them by . notation
const honda = new Honda();
console.log(honda.petrolAmount);
honda.petrolAmount = 5;
console.log(honda.petrolAmount);
console.log('-----------------');

// Uses the getter/setter functions, and the private member variable can be used ONLY via them by . notation
const mercedes = new Mercedes();
console.log(mercedes.petrolAmount);
mercedes.petrolAmount = 6;
console.log(mercedes.petrolAmount);
console.log('-----------------');

const mercedes2 = new Mercedes(88);
console.log(mercedes2.petrolAmount);
mercedes2.petrolAmount = 9;
console.log(mercedes2.petrolAmount);
console.log('-----------------');

// Class with static method
class PetrolStation {
  static fillUpWith(car, amount) {
    // DI: depends on Car only, not on implementation (in TypeScript this 'd be more visible.. Car: car ..)
    car.petrolAmount += amount;
  }
}

/**
 * https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa
 * As a dynamic language, JavaScript doesn’t require the use of abstractions to facilitate decoupling. Therefore, the stipulation that abstractions shouldn’t depend upon details isn’t particularly relevant to JavaScript applications. The stipulation that high level modules shouldn’t depend upon low level modules is, however, relevant.
 **/

PetrolStation.fillUpWith(honda, 100);
console.log(honda.petrolAmount);

PetrolStation.fillUpWith(mercedes, 100);
console.log(mercedes.petrolAmount);

console.log('-----------------');

// ------------------------------------------------------------------------------------

// The same ^^ wih functional style
// https://dev.to/psfeng/dependency-injection-in-functional-programming-3gg4
// "But DI may not make sense in FP"

const Bus = () => {
  let petrolAmount = 0; // Private member!

  const bus = {
    // Public getters/setters
    set petrolAmount(amount) {
      petrolAmount = amount;
    },

    get petrolAmount() {
      return petrolAmount;
    }
  };

  return bus;
};

const VolvoBus = (petrolAmount = 200) => {
  let type; // Private member!
  const bus = Bus(); // Use the parent object for inheritance! What we set on it that will be public!
  bus.petrolAmount = petrolAmount;
  bus.setType = (newType) => (type = newType);
  bus.getType = () => type;

  return bus;
};

const IkarusBus = (petrolAmount) => {
  let type; // Private member!
  const bus = Bus(); // Use the parent object for inheritance! What we set on it that will be public!
  bus.petrolAmount = petrolAmount ? petrolAmount : bus.petrolAmount;
  bus.setType = (newType) => (type = newType);
  bus.getType = () => type;

  return bus;
};

const volvoBus = VolvoBus();
console.log(volvoBus.petrolAmount);
volvoBus.petrolAmount = 6;
console.log(volvoBus.petrolAmount);
volvoBus.setType('VOLVO');
console.log(volvoBus.getType());
console.log('-----------------');

const ikarusBus = IkarusBus();
console.log(ikarusBus.petrolAmount);
ikarusBus.petrolAmount = 33;
console.log(ikarusBus.petrolAmount);
console.log('-----------------');

const ikarusBus2 = IkarusBus(777);
console.log(ikarusBus2.petrolAmount);
ikarusBus2.petrolAmount = 99;
console.log(ikarusBus2.petrolAmount);
console.log('-----------------');

const fillUpBusWith = (bus, amount) => {
  // DI: depends on Bus only, not on implementation (in TypeScript this 'd be more visible.. Bus: bus ..)
  bus.petrolAmount += amount;
};

fillUpBusWith(volvoBus, 500);
console.log(volvoBus.petrolAmount);

fillUpBusWith(ikarusBus, 200);
console.log(ikarusBus.petrolAmount);

console.log('-----------------');

// ^^ Can be converted into a function that accepts 1 argument
// and returns another function that accepts 1 argument:
// DI with partial function application:
const fillUpBusWith2 = (amount) => (bus) => {
  bus.petrolAmount += amount;
};

fillUpBusWith2(500)(volvoBus);
console.log(volvoBus.petrolAmount);

fillUpBusWith2(200)(ikarusBus);
console.log(ikarusBus.petrolAmount);

console.log('-----------------');
