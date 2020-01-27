
const express = require("express");
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const router = jsonServer.router('./database.json')
const path = require('path');

require('dotenv').config()

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', router)

const PORT = process.env.PORT || 8080; // Step 1
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build' ));
  console.log('production')
  app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
  });
}

app.listen(PORT, () => {
  console.log('Server running...')
})