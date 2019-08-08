const userFunctions = {
  sayName() {
    console.log(`I'm ${this.name}`);
  },
  increment() {
    this.score += 1;
  },
};

function userCreator(name, score) {
  return Object.assign(Object.create(userFunctions), {
    name,
    score,
  });
}

const userOne = userCreator('Dr. Phil', 68);
userOne.sayName();

/* ---------------------------SUBCLASSING--------------------------- */

const paidUserFunctions = Object.assign(Object.create(userFunctions), {
  increaseBalance() {
    this.accountBalance += 1;
  },
});

function paidUserCreator(name, score, accountBalance) {
  return Object.assign(
    Object.create(paidUserFunctions),
    userCreator(name, score),
    {
      accountBalance,
    },
  );
}

const paidUserOne = paidUserCreator('Oprah Winfrey', 419, 999);

paidUserOne.sayName();
console.log(paidUserOne);
paidUserOne.increaseBalance();
paidUserOne.increment();
console.log(paidUserOne);
console.log(userOne.increaseBalance === undefined);
