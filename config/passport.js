var GITHUB_CLIENT_ID = '68b7722dbfbe7fea24cb';
var GITHUB_CLIENT_SECRET = '23b06dc0c0de43c1a2914d63f2235f0b57e4bd74';
var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
const user = require('../server/models/User')


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
  User.findOrCreate( userData, function (err, user) {
    console.log(userData);
    return done(err, user);
  });

  // console.log(userData);
  // return done(null, profile);
}
));