const passportSetup = require('../../../config/passport');
var passport = require('passport');


module.exports = (app) =>{
   
	app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }),
  function(req, res){
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
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
    res.redirect('/overview');
  }
);
  
};