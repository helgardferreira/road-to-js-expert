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

module.exports = Object.freeze(_);
