const express = require('express')
require('dotenv').config()

const app = express();

const routes = require('./routes/routes')

//send post requests
app.use(express.json())

//Route middleware
app.use('', routes)

app.listen(process.env.PORT || 3001 , () => console.log('Server running on port 3001'))