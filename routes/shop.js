const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();
const adminData = require('./admin');

router.get('/',(req ,res , next) => {
    console.log('In the middleware to root!!');
    //res.send('<h1>Hello from Express!!</h1>')
    //res.sendFile(path.join(__dirname, '../', 'views','shop.html'));
    /* res.sendFile(path.join(rootDir, 'views','shop.html')); 
    se va responder mediante templates, para el caso nuestro en pug    
    */
    const products = adminData.products;
    console.log(rootDir);
    res.render('shop', {prods: products, docTitle: 'Shop Book'});
    //next(); //Allows the request to coninue to the next middleware in line
    //app.use abre un canal o middleware para solicitar o escuchar algun recurso
});

module.exports = router;