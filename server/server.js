var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('../webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: '/public'
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'src', 'index.html'));
});

app.listen(3344, function(err) {
    if (err) {
        return console.error(err);
    }
    console.log('Listening at http://localhost:3344/');
});