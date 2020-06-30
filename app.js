const http = require('http');
// node application usa un enfoque impulsado por eventos para todo tipo de cosas
//se utiliza el concepto de bucle de eventos o event loop, en multiples request es muy rapido en el manejo
// de solicitudes y en realidad de manera background realiza algunos subprocesos multiples al aprovechar el sistema operativo
const routes = require('./routes');

//console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);