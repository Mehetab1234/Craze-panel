const express = require('express');
const router = express.Router();

let servers = [];

// Create a new server
router.post('/create', (req, res) => {
    const { name, ram, disk, type } = req.body;
    const server = { id: servers.length + 1, name, ram, disk, type };
    servers.push(server);
    res.status(201).json({ message: 'Server created', server });
});

// List all servers
router.get('/', (req, res) => {
    res.json(servers);
});

// Install a plugin (placeholder)
router.post('/plugin', (req, res) => {
    res.json({ message: 'Plugin installed successfully' });
});

module.exports = router;
