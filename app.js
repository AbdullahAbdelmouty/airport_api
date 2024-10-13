const express = require('express');
const cors = require('cors');
const app = express();
const airportRoutes = require('./routes/airport');
const airports = require('./airports');
const countries = require('./countries/_combined/world.json');
const port = process.env.PORT || 3000;

// var corsOptions = {
//     origin: ["https://tasahel.com.eg", "http://127.0.0.1:5500"],
//     methods: ['GET', 'POST', 'OPTIONS'],
//     credentials: true,
//     allowedHeaders: ['Content-Type', 'Authorization', 'If-Match', 'If-None-Match'] // Add other precondition headers if needed
// };

var corsOptions = {
    origin: ["https://tasahel.com.eg", "http://127.0.0.1:5500"],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']  // No need for If-Match/If-None-Match
};




// Apply CORS middleware
app.use(cors(corsOptions));
// app.options('*', (req, res) => {
//     console.log('OPTIONS request headers:', req.headers);
//     res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, If-Match, If-None-Match');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.sendStatus(204);  // Return OK for preflight request
// });

app.options('*', (req, res) => {
    console.log('OPTIONS request headers:', req.headers);
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');  // Remove If-Match/If-None-Match
    res.header('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(204);  // Return OK for preflight request
});


app.get("/api/airports",(req,res)=>{    
    res.json(airports);
});

app.get("/api/countries",(req,res)=>{
    res.json(countries)
})

app.listen(port,()=>{
    console.log("is run");
})