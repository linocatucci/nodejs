const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  const fs = require('fs');

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>This is Assignment Section 3: Home page</title></head>');
    res.write('<h1>Hello human!</h1>');
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/users') {
    let users = ['Lino', 'Suzan', 'Julia'];
    res.write('<html>');
    res.write('<head><title>This is Assignment Section 3: Users page</title></head>');
    users.forEach(user => {
      res.write(`<ul><li>${user}</li></ul>`);
    });
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log('####-LC', chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const bodyParser = Buffer.concat(body).toString();
      console.log('####-LC', bodyParser);
      console.log('####-write-body');
      // res.statusCode = 302;
      // res.setHeader('location', '/');
      // return res.end();
    });
  }
  // res.write('<html>');
  // res.write('<head><title>This is Assignment Section 3: Home page</title></head>');
  // res.write('<h1>Hello human!</h1>');
  // res.write(
  //   '<body><form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Send</button></form></body>'
  // );
  // res.write('</html>');
  // return res.end();
};

module.exports = requestHandler;
