const express = require('express');
require('dotenv').config();
const CosmosClient = require("@azure/cosmos").CosmosClient;

const app = new express()
app.use(express.static('public'))
app.use('/images', express.static(__dirname + "/public/images"))

function getCosmosData() {

    console.log(process.env.constr);
    const constr = process.env.constr;
  
    const client = new CosmosClient(constr);
  
    const databaseID = client.database(process.env.database);
    const containerID = databaseID.container(process.env.container);
  
    if (constr) {
      console.log(`Querying container:\n${containerID}`);
      const querySpec = {
        query: "SELECT * FROM c",
      };
  
      const { resources: items } = containerID.items
        .query(querySpec)
        .fetchAll();
      return { CosmoData: items };
    }
}


const port = process.env.PORT || 1337;
var server = app.listen(port, function(){
    var port = server.address().port;
    var cosmosData = getCosmosData()
    console.log("Server started at http://localhost:%s", port);
});