const _ = {};

_.each = (list, cb) => {
  if (Array.isArray(list)) {
    // loop through the list
    for (const [index, val] of list.entries()) {
      // call the callback with a list item
      cb(val, index, list);
    }
  } else if (typeof list === 'object') {
    // loop through the list
    for (const key in list) {
      // call the callback with a list item
      if (Object.prototype.hasOwnProperty.call(list, key)) {
        cb(list[key], key, list);
      }
    }
  } else {
    throw new Error('List is not an Array or Object!');
  }
};

_.eachRight = (list, cb) => {
  if (Array.isArray(list)) {
    // loop through the list
    for (let i = list.length - 1; i >= 0; i -= 1) {
      // call the callback with a list item
      cb(list[i], i, list);
    }
  } else if (typeof list === 'object') {
    // loop through the list
    const keyArr = Object.keys(list);
    for (let keyIndex = keyArr.length - 1; keyIndex >= 0; keyIndex -= 1) {
      // call the callback with a list item
      const key = keyArr[keyIndex];
      cb(list[key], key, list);
    }
  } else {
    throw new Error('List is not an Array or Object!');
  }
};

_.map = (list, cb) => {
  // create an empty array to store
  const tempList = Array.isArray(list) ? [] : {};
  // loop
  // Map array
  if (Array.isArray(list)) {
    _.each(list, (val, index, arr) => {
      tempList.push(cb(val, index, arr));
    });
  } else if (typeof list === 'object') {
    _.each(list, (val, key, obj) => {
      tempList[key] = cb(val, key, obj);
    });
  } else {
    throw new Error('List is not an Array or Object!');
  }
  // return array
  return tempList;
};

_.filter = (list, cb) => {
  // create tempList
  const tempList = Array.isArray(list) ? [] : {};
  // iterate through list
  if (Array.isArray(list)) {
    _.each(list, (val, index, ls) => {
      // return positive matches for callback
      if (cb(val, index, ls) === true) {
        tempList.push(val);
      }
    });
  } else if (typeof list === 'object') {
    _.each(list, (val, index, ls) => {
      // return positive matches for callback
      if (cb(val, index, ls) === true) {
        tempList[index] = val;
      }
    });
  } else {
    throw new Error('List is not an Array or Object!');
  }

  return tempList;
};

// VERY SIMPLE Array.from()
_.from = arr => Array.prototype.slice.call(arr);
// console.log(_.from([1, 2, 3, 4]));

_.reduce = (list, cb, initial) => {
  if (!Array.isArray(list) && typeof list !== 'object') {
    throw new Error('List is not an Array or Object!');
  }

  const copyList =
    initial === undefined && Array.isArray(list) ? list.slice(1) : list;

  let accumulator;
  accumulator =
    initial === undefined
      ? Array.isArray(list) === true
        ? list[0]
        : {}
      : initial;

  // iterate through list
  _.each(copyList, (val, index, array) => {
    // apply callback && reduce list
    accumulator = cb(accumulator, val, index, array);
  });

  return accumulator;
};

_.reduceRight = (list, cb, initial) => {
  if (!Array.isArray(list) && typeof list !== 'object') {
    throw new Error('List is not an Array or Object!');
  }

  const copyList =
    initial === undefined && Array.isArray(list)
      ? list.slice(0, list.length - 1)
      : list;

  let accumulator;
  accumulator =
    initial === undefined
      ? Array.isArray(list) === true
        ? list[list.length - 1]
        : {}
      : initial;

  // iterate through list
  _.eachRight(copyList, (val, index, array) => {
    // apply callback && reduce list
    accumulator = cb(accumulator, val, index, array);
  });

  return accumulator;
};

const lem = [1, 2, 3, 4, 5];

console.log('_.each() example (array):');
_.each(['d', 'e', 'f'], (val, index, arr) => {
  console.log(val, index, arr);
});

console.log('_.each() example (object):');
_.each({ a: 1, b: 2, c: 3 }, (val, key, obj) => {
  console.log(val, key, obj);
});

console.log('_.eachRight() example (array):');
_.eachRight(['d', 'e', 'f'], (val, index, arr) => {
  console.log(val, index, arr);
});

console.log('_.eachRight() example (object):');
_.eachRight({ a: 1, b: 2, c: 3 }, (val, key, obj) => {
  console.log(val, key, obj);
});

console.log('_.map() example(array):', _.map([1, 2, 3, 4, 5], val => val + 1));

console.log(
  '_.map() example(object):',
  _.map({ a: 1, b: 2, c: 3, d: 4 }, (val, key) => val + key)
);

console.log(
  '_.filter() example (array):',
  _.filter([1, 2, 3, 4, 5, 6], val => val % 2 !== 0)
);

console.log(
  '_.filter() example (object):',
  _.filter({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }, val => val % 2 === 0)
);

console.log(
  '_.reduce() example (simple):',
  _.reduce(lem, (accumulator, current) => accumulator - current)
);

console.log(
  '_.reduce() example (simple with init):',
  _.reduce(lem, (accumulator, current) => accumulator - current, 0)
);

console.log(
  '_.reduce() example (complex):',
  _.reduce({ a: 1, b: 2, c: 1 }, (result, value, key) => {
    (result[value] || (result[value] = [])).push(key);
    return result;
  })
);

console.log(
  '_.reduceRight() example (simple):',
  _.reduceRight(lem, (accumulator, current) => accumulator - current)
);

console.log(
  '_.reduceRight() example (simple with init):',
  _.reduceRight(lem, (accumulator, current) => accumulator - current, 0)
);

console.log(
  '_.reduceRight() example (complex):',
  _.reduceRight({ a: 1, b: 2, c: 1 }, (result, value, key) => {
    (result[value] || (result[value] = [])).push(key);
    return result;
  })
);
