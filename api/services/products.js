const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class productServices{
  constructor(){
    this.productos = []
    this.Generate()
  }

  Generate(){
    for(let i = 1; i <=100; i++){
      this.productos.push(
        {
          Id: i,
          Name: faker.commerce.productName(),
          Description: faker.commerce.productDescription(),
          Price: faker.commerce.price()
        }
      )
    }
  }

  get() {
    return this.productos;
  }

  getById(id) {
    let p = this.productos.find(x => x.Id === id);
    if(!p) throw boom.notFound("Producto no encontrado");
    return p;
  }

  Create(data){
    let producto = {
      Id: this.productos.length + 1,
      ...data
    };
    this.productos.push(producto);
    return producto;
  }

  Update(id, data){
    let index = this.productos.findIndex(x => x.Id === id);
    if(index === -1) throw new boom.notFound("Producto no encontrado");
    this.productos[index] = {...this.productos[index], ...data};
    return this.productos[index];
  }

  Delete(id){
    let index = this.productos.findIndex(x => x.Id === id);
    if(index === -1) throw boom.notFound("Producto no encontrado");
    let deleted = this.productos[index];
    this.productos.splice(index, 1);
    return deleted;
  }
}

module.exports = productServices;
