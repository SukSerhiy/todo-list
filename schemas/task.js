const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const taskSchema = new Schema({
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
      },
      userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
   },
   {
     versionKey: false
   });

   const Task = mongoose.model('Task', taskSchema)

   module.exports = Task;