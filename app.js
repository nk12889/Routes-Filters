const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const adminRoutes = require('./routes/admin');
const shopRoutes= require('./routes/shop')
const errorRoutes= require('./routes/error')

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);


app.listen(3000);
