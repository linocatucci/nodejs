// practise Express JS

const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log(' 1st middleware en next');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('2nd middleware en next');
//   next();
// });

app.use('/users', (req, res, next) => {
  console.log('####- in de /users route');
  res.send('<h1>Hello users!</h1>');
});

app.use('/', (req, res, next) => {
  console.log('####- in de / route');
  res.send('<h1>Hello from ExpressJS!</h1>');
});

const port = 3400;

app.listen(3400, () => {
  console.log(`####- NodeJS app started at ${port} `);
});
