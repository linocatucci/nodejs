const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);

server.listen(4800, () => {
  console.log('####-server started on port 4800');
});
