import * as model from '../schema/productschema'
import mongoose from 'mongoose';
import colors from 'colors';

const URL = 'mongodb://localhost:27017/ecommerce';


export async function connect() {

  try {
    await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("DB CONNECTED!!");

  } catch (e) {
    console.log("Error: ", e);
    
  }

};