# Daily Quran Ayat Tracker

A simple web application to track daily Quran ayat readings with time tracking and notes.

## Features

- Track daily Quran ayat readings
- Record time spent on each ayat
- Add notes for each entry
- View previous entries
- Default date set to current date
- Suggested time: 60 minutes per ayat

## Setup

1. Make sure you have Node.js installed on your system
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. The date field will default to today's date
2. Enter the ayat you want to track
3. Enter the time spent in minutes
4. Add any notes if needed
5. Click "Save Entry" to store your progress
6. View your previous entries in the list below

## Data Storage

All entries are stored in `data.json` file in the root directory. 