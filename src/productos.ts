/*Creamos nuestra clase con los metodos a utilizar 
en la carpeta index.js*/
import { DataTypeNotSupportedError } from 'typeorm';
import { Producto } from './entities/formatoknex';
import * as model from './schema/productschema'




class ProductosPersistencia {
  constructor() {
    //this.productos = getRepository(Productos);
  }
  async leer() {
    const producto = await model.productsSchema.find();
    return producto;
  }
  async leerPorId(id:any) {
    const producto = await model.productsSchema.findById({})
    // .where('id')
    // .limit(1)

    if(producto.length > 0){
      return producto[0];
    }
    return undefined;
  }
  async guardar(dato:any) {
    
    const producto = {
      
      nombre: dato.nombre,
      precio: dato.precio,
      url: dato.url
    };


    await model.productsSchema.insertMany(producto);
    return producto;
  }  
  async actualizar(dato:any, id:any){
    
    const existProducto:Producto[] = await model.productsSchema
    .find({})
    .where('id')
    .limit(1)
    .select();
    // .findById(_id)
    // .where('_id','=',_id)
    // .limit(1)
    
    
    console.log(existProducto.length);
    if(existProducto.length == 0){
      return {"error": "Producto no ha sido encontrado"};
    }    
    const producto = {
      nombre: dato.nombre,
      precio: dato.precio,
      url: dato.url
    };

    // await productoRepo.save(producto)
    await model.productsSchema
    .findById(id)
    .where('id','=',id)
    .update(producto);

    return producto
    
  }

  async borrar(_id:any) {
    const producto = await model.productsSchema
    .findById(_id)
    .where('_id','=',_id)
    .limit(1)
    
    
    if(!_id){
      return {"error": "Producto no ha sido encontrado"};
    }    
    
    await model.productsSchema
    .findById(_id)
    .where('_id','=',_id)
    .deleteOne(producto);
    return producto
  } 
    
}


export default ProductosPersistencia;