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
  return [
    ...arrays.reduce((accumulator, current) => {
      const tempSet = new Set(current);

      accumulator.forEach(val => {
        if (!tempSet.has(val)) {
          accumulator.delete(val);
        }
      });

      if (accumulator.size === 0) return tempSet;
      return accumulator;
    }, new Set()),
  ];
}

// Extension 4
function union(...arrays) {
  return [
    ...arrays.reduce((accumulator, current) => {
      const onion = new Set(current);

      onion.forEach(val => {
        accumulator.add(val);
      });

      return accumulator;
    }, new Set()),
  ];
}

module.exports = Object.freeze({
  addTwo,
  addS,
  map,
  forEach,
  mapWith,
  reduce,
  intersection,
  union,
});
