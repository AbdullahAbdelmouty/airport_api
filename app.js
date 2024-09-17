const express = require('express');
const cors = require('cors');
const app = express();
const airportRoutes = require('./routes/airport');
const airports = require('./airports')
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/api/airports",(req,res)=>{
    res.json(airports)
});

app.listen(port,()=>{
    console.log("is run");
})