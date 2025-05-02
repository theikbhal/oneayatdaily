const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Read data from JSON file
function readData() {
    const data = fs.readFileSync('data.json', 'utf8');
    return JSON.parse(data);
}

// Write data to JSON file
function writeData(data) {
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}

// Read Towheed data
function readTowheedData() {
    const data = fs.readFileSync('data/towheed.json', 'utf8');
    return JSON.parse(data);
}

// Write Towheed data
function writeTowheedData(data) {
    fs.writeFileSync('data/towheed.json', JSON.stringify(data, null, 2));
}

// Get all entries
app.get('/api/entries', (req, res) => {
    const data = readData();
    res.json(data.entries);
});

// Add new entry
app.post('/api/entries', (req, res) => {
    const data = readData();
    const newEntry = {
        id: Date.now(),
        date: req.body.date,
        ayat: req.body.ayat,
        timeSpent: req.body.timeSpent,
        notes: req.body.notes
    };
    data.entries.push(newEntry);
    writeData(data);
    res.json(newEntry);
});

// Towheed API Routes
app.get('/api/towheed/progress', (req, res) => {
    const data = readTowheedData();
    res.json(data);
});

// Handle all Towheed category posts
app.post('/api/towheed/:category', (req, res) => {
    const data = readTowheedData();
    const category = req.params.category;
    const newEntry = {
        id: Date.now(),
        ...req.body
    };
    
    if (data[category]) {
        data[category].push(newEntry);
        writeTowheedData(data);
        res.json(newEntry);
    } else {
        res.status(400).json({ error: 'Invalid category' });
    }
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve Towheed's page
app.get('/towheed', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'towheed', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 