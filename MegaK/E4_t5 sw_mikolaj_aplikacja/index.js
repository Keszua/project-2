const express = require("express");
require('express-async-errors');
const methodOverride = require("method-override");
const { engine } = require("express-handlebars");
const { handleError } = require("./utils/errors");
const { homeRouter } = require("./routers/home");
const { childRouter } = require("./routers/child");
const { giftRouter } = require("./routers/gifts");
const { handlebarsHelpers } = require("./utils/handlebars-helpers");
require('./utils/db');

const app = express();

app.use(methodOverride('_method'));
app. use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
//app.use(express.json()); // dla jsonów przychodzących (nie musi byc dla wyjściowych)  Content-type: aplication/json
app.engine('.hbs', engine({        // na końcu midlewerów te 2 linijki
    extname: '.hbs',
    helpers: handlebarsHelpers,      // [opcja], jeśli korzystamy z helperów
}));  
app.set('view engine', '.hbs');

app.use('/', homeRouter)
app.use('/child', childRouter);
app.use('/gift', giftRouter);

app.use(handleError);

app.listen(3000, '127.0.0.1', () => {  console.log('Server is listening at http://localhost:3000'); });