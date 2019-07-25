const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// comment out the below line when setting up the proxy
// need .env for this file and express.static for the proxy
app.use(express.static(__dirname + '/../client/dist'));

// middleware as necessary

app.get('/', function (req, res, next) {
    console.log('test successful!');
    res.end();
});

app.listen(process.env.PORT || 3333, () => {
  console.log(`listening on port ${PORT}`);
});
