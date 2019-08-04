/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 1');
// ...your code below

setTimeout(() => {
  console.log('I am in the setTimeout callback function');
}, 0);

console.log('I am at the end of the code');

console.log('End of Challenge 1');
// */ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 2');
// ...your code below

const myInterval = setInterval(() => {
  console.log('Interval Hello!');
}, 2000);

setTimeout(() => {
  clearInterval(myInterval);
}, 10000);

// ...your code above
function clearAllIntervals() {
  for (let i = 0; i < 1000; i += 1) {
    clearInterval(i);
  }
}
console.log('End of Challenge 2');
// */ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 3');
// ...your code below

function sayHowdy() {
  console.log('Howdy!');
}

function everyXsecsForYsecs(cb, intervalTime, totalTime) {
  for (let i = 1; i <= totalTime / intervalTime; i += 1) {
    setTimeout(() => {
      cb();
    }, intervalTime * 1000 * i);
  }
}

everyXsecsForYsecs(sayHowdy, 2, 10);

console.log('End of Challenge 3');
// */ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 4');
// ...your code below

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i += 1) {
    cb(arr[i], i, arr);
  }
}

const delays = [2000, 5000, 0, 3500];

function delayLog(delayTime, index) {
  setTimeout(() => {
    console.log(`printing element ${index}`);
  }, delayTime);
}

forEach(delays, delayLog);

console.log('End of Challenge 4');
// */ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 5');
// ...your code below

function changeColor() {
  console.log('clicked #2');
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === 'rgb(221, 238, 255)'
      ? 'rgb(255, 238, 221)'
      : 'rgb(221, 238, 255)';
}

const activateBtn = document.getElementById('activate');
const colorBtn = document.getElementById('color');

activateBtn.addEventListener('click', () => {
  console.log('clicked #1');
  colorBtn.addEventListener('click', changeColor);
});

// ...your code above
document.body.style.background = '#def';
console.log('End of Challenge 3');
// */ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 6 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 6');
let dataReceived;

function ajaxSimulate(id, callback) {
  const database = ['Aaron', 'Barbara', 'Chris'];

  setTimeout(() => {
    callback(database[id]);
  }, 0);
}
// ...your code below

function storeData(input) {
  console.log(input);
  dataReceived = input;
}

ajaxSimulate(1, storeData);

console.log(dataReceived);

console.log('End of Challenge 6');
// */ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 7 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 7');
// ...your code below

function reqListener({ target: { response } }) {
  const div = document.getElementById('ch2');
  const imageUrl = JSON.parse(response).image_url;

  div.style.backgroundImage = `url(${imageUrl})`;
}

const xhr = new XMLHttpRequest();
xhr.addEventListener('load', reqListener);
xhr.open(
  'GET',
  'https://rest.bandsintown.com/artists/michael%20jackson?app_id=jshp',
);
xhr.send();

console.log('End of Challenge 7');
// */ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 8 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 8');
// ...your code below

function eventsListener({ target: { response } }) {
  const eventArray = JSON.parse(response);

  const eventList = document.createElement('ol');

  console.log(response);

  eventArray.forEach(event => {
    const eventItem = document.createElement('li');

    /* eslint-disable indent*/
    let offers = '';
    event.offers.forEach(offer => {
      offers += `
        <li><a href="${offer.url}">${offer.type}</a> - ${
        offer.status === 'available' ? '✅' : '❌'
      }</li>`;
    });

    eventItem.innerHTML = `
    <p>${event.datetime.split('T')[0].replace(/-/g, '/')} - ${
      event.datetime.split('T')[1]
    }</p>
    <p>
    Where:
      <ul>
        <li>${event.venue.name}</li>
        <li>${event.venue.country}</li>
        <li>${event.venue.region}</li>
        <li>${event.venue.city}</li>
      </ul>
    </p>
    <p>
    <p><a href="${event.url}">BandsInTown</a></p>
    Buy:
      <ul>
        ${offers}
      </ul>
    </p>`;
    /* eslint-enable */
    eventList.appendChild(eventItem);
  });

  document.getElementById('ch3').appendChild(eventList);
}

const xhrEvents = new XMLHttpRequest();
xhrEvents.addEventListener('load', eventsListener);
xhrEvents.open(
  'GET',
  'https://rest.bandsintown.com/artists/The%20Midnight/events?app_id=jshp',
);
xhrEvents.send();

console.log('End of Challenge 8');
// */// (do not alter this line)

/////////////////
//             //
// CHALLENGE 9 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 9');
// ...your code below

function USEventsListener({ target: { response } }) {
  const eventArray = JSON.parse(response).filter(
    ({ venue: { country } }) => country === 'United States',
  );

  const eventList = document.createElement('ol');

  console.log(response);

  eventArray.forEach(event => {
    const eventItem = document.createElement('li');

    /* eslint-disable indent*/
    let offers = '';
    event.offers.forEach(offer => {
      offers += `
        <li><a href="${offer.url}">${offer.type}</a> - ${
        offer.status === 'available' ? '✅' : '❌'
      }</li>`;
    });

    eventItem.innerHTML = `
    <p>${event.datetime.split('T')[0].replace(/-/g, '/')} - ${
      event.datetime.split('T')[1]
    }</p>
    <p>
    Where:
      <ul>
        <li>${event.venue.name}</li>
        <li>${event.venue.country}</li>
        <li>${event.venue.region}</li>
        <li>${event.venue.city}</li>
      </ul>
    </p>
    <p>
    <p><a href="${event.url}">BandsInTown</a></p>
    Buy:
      <ul>
        ${offers}
      </ul>
    </p>`;
    /* eslint-enable */
    eventList.appendChild(eventItem);
  });

  document.getElementById('ch4').appendChild(eventList);
}

const xhrUSEvents = new XMLHttpRequest();
xhrUSEvents.addEventListener('load', USEventsListener);
xhrUSEvents.open(
  'GET',
  'https://rest.bandsintown.com/artists/The%20Midnight/events?app_id=jshp',
);
xhrUSEvents.send();

console.log('End of Challenge 9');
// */// (do not alter this line)
