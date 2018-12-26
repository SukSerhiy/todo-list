const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const taskScheme = new Schema({
      name: {
        type: String,
        required: true
      },
      description: String,
      endDate: Date,
      completed: {
        type: Boolean,
        default: false
      },
      createDate: {
        type: Date,
        default: new Date()
      },
      modifyDate: {
        type: Date,
        default: new Date()
      }
   },
   {
     versionKey: false
   });

   module.exports = taskScheme;