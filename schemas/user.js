const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        reqiured: true
    },
    email: {
        type: String,
        required: true
    }, 
    passwordHash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
   },
   {
       versionKey: false
   });

   const User = mongoose.model('User', userSchema)

   module.exports = User;