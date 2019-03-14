// Challenge 1
function addTwo(num) {
  return num + 2;
}

// Challenge 2
function addS(word) {
  return `${word}s`;
}

// Challenge 3
function map(array, callback) {
  const tempArray = [];
  for (let i = 0; i < array.length; i += 1) {
    tempArray.push(callback(array[i], i, array));
  }
  return tempArray;
}

// Challenge 4
function forEach(array, callback) {
  let index = 0;
  for (const val of array) {
    callback(val, index, array);
    index += 1;
  }
}

//--------------------------------------------------
// Extension
//--------------------------------------------------

// Extension 1

function mapWith(array, callback) {
  const tempArray = [];
  forEach(array, (val, index, list) => {
    tempArray.push(callback(val, index, list));
  });
  return tempArray;
}

// Extension 2
function reduce(array, callback, initialValue) {
  const copyArray = initialValue === undefined ? array.slice(1) : [...array];
  initialValue = initialValue === undefined ? array[0] : initialValue;

  forEach(copyArray, (val, index, list) => {
    initialValue = callback(initialValue, val, index, list);
  });
  return initialValue;
}

// Extension 3
function intersection(...arrays) {
  const result = arrays.reduce((accumulator, current) => {
    const tempSet = new Set(current);

    accumulator.forEach((val, index) => {
      if (!tempSet.has(val)) {
        accumulator.splice(index, 1);
      }
    });

    if (accumulator.length === 0) return [...tempSet];
    return accumulator;
  }, []);

  return result;
}

const obj = { a: 1, b: 2, c: 3 };

function helloWorld() {
  console.log('Hello World');
}

const array1 = ['abc', helloWorld, obj, 20];
const array2 = [obj, helloWorld, 1, 'abc', 20];
const array3 = [1, helloWorld, obj, 'abc', 20];

console.log(intersection(array1, array2, array3));
intersection(array1, array2, array3)[1]();
console.log(
  intersection(
    [100, 10, 10, 10, 10, 15, 5, 20],
    [15, 100, 88, 10, 5, 7],
    [100, 10, 15, 5, 20]
  )
);

module.exports = Object.freeze({
  addTwo,
  addS,
  map,
  forEach,
  mapWith,
  reduce,
  intersection,
});
