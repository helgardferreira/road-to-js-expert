// Custom iterators
// With ES6 classes
class IteratorClass {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator]() {
    let i = 0;
    const { data } = this;

    return {
      next: () => ({
        value: data[i++],
        done: i >= data.length + 1,
      }),
    };
  }
}

const iteratorOne = new IteratorClass([1, 2, 3, 4]);

const iterableOne = iteratorOne[Symbol.iterator]();
console.log(iterableOne.next());
console.log(iterableOne.next());
console.log(iterableOne.next());
console.log(iterableOne.next());
console.log(iterableOne.next());

for (const item of iteratorOne) {
  console.log(item);
}

// With 'new' and constructors (pre-ES6)
function IteratorConstructor(data) {
  this.data = data;
}

IteratorConstructor.prototype[Symbol.iterator] = function() {
  let i = 0;
  const { data } = this;

  return {
    next: () => ({ value: data[i++], done: i >= data.length + 1 }),
  };
};

const iteratorTwo = new IteratorConstructor([5, 6, 7, 8]);

const iterableTwo = iteratorTwo[Symbol.iterator]();
console.log(iterableTwo.next());
console.log(iterableTwo.next());
console.log(iterableTwo.next());
console.log(iterableTwo.next());
console.log(iterableTwo.next());

for (const item of iteratorTwo) {
  console.log(item);
}

// With factory function (no new keyword)
const iteratorFunctions = {
  [Symbol.iterator]() {
    let i = 0;
    const { data } = this;

    return {
      next: () => ({ value: data[i++], done: i >= data.length + 1 }),
    };
  },
};

function customIteratorCreator(data) {
  return Object.assign(Object.create(iteratorFunctions), { data });
}

const iteratorThree = customIteratorCreator([9, 10, 11, 12]);

const iterableThree = iteratorThree[Symbol.iterator]();
console.log(iterableThree.next());
console.log(iterableThree.next());
console.log(iterableThree.next());
console.log(iterableThree.next());
console.log(iterableThree.next());

for (const item of iteratorThree) {
  console.log(item);
}
