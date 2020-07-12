// node application usa un enfoque impulsado por eventos para todo tipo de cosas
//se utiliza el concepto de bucle de eventos o event loop, en multiples request es muy rapido en el manejo
// de solicitudes y en realidad de manera background realiza algunos subprocesos multiples al aprovechar el sistema operativo
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes  = require('./routes/shop');

//si no parseamos el request entrante con bodyParser nos da undefined
app.use(bodyParser.urlencoded({extended : false}));
//con express.static definimos la carpeta que compartirá recursos como imagenes, css, javascript
app.use(express.static(path.join(__dirname,'public')));


app.use(shopRoutes);  
app.use('/admin',adminRoutes); 

app.use((req, res, next) => {
    //res.status(404).send('<h1>Page not found!!</h1>');
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

// express have a embebed http to listen port
app.listen(3000);
//to install new package you should use 
// npm install <namePackage> --save      ... for production and develop
// npm install <namePackage> --save--dev ... only development environment
// npm install <namePackage> -g          ... global enviroment