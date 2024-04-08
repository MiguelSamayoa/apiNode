const productsRouter = require('./products');
const usersRouter = require('./users');

function routerApi(app){
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
}

module.exports = routerApi;
