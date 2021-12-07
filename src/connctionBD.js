const Sequelize = require('sequelize')
const sequelize = new Sequelize('CTestoque','root','1407',{
    dialect:'mysql',
    host:'localhost',
    port: 3306  

})

module.exports = sequelize;