const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const config = require('./config.js');
console.log(config);

const app = express();
const port = process.env.PORT || 4000;
const proxy = require('http-proxy-middleware');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  '/allReviews/item/:id',
  proxy({
    target: process.env.AARUSHI || 'http://localhost:9000',
    changeOrigin: true
  })
);

app.use(
  '/allItems/item/:id',
  proxy({
    target: process.env.AARUSHI || 'http://localhost:9000',
    changeOrigin: true
  })
);

app.use(
  '/test',
  proxy({
    target: process.env.ANAIT || 'http://localhost:8080',
    changeOrigin: true
  })
)
app.use(
  '/ingredients',
  proxy({
    target: process.env.HEATHER || 'http://localhost:6001',
    changeOrigin: true
  })
)
app.get('/script', (req, res) => {
  res.send(config);
})
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

