// Challenge 1

function sayHello() {
  console.log('Hello');
}

// Uncomment the line below when ready
setTimeout(() => {
  sayHello(); // should log "Hello" after 1000ms
}, 1000);

setTimeout(() => {
  console.log('Timer Trace');
}, 0);

// Challenge 2
const promise2 = new Promise((resolve, reject) => {
  const err = false;
  if (err) reject(new Error());
  resolve('Resolved!');
});

// Should print out "Resolved!"
promise2
  .then(res => {
    console.log(res);
  })
  // Demonstrate promise order at runtime
  .then(sayHello)
  .then(sayHello)
  .then(sayHello)
  .catch(err => {
    console.log(`Error: ${err.message}`);
  });

// Challenge 3

const promise3 = new Promise((resolve, reject) => {
  const err = true;
  if (err) reject(new Error('Rejected!'));
  resolve('Resolved!');
});

// Should print out "Rejected!"
promise3
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(`Error: ${err.message}`);
  });

// Challenge 4

const promise4 = new Promise((resolve, reject) => {
  const err = false;
  if (err) reject(new Error());
  resolve('Resolved!');
});

// Uncomment the lines below when ready
promise4.then(() => console.log('Promise has been resolved!'));
console.log("I'm not the promise!");

// Challenge 5
function delay() {
  return new Promise((resolve, reject) => {
    const err = false;
    if (err) reject(new Error('LOL'));
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(sayHello);

// Challenge 6
//
// ADD CODE BELOW
const secondPromise = new Promise((resolve, reject) => {
  const err = false;
  if (err) reject(new Error('LOL'));
  resolve('Second!');
});

const firstPromise = new Promise((resolve, reject) => {
  const err = false;
  if (err) reject(new Error('LOL'));
  resolve(secondPromise);
});

firstPromise.then(value => {
  console.log(value);
});

// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
];

const fakeAPICall = i => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject(new Error('Index out of range'));
    }
  });
};

/* ================= Recursive Implementations ================= */
// Looks cool, but is horribly inefficient
/* function getAllData(n, arr) {
  n = n === undefined ? 0 : n;
  arr = arr === undefined ? [] : arr;
  return fakeAPICall(n)
    .then(val => {
      arr.push(val);
      return getAllData(n + 1, arr);
    })
    .catch(() => arr);
} */

// Condensed version
/* const getAllData = (n = 0, arr = []) =>
  fakeAPICall(n)
    .then(val => arr.push(val) && getAllData(n + 1, arr))
    .catch(() => arr);

getAllData().then(val => console.log(val)); */

/* =============== Promise.all() Implementation =============== */

/* function getAllData() {
  const promiseArray = [fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)];
  return Promise.all(promiseArray).then(values => values);
} */

// Condensed(?) version
const getAllData = () =>
  Promise.all([fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)]).then(
    values => values,
  );

getAllData().then(val => console.log(val));
