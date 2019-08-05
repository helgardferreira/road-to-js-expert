/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  return Object.assign(Object.create(null), {
    name,
    age,
  });
}

const vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

const personStore = {
  greet() {
    console.log('hello');
  },
};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  return Object.assign(Object.create(personStore), { name, age });
}

const sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

personStore.introduce = function introduce() {
  console.log(`Hi, my name is ${this.name}`);
};

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
  this.greet = () => {
    console.log('hello');
  };
}

// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor();
simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
  const newPerson = new PersonConstructor();
  newPerson.name = name;
  newPerson.age = age;

  return newPerson;
}

const mike = personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
PersonConstructor.prototype.introduce = function introduce() {
  console.log(`Hi, my name is ${this.name}`);
};

mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('hello');
  }
}

// /********* Uncomment this line to test your work! *********/
const george = new PersonClass();
george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

class DeveloperClass extends PersonClass {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  introduce() {
    console.log(
      `Hello World, my name is ${this.name} and I'm ${this.age} years old.`,
    );
  }
}

// /********* Uncomment these lines to test your work! *********/
const thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
  sayType() {
    console.log(`I am a ${this.type}`);
  },
  sayName() {
    console.log(`My name is ${this.name} and my score is ${this.score}`);
  },
};

function userFactory(name, score) {
  return Object.assign(Object.create(userFunctionStore), {
    type: 'User',
    name,
    score,
  });
}

const adminFunctionStore = Object.assign(Object.create(userFunctionStore), {
  sharePublicMessage() {
    console.log('Welcome users!');
  },
});

function adminFactory(name, score) {
  return Object.assign(
    Object.create(adminFunctionStore),
    userFactory(name, score),
    { type: 'Admin' },
  );
}

const adminFromFactory = adminFactory('Eva', 5);

console.log(adminFromFactory);
console.log(Object.getPrototypeOf(adminFromFactory));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(adminFromFactory)));

// /********* Uncomment these lines to test your work! *********/
console.log('---SUBCLASSING---');
const adminEva = adminFactory('Eva', 5);

adminEva.sayType(); // -> Logs "I am a Admin"
adminEva.sharePublicMessage(); // -> Logs "Welcome users!"
adminEva.sayName(); // -> Logs "My name is Eva and score is 5"

const adminBob = adminFactory('Bob', 2);

adminBob.sayType(); // ->  Logs "I am a Admin"
adminBob.sharePublicMessage(); // -> Logs "Welcome users!"
adminBob.sayName(); // -> Logs "My name is Bob and score is 2"

const userJen = userFactory('Jen', 3);

userJen.sayType(); // -> Logs "I am a User"
console.log(userJen.sharePublicMessage === undefined); // -> true
userJen.sayName(); // -> Logs "My name is Jen and score is 3"
