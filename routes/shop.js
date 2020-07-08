const express = require('express');
const router = express.Router();

router.get('/',(req ,res , next) => {
    console.log('In the middleware to root!!');
    res.send('<h1>Hello from Express!!</h1>')
    //next(); //Allows the request to coninue to the next middleware in line
    //app.use abre un canal o middleware para solicitar o escuchar algun recurso
});

module.exports = router;