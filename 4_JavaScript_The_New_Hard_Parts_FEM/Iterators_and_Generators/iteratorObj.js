function createFlow(array) {
  let i = 0;

  return {
    next() {
      const element = array[i];
      i += 1;
      return element;
    },
  };
}

const returnNextElement = createFlow([4, 5, 6]);
console.log(returnNextElement.next());
console.log(returnNextElement.next());
console.log(returnNextElement.next());
console.log(returnNextElement.next());
