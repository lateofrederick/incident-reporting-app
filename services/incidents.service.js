const { init } = require('../config/db');

const db = init();

db.sequelize.sync({ force:true }).then(() => {
    console.log("It is connected");
});


// this service function retrieves all incidents from
// the database
async function getIncidents() {
 try {
     const incidents = db.incidents.findAll();
     return { message: "ok", data: incidents };
 } catch (error) {
     return { message: "Something went wrong. Please try again", error}
 } 
}


module.exports = {
    getIncidents
}
