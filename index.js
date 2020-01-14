const server = require('./api/server');


server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});


// create a server.js file somwhere
// move everything but the server.listen() out of index.js
// require (import) server from index.js
// module.exports the server from server.js
// update path to hubs-modal in server.js file