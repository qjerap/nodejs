const http = require('http');

const main = require('./routes/main')

const server = http.createServer(main);



server.listen(3000);