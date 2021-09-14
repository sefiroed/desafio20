import Mongoose from 'mongoose';

const productCollection = 'productos';

const productSchema = new Mongoose.Schema({
    id: {type: String},
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    url: {type: String, required: true}
});


export const productsSchema = Mongoose.model(productCollection, productSchema);