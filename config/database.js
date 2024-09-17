const Sequelize = require("sequelize");
sequelize = new Sequelize('WEBBACK1','root','mysqluser',
{
    host:'localhost',
    dialect:'mysql'
})

module.exports = {
    Sequelize,
    sequelize
}