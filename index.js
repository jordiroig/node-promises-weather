require('promise-first');

const doIt = require('./dades');
const drawIt = require('./pintar.js');

if(process.argv.length < 3) {
  console.log('You must provide a city');
  process.exit();
}

let cities = process.argv.slice(2);

console.log('The weather from ' + cities.join(', ') + ' (๑˃̵ᴗ˂̵)و');

const sortByTemp = function(city1, city2) {
    if(city1.temp < city2.temp) {
        return -1;
    }
    if(city1.temp > city2.temp) {
        return 1;
    }
    return 0;
};

let promises = [];

for(let key in cities) {
    promises.push(doIt(cities[key]));
}

Promise.first(promises).then(
    function(weathers){
        console.log(drawIt(weathers.sort(sortByTemp)));
    },
    function(error){
        console.log(error);
    }
);
