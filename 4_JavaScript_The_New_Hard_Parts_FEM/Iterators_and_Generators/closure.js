function elementFlow(array) {
  let i = 0;
  function inner() {
    const element = array[i];
    i += 1;
    return element;
  }
  return inner;
}
const arr = [1, 2, 3];
const nextElement = elementFlow(arr);

const elOne = nextElement();
const elTwo = nextElement();
const elThree = nextElement();
// arr.push(10);
const elFour = nextElement();

console.log(elOne, elTwo, elThree, elFour);
