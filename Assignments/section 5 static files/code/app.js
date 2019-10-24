const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const rootDir = require('./util/path');

const usersRoute = require('./users');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, 'public')));

app.use(usersRoute);

app.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3300, () => {
  console.log('Server started at port 3300');
});
