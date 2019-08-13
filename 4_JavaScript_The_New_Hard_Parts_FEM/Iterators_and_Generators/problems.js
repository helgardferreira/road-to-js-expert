// CHALLENGE 1

function sumFunc(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  let counter = 0;
  return () => {
    const element = arr[counter];
    counter += 1;
    return element;
  };
}

// Uncomment the lines below to test your work
const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);
console.log(myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'

// CHALLENGE 2

function nextIterator(arr) {
  let counter = 0;
  return Object.freeze({
    next() {
      const element = arr[counter];
      counter += 1;
      return element;
    },
  });
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3

// CHALLENGE 3

function sumArray(arr) {
  let accumulator = 0;
  const { next } = nextIterator(arr);
  let nextVal = next();
  while (nextVal) {
    accumulator += nextVal;
    nextVal = next();
  }
  return accumulator;
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10

// CHALLENGE 4

function setIterator(set) {
  const iterator = set.values();
  return Object.freeze({
    next() {
      return iterator.next().value;
    },
  });
}

// Uncomment the lines below to test your work
const mySet = new Set('hey');
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'

// CHALLENGE 5

/* function indexIterator(arr) {
  const iterator = arr.entries();
  return Object.freeze({
    next() {
      return iterator.next().value;
    },
  });
} */

function indexIterator(arr) {
  let i = 0;

  return {
    next() {
      const index = i;
      const element = arr[index];
      i += 1;
      return [index, element];
    },
  };
}

// Uncomment the lines below to test your work
const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']
console.log(iteratorWithIndex.next()); // -> should log [3, 'd']

// CHALLENGE 6

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function iterator() {
  const strArr = this.str.split(/\s/);
  let i = 0;

  return {
    next() {
      const element = strArr[i];
      const { length } = strArr;
      i += 1;
      return {
        value: element,
        done: i === length + 1,
      };
    },
  };
};

// Uncomment the lines below to test your work
const helloWorld = new Words('Hello World');
for (const word of helloWorld) {
  console.log(word);
} // -> should log 'Hello' and 'World'

// CHALLENGE 7
// Build a function that walks through an array
// and returns the element concatenated with the string
// "was found after index x", where x is the previous index.
// Note: if it is the first element it should say that it is the first

function valueAndPrevIndex(arr) {
  let i = 0;

  return (function* x() {
    while (arr[i]) {
      const indexName = i === 0 ? 'first' : i + 1;
      const sentenceString = `${arr[i]} was found after ${
        indexName === 'first' ? 'the first index' : `index ${indexName}`
      }`;
      i += 1;

      yield sentenceString;
    }
  })();

  // Expected Solution
  /* return {
    sentence() {
      const indexName = i === 0 ? 'first' : i + 1;
      const sentenceString = `${stream.next().value} was found after ${
        indexName === 'first' ? 'the first index' : `index ${indexName}`
      }`;
      i += 1;

      return sentenceString;
    },
  }; */
}

const returnedSentence = valueAndPrevIndex([4, 5, 6]);
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());
for (const sentence of returnedSentence) {
  console.log(sentence);
}

// CHALLENGE 8
// Write a function that will console.log "hello there", or "gibberish",
// every three seconds depending on if the word passed into the function
// is 'english'.
// Do not use any type of loop constructor
// and only make the call to createConversation once.

/* function* createConversation(string) {
  const speak = yield new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  yield speak;
}

getConversation.next().value.then(result => {
  console.log(getConversation.next(result));
  console.log(getConversation.next(result));
}); */

/* function* createConversation(string) {
  yield new Promise(resolve => {
    setTimeout(() => {
      console.log(string === 'english' ? 'hello there' : 'gibberish');
      resolve();
    }, 3000);
  });
  yield* createConversation();
}

const getConversation = createConversation('english');
function converse() {
  getConversation.next().value.then(converse);
}
getConversation.next().value.then(converse); */

// CHALLENGE 9
// Use async/await to console.log a sentence comprised of a noun and verb
// in which the non async function takes in a noun, concatenates it
// with a hard coded verb and returns it to the async function
// to be console.logged after a duration of 3 seconds.
// Call the async function only once, feeding it a noun to make this happen.

function waitForVerb(noun) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${noun} jumps!`);
    }, 3000);
  });
}

async function f(noun) {
  const statement = await waitForVerb(noun);
  console.log(statement);
}

f('dog');
