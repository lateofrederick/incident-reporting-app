const axios = require('axios');
require('dotenv').config()


const URL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${process.env.API_KEY}`;

// get the current weather condition
async function getCurrentWeather() {
  try {
    const response = await axios.get(URL);
    return response.data.weather;
  } catch (error) {
      console.log(error);
      return {}
  }
}


module.exports = {
    getCurrentWeather,
}

