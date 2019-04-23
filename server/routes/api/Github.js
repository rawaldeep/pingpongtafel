const request = require('superagent');
module.exports = (app) =>{
    app.get('/auth/github/callback', (req, res, next)=>{
        const { query } = req;
        const { code } = query;
        if(!code){
            return res.send({
                success: false,
                message: 'Error: no code'
            });
        }
        //POST
        // console.log('code', code);
        request
        .post('https://github.com/login/oauth/access_token')
        .send({
            client_id: '68b7722dbfbe7fea24cb', 
            client_secret: '23b06dc0c0de43c1a2914d63f2235f0b57e4bd74',
            code: code
        })
        .set('Accept', 'application/json')
        .then((result)=>{
            const data = result.body;
            res.send(data);
           
        });

        app.get('/user/', (req, res, next)=>{
            const accessToken = 
            request
            .get('https://api.github.com/user')
            .set('Authorization: token' + accessToken)
        })

    });
};