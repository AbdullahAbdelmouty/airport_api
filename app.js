const express = require('express');
const cors = require('cors');
const app = express();
const airportRoutes = require('./routes/airport');
const airports = require('./airports')
const port = process.env.PORT || 3000;

var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": true,
    "optionsSuccessStatus": 204
  };

app.use(cors(corsOptions));

// Handle preflight requests (OPTIONS)
app.options('*', cors(corsOptions));  // This will handle all OPTIONS requests

app.get("/api/airports",(req,res)=>{
    res.json(airports);
});

app.listen(port,()=>{
    console.log("is run");
})