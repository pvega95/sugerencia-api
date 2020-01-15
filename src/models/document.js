const mongosse = require('mongoose');
// const {Schema} = mongosse;
var Schema = mongosse.Schema;
var User = mongosse.model('User');

const DocumentSchema = new Schema({
  des_actual : String,
  des_futura : String,
  fecha_ingreso : Date,
  img_actual: String,
  img_futura: String,
  estado: { type: String , default: '1'},
  autor : { type: Schema.ObjectId, ref: 'User' }
})

module.exports = mongosse.model('Document',DocumentSchema);