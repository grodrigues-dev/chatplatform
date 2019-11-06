const {validationResult, check} = require("express-validator")

module.exports.chat = (app,req,res) => {

    let erros = validationResult(req); 
    
    let msg = erros.errors.map(msg => msg =msg.msg)
    

    if(!erros.isEmpty()){
        return res.render("index", {erros: msg})
    }

    res.render('chat');
}