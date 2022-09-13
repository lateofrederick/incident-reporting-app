const { init } = require("../config/db");
const { getCurrentWeather } = require("./fetchWeather.service");

const db = init();

db.sequelize.sync({ force: true }).then(() => {
  console.log("It is connected");
});

// this service function retrieves all incidents from
// the database
async function getIncidents() {
  try {
    const reports = await db.reports.findAll();
    return { message: "ok", data: reports };
  } catch (error) {
    return { message: "Something went wrong. Please try again", error };
  }
}

// add a new incident
async function reportIncident({ client_id, name, incident_desc, city, country }) {
  try {
    // get weather data
    const weather_report = await getCurrentWeather();

    const report = await db.reports.create({
      client_id,
      name,
      incident_desc,
      city,
      country,
      weather_report,
    });
    return { message: "ok", data: report};
  } catch (error) {
      console.log(error);
      return  { message: "Something went wrong. Please try again later" };
  }
}

module.exports = {
  getIncidents,
  reportIncident
};
