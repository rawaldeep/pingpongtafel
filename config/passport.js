var GITHUB_CLIENT_ID = '68b7722dbfbe7fea24cb';
var GITHUB_CLIENT_SECRET = '23b06dc0c0de43c1a2914d63f2235f0b57e4bd74';
var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;


passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  (accessToken, refreshToken, profile, done) =>{
    User.findOrCreate({ githubId: profile.id }, (err, user) =>{
      return done(err, user);
    });
  }
));