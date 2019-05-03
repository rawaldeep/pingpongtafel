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


  app.put('/api/usersupdate/:id', function(req, res){
    console.log(req.params.id);
    console.log(req.body);
    User.findByIdAndUpdate( req.params.id ,{
      Name : req.body.user,
      Team : req.body.team
    },function(err){
      if(err){
        res.send(err)
      }else{
        res.send({data: 'updated'})
      }
    })

  });



}