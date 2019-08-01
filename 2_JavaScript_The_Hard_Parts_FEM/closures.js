function createFunction() {
  return () => {};
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const function1 = createFunction();
function1();

function createFunctionPrinter(input) {
  return () => console.log(input);
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const printSample = createFunctionPrinter('sample');
printSample();
const printHello = createFunctionPrinter('hello');
printHello();

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter += 1;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();

function addByX(x) {
  return y => x + y;
}

const addByTwo = addByX(2);

// now call addByTwo with an input of 1
console.log(addByTwo(1));
// now call addByTwo with an input of 2
console.log(addByTwo(2));

//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let result;
  return (...x) => {
    if (!result) result = func(...x);
    return result;
  };
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4)); // should log 6
console.log(onceFunc(10)); // should log 6
console.log(onceFunc(9001)); // should log 6

function after(count, func) {
  let localCount = 1;
  return (...x) => {
    if (localCount >= count) func(...x);
    localCount += 1;
  };
}

const called = (...str) => {
  console.log(...str);
};
const afterCalled = after(3, called);

afterCalled('hello'); // -> nothing is printed
afterCalled('hello'); // -> nothing is printed
afterCalled('hello'); // -> 'hello' is printed

function delay(func, wait) {
  return (...x) => {
    setTimeout(func, wait, ...x);
  };
}

const myFunc = delay(called, 1000);

myFunc(
  'A',
  'Jedi',
  'uses',
  'the',
  'Force',
  'for',
  'knowledge',
  'and',
  'defense,',
  'never',
  'for',
  'attack.',
);
