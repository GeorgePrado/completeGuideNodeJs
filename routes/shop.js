const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/',(req ,res , next) => {
    console.log('In the middleware to root!!');
    //res.send('<h1>Hello from Express!!</h1>')
    res.sendFile(path.join(__dirname, '../', 'views','shop.html'));
    //next(); //Allows the request to coninue to the next middleware in line
    //app.use abre un canal o middleware para solicitar o escuchar algun recurso
});

module.exports = router;