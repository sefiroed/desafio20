/*Creamos nuestra clase con los metodos a utilizar 
en la carpeta index.js*/
import * as model from './schema/productschema'




class ProductosPersistencia {
  constructor() {
    //this.productos = getRepository(Productos);
  }
  async leer() {
    const producto = await model.productsSchema.find();
    return producto;
  }
  async leerPorId(id:number) {
    const producto = await model.productsSchema
    .where('id')
    .limit(1)
    .select();
    

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
    
    const existProducto = await model.productsSchema
    .find()
    .where(id)
    .limit(1)
    

    if(existProducto.length === 0){
      return {"error": "Producto no ha sido encontrado"};
    }    
    const producto = {
      nombre: dato.nombre,
      precio: dato.precio,
      url: dato.url
    };

    // await productoRepo.save(producto)
    await model.productsSchema
    .find()
    .where(id)
    .update(producto);

    return producto
    
  }

  async borrar(id:any) {
    const producto = await model.productsSchema
    .find()
    .where('id','=',id)
    .limit(1)
    .select();
    
    if(!producto){
      return {"error": "Producto no ha sido encontrado"};
    }    
    
    await model.productsSchema
    .find()
    .where('id','=',id)
    .del();
    return producto
  } 
    
}


export default ProductosPersistencia;
