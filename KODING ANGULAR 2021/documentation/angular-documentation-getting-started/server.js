//install expressjs server
const express = require('express');
const app = express();
const path = require('path');

//serve only the static file form the dist directory
app.use(express.static('./dist/angular-documentation-getting-started'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/angular-documentation-getting-started' }),
);

//start the app by listening on the default heroku port
app.listen(process.env.PORT || 8080);