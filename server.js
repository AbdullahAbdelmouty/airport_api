const express = require('express');
const app = express();
const airportRoutes = require('./routes/airport');
const port = process.env.PORT || 3000;

app.use('/api',airportRoutes)

app.listen(port,()=>{
    console.log("is run");
})