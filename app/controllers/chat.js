const {validationResult, check} = require("express-validator")

module.exports.chat = (app,req,res) => {

    let data= req.body
    
    let erros = validationResult(req); 
    
    let msg = erros.errors.map(msg => msg =msg.msg)
    

    if(!erros.isEmpty()){
        return res.render("index", {erros: msg})
    }

    app.get('io').emit('msgcliente', {nickname: data.nickname, msg: 'Acabou de entrar' } )

    res.render('chat', {data: data});
}