const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require( './database/connection');

dotEnv.config();
const app = express();

// database connectivity
dbConnection();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

app.listen(PORT, () => {
    console.log('server is listening on port:', PORT);
});

app.use( '/api/v1/product', require( './routes/productRoutes') );

app.get('/', (req, res) => {
    res.send('Hello from Node server');
});

// define error handling middleware
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {},
    })
});