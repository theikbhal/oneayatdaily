const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

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

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 