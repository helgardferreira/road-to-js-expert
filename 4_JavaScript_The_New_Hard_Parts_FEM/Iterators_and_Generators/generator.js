function* createFlow() {
  const num = 10;
  const newNum = yield num;
  yield 5 + newNum;
  yield 6;
}

const iterator = createFlow();
const elOne = iterator.next();
const elTwo = iterator.next(2);
const elThree = iterator.next();

console.log(elOne);
console.log(elTwo);
console.log(elThree);
console.log(iterator.next());
