// this will only be needed if the navbar component gets finished with enough time to spare
var mongoose = require('mongoose');
const config = require('../../env/config.js').db.mongoDB;

mongoose.connect(`mongodb://${config.host}:${config.port}/${config.name}`, { useNewUrlParser: true });
var db = mongoose.connection;

db.once('open', () => {
    console.log('You made a mongoDB connection')
}).on('error', (error) => {
    console.log(error)
})

var ZagatSchema = new mongoose.Schema({
    name: String,
    city: String,
    state: String
})

const Restaurant = mongoose.model('Restaurant',ZagatSchema);

const findRestaurantData = (restaurantName,cb) => {
    console.log(restaurantName);
    Restaurant.find({name: restaurantName}, (err,document) => {
      console.log(document)
      if (err) {return cb(err, 'error finding restaurant to display')}
      return document;
    })
      .then((restaurantResult) => {
        return cb(restaurantResult)
      });
  
  };

    const addRestaurant = (restaurantData,cb) => {
        console.log(restaurantData);
        Restaurant.create({name: restaurantData.name, city: restaurantData.city, state: restaurantData.state}, (err) => {
        if (err) {return cb(err, 'error finding restaurant to display')}
        return cb('Restaurant saved successfully!')
        })
    };
 const editRestaurant = (restaurantData,cb) => {
      Restaurant.updateOne({ _id: restaurantData._id }, {name: restaurantData.name, city: restaurantData.city, state: restaurantData.state}, function(err, res) {
  return cb(`${restaurantData.name} successfully updated!`)
});
    };

     const deleteRestaurant = (id,cb) => {
      Restaurant.deleteOne({ _id: id }, function(err, res) {
  return cb(`successfully deleted!`)
});
    };

module.exports = {db, ZagatSchema, findRestaurantData, addRestaurant, editRestaurant, deleteRestaurant};