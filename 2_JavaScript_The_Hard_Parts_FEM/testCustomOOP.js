import myNew from './myNew';
import PersonClass from './PersonClass';

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

class RealPersonClass {
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
const realPerson = new RealPersonClass('John', 43);

const simPersonConstructor = myNew(PersonConstructor, 'Vicky', 25);
const simPersonClass = PersonClass('Jim', 65);

// test myNew with constructor
console.log('---------Constructor---------');
console.log(simPersonConstructor);
console.log(simPersonConstructor.name);
console.log(simPersonConstructor.age);
console.log(simPersonConstructor.__proto__);
simPersonConstructor.introduce();

// test custom class
console.log('------------Class------------');
console.log(simPersonClass);
console.log(simPersonClass.name);
console.log(simPersonClass.age);
console.log(simPersonClass.__proto__);
simPersonClass.introduce();

// control
console.log('-----------Control-----------');
console.log(realPerson);
console.log(realPerson.name);
console.log(realPerson.age);
console.log(realPerson.__proto__);
realPerson.introduce();
