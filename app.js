// node application usa un enfoque impulsado por eventos para todo tipo de cosas
//se utiliza el concepto de bucle de eventos o event loop, en multiples request es muy rapido en el manejo
// de solicitudes y en realidad de manera background realiza algunos subprocesos multiples al aprovechar el sistema operativo
const express = require('express');
const app = express();

app.use('/',(req ,res , next) => {
    console.log('This always runs!');
    next();
    //next(); //Allows the request to coninue to the next middleware in line
    //app.use abre un canal o middleware para solicitar o escuchar algun recurso
});

app.use('/add-product',(req ,res , next) => {
    console.log('In another middleware!!');
    // ... doesn't neccesary ste header for html
    res.send('<h1>The product page</h1>')
});

app.use('/',(req ,res , next) => {
    console.log('In the middleware to root!!');
    res.send('<h1>Hello from Express!!</h1>')
    //next(); //Allows the request to coninue to the next middleware in line
    //app.use abre un canal o middleware para solicitar o escuchar algun recurso
});

// express have a embebed http to listen port
app.listen(3000);
//to install new package you should use 
// npm install <namePackage> --save      ... for production and develop
// npm install <namePackage> --save--dev ... only development environment
// npm install <namePackage> -g          ... global enviroment