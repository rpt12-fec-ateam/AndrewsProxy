const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;
const proxy = require('http-proxy-middleware');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  '/allReviews',
  proxy({
    target: 'http://localhost:9000',
    changeOrigin: true
  })
);

app.use(
  '/allItems',
  proxy({
    target: 'http://localhost:9000',
    changeOrigin: true
  })
);

app.use(
  '/test',
  proxy({
    target: 'http://localhost:8080',
    changeOrigin: true
  })
)
app.use(
  '/ingredients',
  proxy({
    target: 'http://localhost:6001',
    changeOrigin: true
  })
)
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

