const fs = require('fs').promises;
const path = require('path');

const dataPath = path.resolve('src/weather-data.json');
console.log(dataPath);

const lat = 46.6495511;
const lon = 32.5377419;
const ApiKey = 111;

const fetchData = async () => {
  try {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude = { part } & appid=${ApiKey}`)
    fs.writeFile(dataPath, data)
  } catch (error) {
    console.error(error);
  }
}

// const init = setInterval(() => {
//   fetchData()
// }, 1800000);

export default fetchData;



