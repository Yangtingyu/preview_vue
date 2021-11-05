const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
const open = require('open');
const path = require('path');
app.use('/', express.static(path.join(__dirname, 'dist')));


const staticFileMiddleware = express.static('dist');
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

const port = 5555;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

open('http://localhost:5555');
