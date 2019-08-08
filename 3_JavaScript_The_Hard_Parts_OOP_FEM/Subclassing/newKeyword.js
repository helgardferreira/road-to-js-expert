function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}
UserCreator.prototype.sayName = function sayName() {
  console.log(`I'm ${this.name}`);
};
UserCreator.prototype.increment = function increment() {
  this.score += 1;
};

const userOne = new UserCreator('Tom', 122);
const userTwo = new UserCreator('Erik', 455);

userOne.sayName();
console.log(userTwo);
userTwo.increment();
console.log(userTwo);

/* ---------------------------SUBCLASSING--------------------------- */

function PaidUserCreator(name, score, accountBalance) {
  UserCreator.call(this, name, score);
  this.accountBalance = accountBalance;
}
PaidUserCreator.prototype = Object.create(UserCreator.prototype);
PaidUserCreator.prototype.increaseBalance = function increaseBalance() {
  this.accountBalance += 1;
};

const paidUserOne = new PaidUserCreator('Dick', 998, 776);
console.log(paidUserOne);
paidUserOne.increaseBalance();
paidUserOne.increment();
console.log(paidUserOne);
