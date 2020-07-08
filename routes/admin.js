const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',(req ,res , next) => {
    console.log('This register a product!!');
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="product"><button type="submit">Add product</button></form>');
    //res.sendFile(path.join(__dirname, '../', 'views','add-product.html'));
    res.sendFile(path.join(rootDir, 'views','add-product.html'));
});

// /admin/product => POST
//limitamos el middleware para product en solo dar la opcion a request del tipo POST
//app.use('/product', (req ,res , next) => {
router.post('/product', (req ,res , next) => {
    //console.log('req body: ' +  req.body);
    console.log(req.body);
    let newProduct = req.body.product;
    res.send(`<h3>You have register a new product!! ${newProduct} </h3>`);
    //res.redirect('/');
});

module.exports = router;