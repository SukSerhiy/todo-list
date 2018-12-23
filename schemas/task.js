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
      createDate: Date,
      modifyDate: Date
   },
   {
     versionKey: false
   });

   module.exports = taskScheme;