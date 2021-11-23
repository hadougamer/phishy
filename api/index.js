const express = require('express');
var cors = require('cors');
const bodyParser  = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {
    res.json({'message': 'wellcome to Phishy API' });
 });
 
app.listen( process.env.NODE_PORT, () => {
    console.log(`listening at http://localhost:${process.env.NODE_PORT}`);
})