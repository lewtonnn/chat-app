const WS = require('ws');

const server = new WS.Server({ port: 4000 });

server.on('connection', conn => {
  conn.on('message', msg => {
    //close connection with the client if they send '/exit' keyword
    if (msg === '/exit') {
      conn.close();
      return;
    }

    server.clients.forEach(client => {
      if (client.readyState === WS.OPEN) {
        client.send(msg);
      }
    });
  });
  conn.send('Hello!');
});