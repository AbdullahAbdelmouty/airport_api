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


app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, If-Match, If-None-Match');
    res.sendStatus(204);  // Respond with 'No Content'
});


// Apply CORS middleware
app.use(cors(corsOptions));

app.get("/api/airports",(req,res)=>{
    res.json(airports);
});

app.listen(port,()=>{
    console.log("is run");
})