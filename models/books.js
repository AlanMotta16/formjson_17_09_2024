const { sequelize } = require ("../config/database");

module.exports = (sequelize, DataTypes)=>
{
    var Books = sequelize.define('books',

        {
            id:{
                type: DataTypes.BIGINT(20),
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING
            },
            description:{
                type: DataTypes.STRING
            }

        },{
            timestamps:false
        }
   )
   // If there is not book table , create it. 
   //Books.sync ( { force:true });

   return Books

}


