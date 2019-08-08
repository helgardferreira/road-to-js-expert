class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  sayName() {
    console.log(`I am ${this.name}`);
  }

  increment() {
    this.score += 1;
  }
}

const userOne = new UserCreator('Suzette', 9);

userOne.sayName();

/* ---------------------------SUBCLASSING--------------------------- */

class PaidUserCreator extends UserCreator {
  constructor(name, score, accountBalance) {
    super(name, score);
    this.accountBalance = accountBalance;
  }

  incrementBalance() {
    this.accountBalance += 1;
  }
}

const paidUserOne = new PaidUserCreator('Helgard', 0, 6);

console.log(paidUserOne);
paidUserOne.increment();
paidUserOne.incrementBalance();
paidUserOne.sayName();
console.log(paidUserOne);
console.log(Object.getPrototypeOf(paidUserOne));
