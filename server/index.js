const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../models/mongoDB/ZagatData.js')
const config = require('../env/config.js').app;
const pgdb = require('../models/pgDB/index.js')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// comment out the below line when setting up the proxy
// need .env for this file and express.static for the proxy
app.use(express.static(__dirname + '/../client/dist'));

// middleware as necessary

app.get('/api/mongo/:name', function(req, res) {
    db.findRestaurantData(req.params.name, (dbResponse)=>{
      res.status(200).send(dbResponse)
    })
});

// app.get('/api/pg', pgdb.getRestaurants)
app.get('/api/pg/:id', pgdb.getRestaurantById)

app.post('/api/mongo/', function (req, res, next) {
  db.addRestaurant(req.body, (status => {
    res.send(status)
  }))
});

app.post('/api/pg/', pgdb.createRestaurant)

app.put('/api/mongo', function (req, res, next) {
  db.editRestaurant(req.body, (restaurantData => {
    res.send(restaurantData)
  }))
});

app.put('/api/pg/:id', pgdb.updateRestaurant)

app.delete('/api/mongo/:id', function(req, res) {
  db.deleteRestaurant(req.params.id, (dbResponse)=>{
    res.status(200).send(dbResponse)
  })
});

app.delete('/api/pg/:id', pgdb.deleteRestaurant)

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});
