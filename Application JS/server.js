const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 80;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));