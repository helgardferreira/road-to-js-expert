import myNew from './myNew';

function PersonClass(...args) {
  function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = () => {
      console.log('hello');
    };
  }

  function introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }

  Object.assign(PersonConstructor.prototype, {
    introduce,
  });
  return myNew(PersonConstructor, ...args);
}

// class PersonClass {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = () => {
//       console.log('hello');
//     };
//   }

//   introduce() {
//     console.log(`Hi, my name is ${this.name}`);
//   }
// }

export default PersonClass;
