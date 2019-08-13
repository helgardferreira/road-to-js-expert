const fetch = require('node-fetch');

async function createFlow() {
  console.log('Me first!');
  const data = await fetch('http://api.icndb.com/jokes/random');

  console.log(await data.json());
}

createFlow();

console.log('Me second!');
