const {check} = require('express-validator'); 

module.exports = app => {
    app.post('/chat', [
        check('nickname').not().isEmpty().withMessage('O apelido não pode estar em branco'),
        check('nickname').isLength({max: 10}).withMessage('O apelido não pode conter mais do que 10 caracteres')

    ], 
        (req,res) => {
        app.app.controllers.chat.chat(app, req,res); 
    }); 

    app.get('/chat', (req,res) => {
        app.app.controllers.chat.chat(app, req,res); 
    })
}