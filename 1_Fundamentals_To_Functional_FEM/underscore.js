const _ = {};

_.each = (list, cb) => {
    // check to see if isArray
    if (Array.isArray(list)) {
        // loop through the list
        for (const [index, val] of list.entries()) {
            // call the callback with a list item
            cb(val, index, list);
        }
    }
    // loop through the list
    else if (typeof list === 'object') {
        for (const key in list) {
            // call the callback with a list item
            cb(list[key], key, list);
        }
    }
};

// TODO maybe add object support
_.map = (list, cb) => {
    // create an empty array to store
    const tempArr = [];
    // check if isArray
    if (Array.isArray(list)) {
        // loop
        _.each(list, (val, index, arr) => {
            tempArr.push(cb(val, index, arr));
        });
    } else {
        throw new Error('List is not an array!');
    }
    // return array
    return tempArr;
};

// TODO maybe add object support
_.filter = (list, cb) => {
    // create tempArray
    const tempArray = [];
    // check to see if isArray
    if (Array.isArray(list)) {
        // iterate through array
        _.each(list, (val, index, arr) => {
            // return positive matches for callback
            if (cb(val, index, arr) === true) {
                tempArray.push(val);
            }
        });
    } else {
        throw new Error('List is not an array!');
    }

    return tempArray;
};

// VERY SIMPLE Array.from()
_.from = arr => Array.prototype.slice.call(arr);
// console.log(_.from([1, 2, 3, 4]));

_.reduce = (list, cb, initial) => {
    // check for initial
    let accumulator;
    if (initial === undefined) {
        if (Array.isArray(list)) accumulator = list[0];
        else
            throw new Error(
                'Initial value must be defined when reduce is used on an object'
            );
    } else accumulator = initial;

    // iterate through array
    _.each(list, (val, index, list) => {
        // apply callback && reduce array
        accumulator = cb(accumulator, val, index, list);
    });

    return accumulator;
};

console.log('_.each() example (array):');
_.each(['d', 'e', 'f'], (val, index, arr) => {
    console.log(val, index, arr);
});

console.log('_.each() example (object):');
_.each({ a: 1, b: 2, c: 3 }, (val, key, obj) => {
    console.log(val, key, obj);
});

console.log(
    '_.map() example:',
    _.map([1, 2, 3, 4, 5], (val, index, list) => {
        return val + 1;
    })
);

console.log(
    '_.filter() example:',
    _.filter([1, 2, 3, 4, 5, 6], (val, index, list) => {
        return val % 2 !== 0;
    })
);

console.log(
    '_.reduce() example (simple):',
    _.reduce(
        [1, 2, 3, 4, 5],
        (accumulator, current) => accumulator + current,
        0
    )
);

console.log(
    '_.reduce() example (complex):',
    _.reduce(
        { a: 1, b: 2, c: 1 },
        (result, value, key) => {
            (result[value] || (result[value] = [])).push(key);
            return result;
        },
        {}
    )
);
