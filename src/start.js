(async () => {

    const database = require ('./connctionBD')
    const PDEstoque = require ('./SQL/CTEstoque')
    await database.sync()

    /*
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
*/
    const ProdutosEstoque = await PDEstoque.create({

        Empresa: 'Bissoli ',
        IDProduto: 'E341B189Y89612',
        Produto: 'Pipoca Caramelo',
        QuantidadeEstoque: 14

    })
    console.log(ProdutosEstoque) 

    

})();