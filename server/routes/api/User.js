const mongoose = require('mongoose');
const User = require('../../models/User');
var cookieParser = require('cookie-parser')

module.exports = (app) =>{
   
	app.get('/api/users/:id', function(req, res){
    User.findOne({Github_id: req.params.id})
  .then(data =>{
    if(!data){
      console.log("no-data");
    }else{
      // console.log(res.cookie.session);
      // req.cookies ?  res.json(data): res.redirect('/');
      res.json(data);
    }
    
  })

  });
}