// const passport = require('passport');
// const passportSetup = require('../../../config/passport');
var GITHUB_CLIENT_ID = '68b7722dbfbe7fea24cb';
var GITHUB_CLIENT_SECRET = '23b06dc0c0de43c1a2914d63f2235f0b57e4bd74';
var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;




module.exports = (app) =>{
    passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
      passport.deserializeUser(function(obj, done) {
        done(null, obj);
      });
      
      passport.use(new GitHubStrategy({
          clientID: GITHUB_CLIENT_ID,
          clientSecret: GITHUB_CLIENT_SECRET,
          callbackURL: "http://localhost:3000/auth/github/callback"
        },
        function(accessToken, refreshToken, profile, done) {
          console.log(profile);
          return done(null, profile);
        }
      ));

      app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }))


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
    // app.get('/auth/github/callback', 
    // (req, res, next)=>{
    //     const { query } = req;
    //     const { code } = query;
    //     if(!code){
    //         return res.send({
    //             success: false,
    //             message: 'Error: no code'
    //         });
    //     }
    //     //res.redirect('/helloworld');
    //   }
    //   );
    //     //POST
    //     // console.log('code', code);
    //     request
    //     .post('https://github.com/login/oauth/access_token')
    //     .send({
    //         client_id: '68b7722dbfbe7fea24cb', 
    //         client_secret: '23b06dc0c0de43c1a2914d63f2235f0b57e4bd74',
    //         code: code
    //     })
    //     .set('Accept', 'application/json')
    //     .then((result)=>{
    //         const data = result.body;
    //         res.send(data);
           
    //     });

    //     app.get('/user/', (req, res, next)=>{
    //         const accessToken = 
    //         request
    //         .get('https://api.github.com/user')
    //         .set('Authorization: token' + accessToken)
    //     })

    // });
};