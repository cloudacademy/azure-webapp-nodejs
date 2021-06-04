const http = require('http');
const slot = process.env.WEBSLOT || "Staging"
const resp = `Good Job! This App is deployed to the ${slot} Slot first.`
const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(resp);
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
