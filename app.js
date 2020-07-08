// node application usa un enfoque impulsado por eventos para todo tipo de cosas
//se utiliza el concepto de bucle de eventos o event loop, en multiples request es muy rapido en el manejo
// de solicitudes y en realidad de manera background realiza algunos subprocesos multiples al aprovechar el sistema operativo
const express = require('express');
const app = express();

app.use('/',(req ,res ,next) => {
    console.log("you are in the root page");
    next();
});

app.use('/users',(req ,res ,next) => {
    console.log("you are in the section of users");
    res.send('<h1>Hello this section is to users</h1>');
});

app.use('/',(req ,res ,next) => {
    res.send('<h1>Hi this is the root page</h1>');
});

// express have a embebed http to listen port
app.listen(3000);
//to install new package you should use 
// npm install <namePackage> --save      ... for production and develop
// npm install <namePackage> --save--dev ... only development environment
// npm install <namePackage> -g          ... global enviroment