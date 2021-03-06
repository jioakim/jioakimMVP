var first = require('./json/first-names.json');
var middle = require('./json/middle-names.json');
var place = require('./json/places.json');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;
mongoose.connect('mongodb://jjsp27:123@ds159953.mlab.com:59953/mvprtp01');

// mongoose.connection.once('open', function() {
//   console.log('database is connected');
// });

mongoose.connection.on('error', function(error) {
  console.log('database connection error: ' + error);
});


var firstnameSchema = new Schema({
   firstName: String,
   rand:Number
});

var middlenameSchema = new Schema({
   middleName: String,
   rand:Number
});

var placeSchema = new Schema({
   place: String,
   rand:Number
});

module.exports.firstnameSchema = firstnameSchema;
module.exports.middlenameSchema = middlenameSchema;
module.exports.placeSchema = placeSchema;
module.exports.mongoose = mongoose;


// ---this code run only once to pre-populate db with some data

// var FirstName = mongoose.model('FirstName', firstnameSchema);
// var MiddleName = mongoose.model('MiddleName', middlenameSchema);
// var Place = mongoose.model('Place', placeSchema);

// var firstNames200 = [];
// var middleNames200 = [];
// var places200 = [];
// var fnIntervarls = Math.floor(first.length / 200);
// var mnIntervarls = Math.floor(middle.length / 200);
// var plIntervarls = Math.floor(place.length / 200);
// var veryBigNumber = 999999999;

// for (var i = 0; i <= first.length; i = i + fnIntervarls) {
//   firstNames200.push({firstName:first[i], rand:Math.floor(Math.random() * veryBigNumber)});
// }

// for (var i = 0; i <= middle.length; i = i + mnIntervarls) {
//   middleNames200.push({middleName:middle[i], rand:Math.floor(Math.random() * veryBigNumber)});
// }

// for (var i = 0; i <= place.length; i = i + plIntervarls) {
//   places200.push({place:place[i], rand:Math.floor(Math.random() * veryBigNumber)});
// }

// firstNames200 = firstNames200.slice(0, 200);
// middleNames200 = middleNames200.slice(0, 200);
// places200 = places200.slice(0, 200);

// FirstName.collection.insertMany(firstNames200, function(err,r) {
//   console.log('TEST');
// });

// MiddleName.collection.insertMany(middleNames200, function(err,r) {
//   console.log('TEST');
// });

// Place.collection.insertMany(places200, function(err,r) {
//   console.log('TEST');
// });