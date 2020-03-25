const express = require('express');
const cors = require('cors'); 
const routes = require('./routes').default;
var mainRoutes = require('./Routes.js')

const app = express();

app.use(cors());
app.use(express.json());
app.use(mainRoutes)

app.listen(3333);