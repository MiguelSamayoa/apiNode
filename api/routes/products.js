const express = require('express');
const productServices = require( '../services/products' );
const validatorHandler = require('../middlewares/validatorHandler');
const { CreateProductSchema, UpdateProductSchema, GetProductSchema } = require('../schemas/product');

const Service = new productServices();
const router = express.Router();

router.get('/', (req, res) => {
  products = Service.get()
  res.json(products);
})

router.get('/:id',
  validatorHandler(GetProductSchema, 'params'),
  (req, res, next) => {
  try {
    const { id } = req.params;
    let product = Service.getById( parseInt( id ) )
    res.json(product);
  }catch(err){
    next(err);
  }
})

router.get('/:id/reviews',
validatorHandler(GetProductSchema, 'params'),
(req, res) => {
    const { id } = req.params;

    res.json(product)
  }
)

router.post('/',
validatorHandler(CreateProductSchema, 'body'),
(req, res) => {
  try{
    const body = req.body;

    let created = Service.Create(body);

    res.status(201).json({
      message: "Created",
      data: created
    })
  }catch(err){
    next(err);
  }
})

router.patch('/:id',
validatorHandler(UpdateProductSchema, 'params'),
  (req, res, next) => {
  const { id } = req.params;
  const body = req.body;

  let updated = Service.Update(parseInt(id), body);
  res.json( updated )
})

router.delete ('/:id',
validatorHandler(GetProductSchema, 'params'),
(req, res, next) => {
  try{
    const { id } = req.params;
    let deleted = Service.Delete(parseInt(id));


    res.json({
      message: "Deleted",
      Deleted: deleted
    });

  }catch(err){
    next(err);
  }
})

module.exports = router;
