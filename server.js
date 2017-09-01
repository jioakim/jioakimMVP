 var express = require('express');
 //var mongoose = require('mongoose');
 var util = require('./lib/util');
 var bodyParser = require('body-parser');

 var app = express();

 // Parse JSON
 app.use(bodyParser.json());
 // Parse forms (posts from user)
 app.use(bodyParser.urlencoded({ extended: true }));
 var router = express.Router();

// CORS headers
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});


// set up api routes
// endpoint for a single result that shows at start up
//app.get('/api/initial', util.handleGetInit);

router.route('/result').get(util.handleGetInit);
router.route('/result/:firstname').get(util.handleGetFirstName);

// posts for input, -> LATER...first name, middlename, place

//app.post('/api/userinput', util.handleUserInputPost);
router.route('/result').post(util.handleUserInputPost);
router.route('/result/:newuser').post(util.handleNewUserPost);

router.route('/result/:firstname_id').put(util.handleUserUpdate);

router.route('/result/:firstname_id').delete(util.handleDelete);

//app.delete('api/result/:firstname_id', util.handleDelete);



app.use('/api', router);
//starts the server and listens for requests
app.listen(3123, function() {
  console.log(`api running on port 3123`);
});
