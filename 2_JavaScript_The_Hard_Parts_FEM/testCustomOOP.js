import myNew from './myNew';
import Person from './Person';

function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.greet = () => {
    console.log('hello');
  };
}

PersonConstructor.prototype.introduce = function introduce() {
  console.log(`Hi, my name is ${this.name}`);
};

class RealPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = () => {
      console.log('hello');
    };
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }
}
const realPerson = new RealPerson('John', 43);

const simPersonConstructor = myNew(PersonConstructor, 'Vicky', 25);
const simPerson = Person('Jim', 65);

// test myNew with constructor
console.log('---------Constructor---------');
console.log(simPersonConstructor);
console.log(simPersonConstructor.name);
console.log(simPersonConstructor.age);
console.log(simPersonConstructor.__proto__);
simPersonConstructor.introduce();

// test custom class
console.log('------------Class------------');
console.log(simPerson);
console.log(simPerson.name);
console.log(simPerson.age);
console.log(simPerson.__proto__);
simPerson.introduce();

// control
console.log('-----------Control-----------');
console.log(realPerson);
console.log(realPerson.name);
console.log(realPerson.age);
console.log(realPerson.__proto__);
realPerson.introduce();

function PersonConstructorReturn(name, age) {
  this.name = name;
  this.age = age;
  this.greet = () => {
    console.log('hello');
  };
  return {
    isCurveBall: true,
  };
}

PersonConstructorReturn.prototype.introduce = function introduce() {
  console.log(`Hi, my name is ${this.name}`);
};

class RealPersonReturn {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = () => {
      console.log('hello');
    };
    return {
      isCurveBall: true,
    };
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }
}
const realPersonReturn = new RealPersonReturn('John', 43);

const simPersonConstructorReturn = myNew(PersonConstructorReturn, 'Vicky', 25);

// with return statement in constructor
console.log('------ReturnConstructor------');
console.log(simPersonConstructorReturn);
console.log(simPersonConstructorReturn.name);
console.log(simPersonConstructorReturn.age);
console.log(simPersonConstructorReturn.__proto__);
if (simPersonConstructorReturn.introduce) {
  simPersonConstructorReturn.introduce();
}

console.log('---------ReturnClass---------');
console.log(realPersonReturn);
console.log(realPersonReturn.name);
console.log(realPersonReturn.age);
console.log(realPersonReturn.__proto__);
if (realPersonReturn.introduce) {
  realPersonReturn.introduce();
}
