const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Static files
app.use(express.static('../public'));

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
 