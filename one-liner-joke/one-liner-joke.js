const express = require('express');
const cors = require('cors');
const oneLinerJoke = require('one-liner-joke');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
    next();
});

app.get('/api/joke', (req, res) => {
    const joke = oneLinerJoke.getRandomJoke().body;
    console.log("Sending joke:", joke);
    res.json({ "joke": joke });
});

app.listen(port, () => {
    console.log(`Microservice running on port ${port}`);
});
