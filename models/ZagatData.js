// this will only be needed if the navbar component gets finished with enough time to spare
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/SDC', { useNewUrlParser: true });
var db = mongoose.connection;

var ZagatSchema = new Schema({
    name: String,
    city: String,
    state: String
})

module.exports = {db, ZagatSchema};