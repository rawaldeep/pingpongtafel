var GITHUB_CLIENT_ID = '68b7722dbfbe7fea24cb';
var GITHUB_CLIENT_SECRET = '23b06dc0c0de43c1a2914d63f2235f0b57e4bd74';
var passport = require('passport');
var config = require('./config');
var GitHubStrategy = require('passport-github2').Strategy;
const User = require('../server/models/User');




passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  const userData = {
    GITHUB_ID : profile.id,
    Name : profile.displayName,
    profile_pic: profile._json.avatar_url
  }

  User.findOne({Github_id: userData.GITHUB_ID})
  .then(data =>{
    if(!data){
      const newItem = new User({
        Github_id: userData.GITHUB_ID,
        Name: userData.Name,
        Profile_pic: userData.profile_pic
        });
        newItem.save().then(
          data => {console.log(data);
          return done(null, data);}
        );
        
    }else{
      console.log("user exists");
      return done(null, data);
    }
    
  })
  
  
}
));