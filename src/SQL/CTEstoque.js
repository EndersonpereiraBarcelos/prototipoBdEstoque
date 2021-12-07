const Sequelize =  require('sequelize')
const database = require('../connctionBD')

const PDEstoque = database.define('EstoquePD',{

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },

    Empresa:{
        type: Sequelize.STRING, // Passando o nome da empresa
        allowNull: false
    },

    IDProduto:{
        type: Sequelize.STRING, // ID do produto tipo codígo de barras 
        //allowNull: false
    },
    Produto:{
        type: Sequelize.STRING, // Nome do produto 
        //allowNull: false

    },
    QuantidaEstoque:{
        type: Sequelize.DECIMAL, // Quantidade que ainda possui no estoque 
        //allowNull: false

    }

})
module.exports = PDEstoque;