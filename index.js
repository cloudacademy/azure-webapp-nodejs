const express = require('express');

const app = new express()
app.use(express.static('public'))
app.use('/images', express.static(__dirname + "/public/images"))


const port = process.env.PORT || 1337;
var server = app.listen(port, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});