
const express = require('express');
const app = express();
const cors = require('cors')
const app_routes = require('./routes/')
const connectDB = require('.config/database')
require('dotenv').config();
const PORT = process.env.PORT;


app.use(cors())
app.use(express.json());

app.use('/api/v1' , app_routes);

app.listen(PORT , () => {
    console.log(`App is running on PORT ${PORT}`)
})

connectDB();