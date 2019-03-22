// play this: https://www.youtube.com/watch?v=d-diB65scQU
require('dotenv').config();
const server = require('./server');

port = process.env.PORT || 4000;

// code away!
server.listen(port, () => {
	console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
