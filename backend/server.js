const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow frontend to talk to backend
app.use(express.json()); // Allow backend to understand JSON data

// A simple route
app.get('/', (req, res) => {
    res.json({ message: "Hello from the Backend!" });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});