const fs = require('fs');

const requestHandler = (req, res) => {
    //console.log(req);
    //console.log('se hizo un request.. se abrio un hilo para la ejecución');
    //console.warn(req.method, req.headers);
    //process.exit(); //sentencia que mata el hilo principal del server node.. solo se ejecuta una vez cuando se hace un request
    const url = req.url;
    const method = req.method; //obtiene el metodo por el cual fue llamado el servidor
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="msg"><button type="submit">Enviar</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url ==='/message' && method === 'POST'){
        const body = [];
        //va leyendo los eventos del flujo de datos del request
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            //esta manera es incorrecta, ya que para archivos pesados rompe el loop de eventos de node
            //fs.writeFileSync('message1.txt',message);
            //esta manera es manejable por callback ya que no bloquea el loop de eventos de node
            fs.writeFile('message1.txt',message, err => {
                res.statusCode = 302; //esto redirecciona de acuerdo a la cabecera
                res.setHeader('Location','/');
                return res.end();
            });
        });
        //fs.writeFileSync('message.txt','DUMMY');
        /*res.statusCode = 302; //esto redirecciona de acuerdo a la cabecera
        res.setHeader('Location','/algo');
        return res.end(); */
    }
    
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
};

//variants module exports
module.exports = {
    handler : requestHandler,
    someText : 'Some hard coded text'
}