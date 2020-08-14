const server = require('http').createServer();;
const Peers = require('peers-server').default;

const port = 3000;
server.listen(port, () => console.log("server started at:", port));

const peers = new Peers(server);
peers.setLogLevel('info');
peers.start();