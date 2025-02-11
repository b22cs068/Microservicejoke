const express = require('express');
const cors = require('cors');
const motivationalQuotes = require('motivational-quotes');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
    next();
});

app.get('/api/quote', (req, res) => {
    const quote = motivationalQuotes.getQuote();
    console.log("Sending quote:", quote);
    res.json({ "quote": quote });
});

app.listen(port, () => {
    console.log(`Microservice running on port ${port}`);
});
