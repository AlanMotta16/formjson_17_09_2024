const express = require('express');
const handlebars = require('handlebars');
const handlebars_mod = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


const appRoutes = require('./routes/approutes');
// fix error with handlebars ;(


app = express();

const {sequelize, Sequelize} = require('./config/database')
const booksModel = require("./models/books")(sequelize,Sequelize)

app.use (express.urlencoded({extended:false}));
app.use (express.json());

//var hbs=handlebars.create({defaultLayout:'main'});

// fix error with handlebars view engine
app.engine('handlebars',handlebars_mod.engine({
    handlebars: allowInsecurePrototypeAccess(handlebars)
})
);
app.set('view engine','handlebars');
app.use(appRoutes);
app.listen(3000, () => {
    console.log("Server running at 3000");
})
