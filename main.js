let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
let port = process.env.PORT || 4500;
let routes = require('./app/routes/AppRoutes.js');

app.use(cors());
app.options('*', cors());
let allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    }
app.use(allowCrossDomain);
app.listen(port);

console.log(`RESTful API server started on: ${port}`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
