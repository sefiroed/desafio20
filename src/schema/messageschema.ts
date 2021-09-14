import mongoose,{ Schema, model, connect } from 'mongoose';

//Creamos una interface representando a nuestro productos en MongoDB
interface productColletion {
    nombre: string,
    precio: number,
    url: string
};

//Creamos un Schema correspondiente a la interface de productos
const productSchema = new Schema<productColletion>({
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    url: {type: String, required: true}
});


export const productsSchema = mongoose.model<productColletion>('productColletion', productSchema);