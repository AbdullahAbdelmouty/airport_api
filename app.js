const express = require('express');
const cors = require('cors');
const app = express();
const airportRoutes = require('./routes/airport');
const airports = require('./airports')
const port = process.env.PORT || 3000;

var corsOptions = {
    origin: 'https://tasahel.com.eg',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions));

app.get("/api/airports",(req,res)=>{
    res.json(airports)
});

app.listen(port,()=>{
    console.log("is run");
})