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
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from Node.js Server!</h1></body>');
        res.write('<body><form action="/create-user" method="POST"><input type="user" name="msg"><button type="submit">Enviar</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h3>List of dummy users</h3></body>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User random</li>');
        res.write('</ul>');
        res.write('</html>');
        return res.end();
    }

    if(url ==='/create-user' && method === 'POST'){
        const body = [];
        //va leyendo los eventos del flujo de datos del request
        req.on('data', (chunk) => {
            //console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const messInput = parsedBody.split('=')[1];
            const cadName = messInput.split('+');
            let userName = '';
            for(let i in cadName) userName =  userName + cadName[i] + ' ';
            console.log('username: ' + userName);
            res.statusCode = 302; //esto redirecciona de acuerdo a la cabecera
            res.setHeader('Location','/');
            return res.end();
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>You do not have access to this page</h1></body>');
    res.write('</html>');
    res.end();
};

//variants module exports
module.exports = {
    handler : requestHandler
}