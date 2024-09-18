
const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body


app.get('/', (req, res) => {
  res.send('welcome to my hotel... How can i help you?, we have list of menus')
})


// Import the router files
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`)
})