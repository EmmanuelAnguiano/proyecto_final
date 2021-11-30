const express = require('express');
var cors = require('cors');
const app = express()
app.use(cors());
var port = process.env.PORT || 1340 //localhost:1340
var router=require('./routes')
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/api',router);

app.listen(port);