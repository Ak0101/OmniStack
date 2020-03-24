const express = require('express');
const routes = require('./routes').default;
var mainRoutes = require('./Routes.js')

const app = express();

app.use(express.json());
app.use(mainRoutes)

app.listen(3333);