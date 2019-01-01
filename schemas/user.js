const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const userScheme = new Schema({
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
    },
    admin: {
        type: Boolean,
        default: false
    }
   },
   {
       versionKey: false
   });

   module.exports = userScheme;