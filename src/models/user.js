const mongoose = require('mongoose')
const { Schema } = mongoose;

const UsersSchema = new Schema({
    email:{type:String},
    password:{type:String},
    position:{type:String}
},{
    timestamps: true
});

module.exports  = mongoose.model('User', UsersSchema);
