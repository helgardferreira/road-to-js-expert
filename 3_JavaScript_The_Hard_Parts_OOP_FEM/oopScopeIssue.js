function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

// This is where the issue occurs
// Due to how functions have their own 'this'
// (depending on where they are invoked)
UserCreator.prototype.increment = function increment() {
  function addOne() {
    console.log(this);
    this.score += 1;
  }
  // When addOne is invoked 'this' will set to the global object
  // Thus increment's logic will fail
  addOne();
};

UserCreator.prototype.login = function login() {
  console.log('Login');
};

const userOne = new UserCreator('Adam', 7);
console.log(userOne.score); // userOne.score -> 7
userOne.increment();
console.log(userOne.score); // userOne.score -> 7

/* ==========================SOLUTION========================== */
// SOLUTION 1 - Use an arrow function
UserCreator.prototype.increment = function increment() {
  // An arrow function does not have its own this.
  // The this value of the enclosing lexical scope is used;
  // arrow functions follow the normal variable lookup rules.
  // So while searching for this which is not present in current scope,
  // an arrow function ends up finding the this from its enclosing scope.

  // Source:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this
  const addOne = () => {
    console.log(this);
    this.score += 1;
  };
  // When addOne is invoked -
  // its 'this' will always refer to the value of 'this' in its lexical scope

  // Thus increment's logic will succeed
  addOne();
};

const userTwo = new UserCreator('Eve', 7);
console.log(userTwo.score); // userTwo.score -> 7
userTwo.increment();
console.log(userTwo.score); // userTwo.score -> 8

// SOLUTION 2 - Using bind / call / apply
UserCreator.prototype.increment = function increment() {
  function addOne() {
    console.log(this);
    this.score += 1;
  }
  // By using bind / call / apply,
  // 'this' is being set to what 'this' is when increment is invoked.
  // Which will be the objects created by UserCreator

  // addOne.bind(this)();
  // OR
  // addOne.call(this);
  // OR
  addOne.apply(this);
};

const userThree = new UserCreator('Jacob', 7);
console.log(userThree.score); // userThree.score -> 7
userThree.increment();
console.log(userThree.score); // userThree.score -> 8

// SOLUTION 3 - Using this / that logic
UserCreator.prototype.increment = function increment() {
  // That will equal what 'this' is when increment is invoked.
  // Thus when addOne is invoked it will use the correct 'this / that'
  const that = this;
  function addOne() {
    console.log(that);
    that.score += 1;
  }

  addOne();
};

const userFour = new UserCreator('David', 7);
console.log(userFour.score); // userFour.score -> 7
userFour.increment();
console.log(userFour.score); // userFour.score -> 8
