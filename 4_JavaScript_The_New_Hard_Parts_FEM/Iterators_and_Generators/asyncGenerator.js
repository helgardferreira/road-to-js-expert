const fetch = require('node-fetch');

function* createFlow() {
  const data = yield fetch(
    'http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe',
  );

  data.json().then(json => console.log(json));
}

const getChuck = createFlow();
const { value: futureData } = getChuck.next();

futureData.then(value => {
  getChuck.next(value);
});
