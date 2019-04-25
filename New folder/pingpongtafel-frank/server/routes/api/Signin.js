const User = require('../../models/User');

module.exports = (app) => {
app.post('/api/account/signup',(req, res, next)=>{
const { body } = req;
const { 
    FirstName,
    lastName,
    password
} = body;
let {
    email
} = body
if(!FirstName){
    return res.send({
        success: false,
        message: 'Error: First name cannot be blank'
    })
}
if(!lastName){
    return res.send({
        success: false,
        message: 'Error: last name cannot be blank'
    });
}
if(!email){
    return res.send({
        success: false,
        message: 'Error: email cannot be blank'
    });
}
if(!password){
    return res.send({
        success: false,
        message: 'Error: password cannot be blank'
});
}
    email = email.toLowerCase();

    /* steps
    1. Verify email does'nt exist
    2. save in database
    */

    User.find({
        email: email
    },(err, previousUsers)=>{
        if(err){
            res.end({
                success: false,
                message: 'Error: server Error '
            });
        } else if(previousUsers.length > 0 ){
            res.end({
                success: false,
                message: 'Error: account already exists'
            });
        }
        const newUser = new User();
        newUser.email = email;
        newUser.FirstName = FirstName;
        newUser.lastName = lastName;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user)=>{
            if(err){
                res.end({
                    success: false,
                    message: 'ERROR: server error'
                });
            }
            res.end({
                success: true,
                message: "signed up"
            });
        });
    });
});
}