const http = require('http');
const config = require('./config')();
const port = config.PORT || 3310;
const requestHandler = require('./server')();

const server = http.createServer(requestHandler);

server.listen(port, () => console.log(`Server is listening on ${port}`));