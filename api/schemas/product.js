const joi = require('joi');

const id = joi.number().positive();
const name = joi.string().min(3).max(100);
const price = joi.number().positive();

const CreateProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
})

const UpdateProductSchema = joi.object({
  name: name,
  price: price
})

const GetProductSchema = joi.object({
  id: id.required()
})
