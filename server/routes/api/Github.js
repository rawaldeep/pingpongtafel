const passportSetup = require('../../../config/passport');
var passport = require('passport');
const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';

module.exports = (app) =>{
   
	app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }),
  function(req, res){
    
  });

  app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    const { query } = req;
     const { code } = query;
        if(!code){
            return res.send({
                success: false,
                message: 'Error: no code'
            });
        }
    const gitid = req.user.Github_id
    const payload = {gitid};
    const token = jwt.sign(payload, secret);
    res.cookie('token', token, {httpOnly: false,
      secure: false })
    res.redirect('/overview');
  }
);
  
};