const express = require('express');
require('dotenv').config();

const db = require('./models');
const route = require('./routes');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
route(app);

db.sequelize
    .sync()
    .then(() => {
        console.log('Sync database successfully!');
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log('Fail to sync database: ' + error.message);
    });
