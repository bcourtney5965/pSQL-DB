var app = require('./server.js').app;
var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Project API listening on port: ${port}`);
})
