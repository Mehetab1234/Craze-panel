const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Route imports
const serverRoutes = require('./routes/servers');
app.use('/api/servers', serverRoutes);

app.listen(port, () => {
    console.log(`Game Server Panel running at http://localhost:${port}`);
});
