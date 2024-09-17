const express = require('express');
const cors = require('cors');
const app = express();
const airportRoutes = require('./routes/airport');
const airports = require('./airports')
const port = process.env.PORT || 3000;

var corsOptions = {
    origin: ["https://tasahel.com.eg", "http://127.0.0.1:5500"],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'If-Match', 'If-None-Match'] // Add other precondition headers if needed
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