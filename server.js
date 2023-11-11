const express = require('express');
const app = express();
app.use(express.json());

// Emulated user authentication
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Emulated device statuses
let lights = {
    livingRoom: false,
    kitchen: true
};

let temperature = 72;

// Authentication endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Device control endpoints
app.get('/lights/:room/:status', (req, res) => {
    const { room, status } = req.params;
    lights[room] = status === 'on';
    res.json({ message: `${room} lights are now ${status}` });
});

app.post('/temperature', (req, res) => {
    const { newTemperature } = req.body;
    temperature = newTemperature;
    res.json({ message: `Temperature set to ${newTemperature}F` });
});

// Data processing endpoint
app.get('/data', (req, res) => {
    res.json({ lights, temperature });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
