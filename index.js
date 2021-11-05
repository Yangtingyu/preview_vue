const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
const open = require('open');
const path = require('path');
const process = require('process');



const staticFileMiddleware = express.static(path.join(process.cwd() + '/dist'));
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(process.cwd() + '/dist/index.html'));
});

const port = 5555;
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`);
});

open('http://localhost:5555');
